const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Department: String,
  College: String,
  MobileNo: Number,
  Year: String,
  verifyToken: String,
  verifyTokenExpires: Date,
  verified: {
    type:Boolean,
    default:false
  },
  Events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Events'
    },
  ],
  password: String
})

const Users = mongoose.model('Users', userSchema)
module.exports = Users
