'use strict'
const fs = require('fs')
const path = require('path')

// Loads all the routes inside the folder
module.exports = function (app) {
  fs.readdirSync('./app/controllers/').forEach(function (file) {
    // Avoid to read this current file.
    if (file === path.basename(__filename)) { return }

    // Load the route file.
    app.use('/' + (file).split('.')[0], require('./controllers/' + file))
  })
}
