const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../../database/models/Users')
const { registerValidation, LoginValidation } = require('../../middlewares/validation')
const { createJWTtoken } = require('../../middlewares/jwt')

router.get('/register', (req, res) => {
  res.send('Welcome to Register Page')
})

router.post('/register', async (req, res) => {
  const { Name, Email, Department, College, MobileNo, Year, password } = req.body
  const { error, value } = registerValidation(req.body)
  const errMsg = error ? error.details[0].message : ''
  if (error) {
    return res.status(400).send(errMsg)
  } else {
    // Checking if user already in Database
    const emailExists = await User.findOne({ Email })
    if (emailExists) {
      return res.status(400).send('Email Already exists')
    }

    // Hashing the password
    const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUND))
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = new User({
      Name,
      Email,
      Department,
      College,
      MobileNo,
      Year,
      password: hashedPassword
    })
    try {
      const savedUser = await user.save()
      res.send({ id: savedUser._id, name: savedUser.Name, email: savedUser.Email })
    } catch (err) {
      res.status(400).send(err)
    }
  }
})

router.get('/login', (req, res) => {
  res.send('Welcome to Login Page')
})

router.post('/login', async (req, res) => {
  const { Email, password } = req.body
  const { error, value } = LoginValidation(req.body)
  const errMsg = error ? error.details[0].message : ''
  if (error) {
    return res.status(400).send(errMsg)
  } else {
    // Checking if user already in Database
    const user = await User.findOne({ Email })
    if (!user) {
      return res.status(400).send("User Doesn't exists")
    }
    // Validate Password
    const validPass = await bcrypt.compare(password, user.password)
    if (!validPass) {
      return res.status(400).send('Invalid Password')
    }

    // // JWT Verification
    const token = createJWTtoken(user)

    res.header('auth-token', token).send(token)
  }
})
module.exports = router
