const express = require("express");
const special_events= express()
const special_eventsArray = require("../models/special-event.model.js");

special_events.get("/", (req, res) => {
  res.json(special_eventsArray);
});

module.exports = special_events;