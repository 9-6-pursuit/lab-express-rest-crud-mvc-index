const express = require("express");
const plans = express();
const plansArray = require("../models/plan.model")

// ROUTES
plans.get("/", (req, res) => {
    res.json(plansArray);
  });
  
module.exports = plans