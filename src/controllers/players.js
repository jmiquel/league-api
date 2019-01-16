const router = require('express').Router()
const Player = require('../models/player')

router.get('/', async (req, res) => {
  const response = await Player.getPlayers()

  res.send(response)
})

module.exports = router