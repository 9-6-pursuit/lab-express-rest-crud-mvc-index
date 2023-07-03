const express = require("express");
const machines = express();
const machinesModel = require("../models/machines.model")

// ROUTES
machines.get("/", (req, res) => {
    res.json(machinesModel);
  });

module.exports = machines