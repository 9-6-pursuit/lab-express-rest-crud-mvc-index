const express = require("express");
const specialEvents = express.Router();
const specialEventArrary = require("../models/special-event.model");

specialEvents.get("/", (req, res) => {
  res.send(specialEventArrary);
});

module.exports = specialEvents;