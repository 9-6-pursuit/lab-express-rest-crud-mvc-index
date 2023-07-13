const express = require("express");
const plans = express();
const plansArray = require("../models/plan.model.js");

plans.get("/", (req, res) => {
    res.json(plansArray);
});

module.exports = plans;