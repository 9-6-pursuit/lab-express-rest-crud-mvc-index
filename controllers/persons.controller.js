const express = require("express");
const persons = express.Router();
const personArrary = require("../models/person.model");

persons.get("/", (req, res) => {
  res.send(personArrary);
});

module.exports = persons;