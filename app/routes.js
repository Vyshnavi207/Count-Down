'use strict'
const fs = require('fs')

// Loads all the routes inside the folder
module.exports = function (app) {
  fs.readdirSync('./app/routes').forEach(function (file) {
    // Load the route file.
    require('./routes/' + file)(app)
  })
}
