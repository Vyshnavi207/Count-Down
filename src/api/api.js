const api = require('express').Router();

const { jwtVerify } = require('../middlewares/jwt');

//require routers here 
// const exampleRouter = require('./routers/example');
// api.use('/example', exampleRouter);


module.exports = api;