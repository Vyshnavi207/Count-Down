const router = require('express').Router()

router.route('/new').get((req, res) => {
  res.send('Hello world')
})

module.exports = router
