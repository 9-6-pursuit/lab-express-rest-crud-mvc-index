const express = require("express");
const router = express.Router();
const locationsArray = require("../models/location.model.js");

router.get("/", (req, res) => {
  res.json(locationsArray);
});

module.exports = router;
