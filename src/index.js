const app = require('express')()
const bodyParser = require('body-parser')
const routes = require('./controllers')

app.use(bodyParser.json())

app.use('/', routes)

app.listen(3000, () =>
  console.log('Server is running on http://localhost:3000'),
)
