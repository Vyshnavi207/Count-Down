const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../database/models/Users');
const createJWTtoken = (user) => {
  return jwt.sign(
    {
      username: user.Email,
      id: user._id
    },
    process.env.TOKEN_SECRET,
    { expiresIn: '168h' }
  )
}

const jwtVerify = async (req, res, next) => {
  const token = req.header('auth-token')
  try {
    if (!token) return res.status(200).json({ status:0 ,message: 'No token' })
    // console.log(process.env.TOKEN_SECRET)
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decoded) => {
      req.jwt_payload = decoded
      if (err) {
        console.log(err.message)
        return res
          .status(200)
          .json({ status:0, message: 'Invalid token or token expired' })
      }
      if (!mongoose.Types.ObjectId.isValid(decoded.id)) { return res.status(400).json({ message: 'Invalid userId' }) }
      const user = await User.findById(mongoose.Types.ObjectId(decoded.id));
      if(!user.verified){
        return res.redirect("/verify_email");
      }
      req.user = user
      return next()
    })
    return null
  } catch (err) {
    console.log('error', err.message)
    return res
      .status(500)
      .json({ message: 'Server error. Try again later' })
  }
}

module.exports = {
  jwtVerify,
  createJWTtoken
}
