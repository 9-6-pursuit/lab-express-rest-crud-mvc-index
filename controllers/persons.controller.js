const express = require("express");
const router = express.Router();
const personsArray = require("../models/person.model.js");

router.get("/", (req, res) => {
  res.json(personsArray);
});

module.exports = router;
