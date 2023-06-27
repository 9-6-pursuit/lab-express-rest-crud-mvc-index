const express = require("express");
const people = express.Router();
const peoplesArray = require("../models/special-event.model");

//INDEX
people.get("/", (req, res) => {
    res.json(peoplesArray);
  });

  module.exports = people;
