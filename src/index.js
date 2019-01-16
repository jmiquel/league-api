const app = require('express')()
const bodyParser = require('body-parser')
const routes = require('./controllers')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', routes)

app.listen(3001, () =>
  console.log('Server is running on http://localhost:3001'),
)
