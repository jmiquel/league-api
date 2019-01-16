const app = require('express')()
const bodyParser = require('body-parser')
const routes = require('./controllers')
const PORT = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', routes)

app.listen(PORT, () =>
  console.log('Server is running on http://localhost:3001'),
)
