const express = require("express");
const machines = express.Router();
const machineArrary = require("../models/machine.model");

machines.get("/", (req, res) => {
  res.send(machineArrary);
});

module.exports = machines;