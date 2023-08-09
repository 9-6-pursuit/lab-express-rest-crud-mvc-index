const express = require("express");
const plans = express.Router();
//GETTING ARRAY OF PLANS FROM MODELS
const plansArray = require("../models/plan.model.js");

plans.get("/", (req, res) => {
  res.json(plansArray);
});

module.exports = plans;