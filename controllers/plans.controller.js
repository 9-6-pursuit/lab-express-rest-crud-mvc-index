//Dependencies
const express = require("express");
const plans = express.Router();
const plansArray = require("../models/plan.model.js");

//Configuration
plans.get("/", (req, res) => {
    res.json(plansArray);
});

//Export
module.exports = plans;