const { prisma } = require('../generated/prisma-client')

class Player {
  async getPlayer(id) {
    const filter = { where: { id } }
    const player = await prisma.players(filter)
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

    const results = await prisma.results(filter).winner()
    let mappedResults = results.map(result => result.winner.id === id)

    if (!mappedResults) {
      const lostMatches = await prisma.results(filter).loser()
      mappedResults = lostMatches.map(match => match.loser.id !== id)
    }

    return mappedResults
  }
}

module.exports = new Player()