const express = require("express");
const machines = express();
const machinesArray = require("../models/machine.model")

// ROUTES
machines.get("/", (req, res) => {
    res.json(machinesArray);
  });
  
module.exports = machines