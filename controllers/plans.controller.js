const express = require("express");
const router = express.Router();
const plansArray = require("../models/plan.model.js");

router.get("/", (req, res) => {
  res.json(plansArray);
});

module.exports = router;
