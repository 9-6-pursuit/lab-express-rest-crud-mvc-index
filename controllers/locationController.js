const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/locationModel.js");

locations.get("/", (req, res) => {
  res.json(locationsArray);
});



module.exports = locations;      