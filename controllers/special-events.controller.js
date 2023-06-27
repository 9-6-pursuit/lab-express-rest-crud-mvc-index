const express = require("express");
const specialEvents = express.Router();
const eventsArray = require("../models/special-event.model");

//INDEX
specialEvents.get("/", (req, res) => {
    res.json(eventsArray);
  });

  module.exports = specialEvents;
