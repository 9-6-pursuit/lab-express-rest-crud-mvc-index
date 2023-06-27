const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/special-event.model");

//INDEX
locations.get("/", (req, res) => {
  res.json(locationsArray);
});

module.exports = locations;
