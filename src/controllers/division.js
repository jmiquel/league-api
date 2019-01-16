const router = require('express').Router()
const Division = require('../models/division')
const to = require('await-to-js').default
const { prisma } = require('../generated/prisma-client')

router.get('/:division', async (req, res) => {
  const [err, response] = await to(Division.getDivisionMatches(req.params.division))
  if (err) res.send({})

  res.send(response)
})

router.get('/:division/results', async (req, res) => {
  const [err, division] = await to(Division.getDivisionMatches(req.params.division))
  if (err) res.status(404).json({ err })
  const [errResults, response] = await to(Division.getDivisionResults(division))
  if (errResults) res.status(404).json({ errResults })

  res.send(response)
})

router.get('/:division/league', async (req, res, next) => {
  const { division } = req.params
  const [errMatches, divisionMatches] = await to(Division.getDivisionMatches(division))
  if (errMatches) res.status(404).json({ errMatches })
  const [errResults, results] = await to(Division.getDivisionResults(divisionMatches))
  if (errResults) res.status(404).json({ errResults })
  const [errTotals, divisionTotals] = await to(Division.getDivisionTotals(division, results))
  if (errTotals) res.status(404).json({ errTotals })

  res.send(divisionTotals)
})

router.post('/:division', async (req, res) => {
  const { season, category, points, loserId, winnerId, division } = req.body

  const post = await prisma.createResult({
    category,
    season: parseInt(season),
    division,
    points: parseInt(points),
    loser: {
      connect: {
        id: loserId
      }
    },
    winner: {
      connect: {
        id: winnerId
      }
    }
  })

  res.send(post)
})

module.exports = router