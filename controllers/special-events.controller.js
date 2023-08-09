const express = require("express");
const specialEvents = express.Router();
//GETTING ARRAY OF SPECIAL EVENTS FROM MODELS
const specialEventsArray = require("../models/special-event.model.js");

specialEvents.get("/", (req, res) => {
  res.json(specialEventsArray);
});

module.exports = specialEvents;