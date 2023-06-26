const express = require("express");
const router = express.Router();
const specialEventsArray = require("../models/special-event.model.js");

router.get("/", (req, res) => {
  res.json(specialEventsArray);
});

module.exports = router;
