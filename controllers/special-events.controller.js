const express = require("express");
const specialEvents = express();
const specialEventsArray = require("../models/special-event.model")

// ROUTES
specialEvents.get("/", (req, res) => {
    res.json(specialEventsArray);
  });
  
module.exports = specialEvents