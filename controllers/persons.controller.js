const express = require("express");
const router = express.Router();
const personsArray = require("../models/location.model.js");

router.get("/", (req, res) => {
  res.json(personsArray);
});

module.exports = router;
