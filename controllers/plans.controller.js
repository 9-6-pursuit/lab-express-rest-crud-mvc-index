const express = require("express")

const plans = express.Router()
let plansArray = require("../models/plan.model")
 
plans.get("/", (req, res) => {
    res.json(plansArray)
})

module.exports = plans