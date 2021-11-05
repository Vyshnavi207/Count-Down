require('dotenv').config({ path: './src/env/.env' })

const cors = require('cors')

const express = require('express')
const app = express()
const store = require('store2') // eslint-disable-line no-unused-vars
const port = process.env.PORT
// const $ = require('jQuery');

require('./src/database/setup.js') // change setup.js to samples.js to create dummy data in database.

// require('./src/database/samples.js');
const apiRouter = require('./src/api/api')

app.set('view engine', 'ejs')

const path = require('path')
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.static(path.join(__dirname, '/static')))

app.use(cors())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', apiRouter)

app.listen(port, () => console.log('server started at port ' + port))
