const express = require("express");
const router = express.Router();
const Events = require("../../database/models/Events");
const Users = require("../../database/models/Users");
const { jwtVerify } = require("../../middlewares/jwt");

// Get All Events
router.get("/", async (req, res) => {
  const events = await Events.find();
  res.send(events);
});

// Adding an Event
router.post("/add", jwtVerify, async (req, res) => {
  try {
    const { Type, EventName, Count, Description, Picture, StartDate, EndDate } =
      req.body;
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
      id: req.params.id,
      Events: { $nin: event },
    });
    if (user) {
      event.Count = event.Count + 1;
      const updatedEvent = await event.save();
      user.Events.push(event);
      const updatedUser = await user.save();
      res.json({
        updatedUser,
        updatedEvent,
      });
    } else res.status(400).json("user aldready registered");
  } catch (e) {
    res.status(400).send(e);
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
