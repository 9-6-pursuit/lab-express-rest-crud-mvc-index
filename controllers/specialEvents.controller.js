const express = require("express");
const specialEvents = express();
const specialEventsModel = require("../models/specialEvents.model")

// ROUTES
specialEvents.get("/", (req, res) => {
    res.json(specialEventsModel);
  });

module.exports = specialEvents