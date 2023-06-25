const express = require("express");
const specialEvents = express();
const eventsArray = require("../models/special-event.model.js");

specialEvents.get("/", (req, res) => {
    res.json(eventsArray);
});

module.exports = specialEvents;