require('dotenv').config({ path: './env/.env' })

const express = require('express')
const app = express()
app.use(express.json())

const cors = require('cors')
app.use(cors())
module.exports = app

const mongoose = require('mongoose')

const PORT = process.env.PORT
const dbURL = process.env.dbURL
const dbName = process.env.dbName

mongoose.connect(dbURL + dbName, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const connection = mongoose.connection
connection.once('open', () => {
  console.log(dbURL + dbName)
  console.log('DB connected.')
})

function main () {
  // Load all routes.
  require('./app/routes')(app)
  require('./app/controllers')(app)

  // Listen on http port.
  app.listen(PORT, () => {
    console.log(`Successfully served on port: ${PORT}.`)
  })
}

main()
