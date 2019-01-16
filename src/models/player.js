const { prisma } = require('../generated/prisma-client')
const to = require('await-to-js').default

class Player {
  async getPlayer(id) {
    const filter = { where: { id } }
    const [err, player] = await to(prisma.players(filter))
    if (err) return new Error(err)

    return player
  }

  async getPlayers() {
    const [err, player] = await to(prisma.players())
    if (err) return new Error(err)

    return player
  }
  
  async getPlayerLastFive(id) {
    const filter = { 
      where: {
        OR: [
          {
            winner: { id },
          }, {
            loser: { id },
          }
        ],
      },
      orderBy: 'createdAt_DESC',
      first: 5
    }

    const [err, results] = await to(prisma.results(filter).winner())
    if (err) return new Error(err)

    let mappedResults = results.map(result => result.winner.id === id)

    return mappedResults
  }

  async getPlayerGames(id) {
    const filter = { 
      where: {
        OR: [
          {
            winner: { id },
          }, {
            loser: { id },
          }
        ],
      },
    }

    const [errResults, results] = await to(prisma.results(filter))
    if (errResults) return new Error(errResults)

    return results.length
  }

  async getPlayersByDivision(division) {
    const filter = { 
      where: {
        division
      },
    }

    const [err, players] = await to(prisma.players(filter))
    if(err) return new Error(err)

    return players
  }
}

module.exports = new Player()