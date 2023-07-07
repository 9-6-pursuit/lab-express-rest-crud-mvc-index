const express = require("express");
const specialevents = express();
const specialeventsArray = require("../models/special-event.model.js");

specialevents.get("/", (req, res) => {
  res.json(specialeventsArray);
});

module.exports = specialevents;