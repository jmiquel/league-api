const { prisma } = require('../generated/prisma-client')
const to = require('await-to-js').default
const Player = require('./player')

class Division {
  async getDivisionMatches(divisionName) {
    const filter = { where: { division: divisionName } }
    const [errResults, results] = await to(prisma.results(filter))
    if(errResults) return 'Connection problem';

    const [errLosers, losers] = await to(prisma
      .results(filter)
      .loser())
    if(errLosers) return 'Connection problem';

    const [errWinners, winners] = await to(prisma
      .results(filter)
      .winner())
    if(errWinners) return 'Connection problem';
    
    
    const response = results.map((result, idx) => {
      return {
        ...result,
        winner: winners[idx].winner.id,
        loser: losers[idx].loser.id,
      }
    })

    return response
  }

  async getDivisionResults (division) {
    const response = []

    for (const result of division) {
      const winner = await Player.getPlayer(result.winner)
      const loser = await Player.getPlayer(result.loser)
      const game = {
        season: result.season,
        division: result.division,
        points: result.points,
        category: result.category,
        loser: {
          id: loser[0].id,
          name: loser[0].name
        },
        winner: {
          id: winner[0].id,
          name: winner[0].name
        }
      }

      response.push(game)
    }

    return response
  }

  async generateLeague(players) {
    const league = []

    for(let player of players) {
      league.push({
        id: player.id,
        games: 0,
        name: player.name,
        points: 0,
        streak: []
      })
    }

    return league
  }

  async getDivisionTotals(division, results) {
    const players = await Player.getPlayersByDivision(division)
    const league = await this.generateLeague(players)

    //Group by name and sum points
    for(let result of results) {
      const winnerIdx = league.findIndex(player => player.name === result.winner.name)
      const loserIdx = league.findIndex(player => player.name === result.loser.name)
      if (winnerIdx > -1) {
        const winnerLastFive = await Player.getPlayerLastFive(league[winnerIdx].id)
        const loserLastFive = await Player.getPlayerLastFive(league[loserIdx].id)
        const winnerTotalGames = await Player.getPlayerGames(league[winnerIdx].id)
        const loserTotalGames = await Player.getPlayerGames(league[loserIdx].id)
        league[winnerIdx].points += result.points
        league[winnerIdx].games = winnerTotalGames
        league[winnerIdx].streak = winnerLastFive
        league[loserIdx].games = loserTotalGames
        league[loserIdx].streak = loserLastFive
      }
    }

    return league.sort((a, b) => b.points - a.points || (b.games === a.games ? a.name.localeCompare(b.name) : b.games < a.games))
  }
}

module.exports = new Division()