const express = require("express")

const machines = express.Router()
let machinesArray = require("../models/machine.model")
 
machines.get("/", (req, res) => {
    res.json(machinesArray)
})

module.exports = machines