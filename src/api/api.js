const api = require('express').Router()

const { jwtVerify } = require('../middlewares/jwt') // eslint-disable-line no-unused-vars

// require routers here
const exampleRouter = require('./routers/example')
const authRoutes = require('./routers/auth')
api.use('/example', exampleRouter)
api.use('/user', authRoutes)
module.exports = api
