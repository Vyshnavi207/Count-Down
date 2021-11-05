
// call back functions for routers
const callBack = (req, res, next) => {
  res.json({ message: 'POST callbackfunction' }) // dummy function for now
}

module.exports = { callBack }
