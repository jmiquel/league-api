const routes = require('express').Router()
const division = require('./division')
const players = require('./players')

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' })
})
routes.use('/division', division)
routes.use('/players', players)

module.exports = routes