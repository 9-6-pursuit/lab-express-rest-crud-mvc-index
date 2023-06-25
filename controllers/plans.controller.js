const express = require("express");
const plans = express.Router();
const planArrary = require("../models/plan.model");

plans.get("/", (req, res) => {
  res.send(planArrary);
});

module.exports = plans;