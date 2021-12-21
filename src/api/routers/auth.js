const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const async = require('async')
const nodemailer = require('nodemailer')
const crypto = require("crypto");
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
    if(!Email.includes("gmail")){
      return res.status(400).send("Only Gmail ID is allowed");
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

    if(!user.verified){
      return res.status(400).send("Please verify your email account");
    }

    // // JWT Verification
    const token = createJWTtoken(user)

    res.header('auth-token', token).send(token)
  }
})

router.get("/verify_email",(req,res)=>{
  res.send("Verify Email");
});

router.post("/verify_email", (req, res) => {
  async.waterfall(
    [
      function (done) {
        crypto.randomBytes(20, function (err, buf) {
          let token = buf.toString("hex");
          done(err, token);
        });
      },
      function (token, done) {
        User.findOne({ Email: req.body.email }, function (err, user) {
          if (!user) {
            // req.flash("error", "No account with that email address exists.");
            console.log("No account with email address exists");
            return res.redirect("verify_email");
          }

          user.verifyToken = token;
          user.verifyTokenExpires = Date.now() + 3600000; // 1 hour

          user.save(function (err) {
            done(err, token, user);
          });
        });
      },
      function (token, user, done) {
        let smtpTransport = nodemailer.createTransport({
          service: process.env.EMAIL_SERVICE,
          auth: {
            user: process.env.VERI_EMAIL,
            pass: process.env.VERI_PASSWORD,
          },
        });
        let mailOptions = {
          to: user.Email,
          from: process.env.VERI_EMAIL,
          subject: "Sensors 2022 Email Verification",
          text:
            "You are receiving this because you (or someone else) have created an account for Sensors 2022 Website.\n\n" +
            "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
            "http://" +
            req.headers.host +
            "/api/user/verify_email/" +
            token +
            "\n\n"
        };
        smtpTransport.sendMail(mailOptions, function (err) {
          console.log("mail sent", user.Email);
          // req.flash(
          //   "success",
          //   "An e-mail has been sent to " +
          //   user.email +
          //   " with further instructions."
          // );
          done(err, "done");
        });
      },
    ],
    function (err) {
      if (err) return next(err);
      res.redirect("verify_email");
    }
  );
});

router.get("/verify_email/:token", async function (req, res) {
  const user = await User.findOne(
    {
      verifyToken: req.params.token,
      verifyTokenExpires: { $gt: Date.now() },
    }
  );
  user.verifyToken = null;
  user.verifyTokenExpires = null;
  user.verified = true;
  const savedUser = await user.save();
  return res.json(savedUser);
});


module.exports = router
