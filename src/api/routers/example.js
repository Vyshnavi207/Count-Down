const express = require('express')
const router = express.Router()
const { jwtVerify } = require('../../middlewares/jwt')
router.get('/', jwtVerify, (req, res) => {
  res.send('Hello World')
})

module.exports = router
