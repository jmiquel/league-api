const routes = require('express').Router()
const division = require('./division')

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' })
})
routes.use('/division', division)

module.exports = routes