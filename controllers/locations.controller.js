const express = require("express")

const locations = express.Router()
let locationsArray = require("../models/location.model")
 
locations.get("/", (req, res) => {
    res.json(locationsArray)
})

module.exports = locations