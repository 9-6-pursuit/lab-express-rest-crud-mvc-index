const express = require("express");
const people = express();
const peopleModel = require("../models/people.model")

// ROUTES
people.get("/", (req, res) => {
    res.json(peopleModel);
  });

module.exports = people