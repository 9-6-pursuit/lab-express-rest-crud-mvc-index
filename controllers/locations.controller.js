// DEPENDENCIES
const express = require("express");
const locations = express()
const locationsArray = require("../models/location.model.js")
// console.log("Hey fellas")
// console.log(locationsArray)

locations.get("/", (req, res) => {
  res.json(locationsArray);
})



module.exports = locations;
