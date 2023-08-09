const express = require("express");
const machines = express.Router();
//GETTING ARRAY OF MACHINES FROM MODELS
const machinesArray = require("../models/machine.model.js");

machines.get("/", (req, res) => {
  res.json(machinesArray);
});

module.exports = machines;