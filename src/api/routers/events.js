const express = require("express");
const router = express.Router();
const async = require("async");
const nodemailer = require("nodemailer");
const Events = require("../../database/models/Events");
const Users = require("../../database/models/Users");
const { jwtVerify } = require("../../middlewares/jwt");
require("dotenv").config({ path: "./src/env/.env" });

// Get All Events
router.get("/", async (req, res) => {
  const events = await Events.find();
  res.send(events);
});

// Adding an Event
router.post("/add", async (req, res) => {
  try {
    const Admin_Password = process.env.ADMIN_PASS;
    const Admin_User = process.env.ADMIN_USER;
    const {
      Type,
      EventName,
      Count,
      Description,
      Picture,
      StartDate,
      EndDate,
      Password,
      User,
    } = req.body;
    //console.log(User, Password);
    if (Admin_Password === Password && Admin_User === User) {
      const event = new Events({
        Type,
        EventName,
        Count,
        Description,
        Picture,
        StartDate,
        EndDate,
      });
      const savedEvent = await event.save();
      res.send(savedEvent);
    } else res.status(400).send({ Error: "Cannot be authorized" });
  } catch (e) {
    res.status(400).send(e);
  }
});

// User Event
router.get("/:id/all", jwtVerify, async (req, res) => {
  try {
    Users.findById(req.params.id)
      .populate("Events")
      .exec((err, foundUser) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.send(foundUser.Events);
        }
      });
  } catch (e) {
    res.status(400).send(e);
  }
});

// Registering for an Event
router.post("/:id/register/:eventID", jwtVerify, async (req, res) => {
  try {
    const event = await Events.findById(req.params.eventID);
    const user = await Users.findOne({
      _id: req.params.id,
      Events: { $nin: req.params.eventID },
    });
    if (user) {
      event.Count = event.Count + 1;
      const updatedEvent = await event.save();
      user.Events.push(event);
      const updatedUser = await user.save();

      async.waterfall(
        [
          function (done) {
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
              subject: `Sensors 2022 ${updatedEvent.EventName} Registration`,
              text:
                "You have successfully registered for the following event\n\n" +
                `${updatedEvent.EventName} to be conducted on ${updatedEvent.StartDate}`,
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
          res.json({
            status:0,
            msg:"Error in sending mail"
          })
        }
      );

      res.json({
        status:1,
        msg:"Success"
      });
    } else res.status(200).json({
      status:0,
      msg: "user already registered"
    });
  } catch (e) {
    res.status(200).send(e);
  }
});

// De-registering for an Event
router.post("/:id/deregister/:eventID", jwtVerify, async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    const event = await Events.findById(req.params.eventID);
    let index = user.Events.indexOf(req.params.eventID);
    //console.log(index);
    if (index > -1) {
      user.Events.splice(index, 1);
      event.Count = event.Count - 1;
      const updatedEvent = await event.save();
      const updatedUser = await user.save();
      res.json({
        updatedUser,
        updatedEvent,
      });
    } else res.status(400).json("user aldready deregistered");
  } catch (e) {
    res.status(400).send(e);
  }
});
module.exports = router;
