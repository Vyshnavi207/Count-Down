const api = require('express').Router()

// require routers here
const exampleRouter = require('./routers/example')
const authRoutes = require('./routers/auth')
const eventRoutes = require('./routers/events')
api.use('/example', exampleRouter)
api.use('/user', authRoutes)
api.use('/events',eventRoutes);
module.exports = api
