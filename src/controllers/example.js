
// call back functions for routers
const call_back = (req, res, next) => {
  res.json({message: "POST callbackfunction"}); // dummy function for now
};

module.exports = {call_back};