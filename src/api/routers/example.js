const exampleRouter = require('express').Router()

exampleRouter.route('/new').get((req, res) => {
  res.send('Hello world')
})

module.exports = exampleRouter
