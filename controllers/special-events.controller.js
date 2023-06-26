const express = require("express")

const special = express.Router()
let specialArray = require("../models/special-event.model")
 
special.get("/", (req, res) => {
    res.json(specialArray)
})

module.exports = special