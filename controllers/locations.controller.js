const express = require("express");
const locations = express.Router();
const locationArrary = require("../models/location.model");

locations.get("/", (req, res) => {
  res.send(locationArrary);
});

module.exports = locations;