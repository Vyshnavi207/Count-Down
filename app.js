require('dotenv').config({ path: './src/env/.env' })

const cors = require('cors')

const express = require('express')
const app = express()
const store = require('store2') // eslint-disable-line no-unused-vars
const port = process.env.PORT
const bodyParser = require('body-parser')
const flash = require("connect-flash");
const session = require("express-session");
// const $ = require('jQuery');

require('./src/database/setup.js') // change setup.js to samples.js to create dummy data in database.

// require('./src/database/samples.js');
const apiRouter = require('./src/api/api')
const indexRouter = require('./src/api/routers/index');
app.set('view engine', 'ejs')
app.use(
  session({
    secret: process.env.TOKEN_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
const path = require('path')
app.use(express.static(path.join(__dirname, 'src/public')))
// app.use(express.static(path.join(__dirname, 'src/static')))
app.set('views', path.join(__dirname, 'src/views'));
app.use(cors())
app.use(flash());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  res.locals.user = req.user;
  next()
})
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(express.json())

app.use('/api', apiRouter)
app.use('/',indexRouter);
app.listen(port, () => console.log('server started at port ' + port))
