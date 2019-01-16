const { prisma } = require('../generated/prisma-client')
const Player = require('./player')

class Division {
  async getDivisionResults(divisionName) {
    const filter = { where: { division: divisionName } }
    const results = await prisma
      .results(filter)
    const losers = await prisma
      .results(filter)
      .loser()
    const winners = await prisma
      .results(filter)
      .winner()
    
    const response = results.map((result, idx) => {
      return {
        ...result,
        winner: winners[idx].winner.id,
        loser: losers[idx].loser.id,
      }
    })

    return response
  }

  async getDivisionStandings (division) {
    const response = []

    for (const result of division) {
      const winner = await Player.getPlayer(result.winner)
      const loser = await Player.getPlayer(result.loser)
      const score = {
        winner: winner[0].name,
        winnerId: winner[0].id,
        loser: loser[0].name,
        loserId: loser[0].id,
        points: result.points 
      }

      response.push(score)
    }

    return response
  }

  async generateLeague(divisionResults) {
    const league = []

    for(let result of divisionResults) {
      const winnerIdx = league.findIndex(player => player.name === result.winner)
      const loserIdx = league.findIndex(player => player.name === result.loser)
      if (winnerIdx === -1) {
        league.push({
          id: result.winnerId,
          name: result.winner,
          points: 0,
          streak: []
        })
      }

      if (loserIdx === -1) {
        const lastFive = await Player.getPlayerLastFive(result.loserId)
        league.push({
          id: result.loserId,
          name: result.loser,
          points: 0,
          streak: lastFive
        })
      }
    }

    return league
  }

  async getDivisionTotals(divisionResults) {
    const league = await this.generateLeague(divisionResults)

    //Group by name and sum points
    for(let result of divisionResults) {
      const winnerIdx = league.findIndex(player => player.name === result.winner)
      if (winnerIdx > -1) {
        const lastFive = await Player.getPlayerLastFive(league[winnerIdx].id)
        league[winnerIdx].points += result.points
        league[winnerIdx].streak = lastFive
      } else {
        const lastFive = await Player.getPlayerLastFive(league[winnerIdx].id)
        league.push({
          name: result.winner,
          points: result.points,
          streak: lastFive
        })
      }
    }

    return league.sort((a, b) => b.points - a.points)
  }
}

module.exports = new Division()