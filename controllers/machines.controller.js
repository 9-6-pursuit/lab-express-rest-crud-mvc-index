const express = require("express");
const equipment = express.Router();
const machineArray = require("../models/machine.model");

//INDEX
equipment.get("/", (req, res) => {
    res.json(machineArray);
  });

  module.exports = equipment;
