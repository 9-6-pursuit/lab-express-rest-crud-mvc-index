const express = require("express");
const router = express.Router();
const machinesArray = require("../models/machine.model.js");

router.get("/", (req, res) => {
  res.json(machinesArray);
});

module.exports = router;
