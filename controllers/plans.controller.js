const express = require("express");
const plans = express();
const plansModel = require("../models/plans.model")

// ROUTES
plans.get("/", (req, res) => {
    res.json(plansModel);
  });

module.exports = plans