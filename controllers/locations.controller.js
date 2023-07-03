const express = require("express");
const locations = express();
const locationsModel = require("../models/locations.model")

// ROUTES
locations.get("/", (req, res) => {
    res.json(locationsModel);
  });

module.exports = locations