const express = require("express");
const persons = express.Router();
//GETTING ARRAY OF PERSONS FROM MODELS
const personsArray = require("../models/person.model.js");

persons.get("/", (req, res) => {
  res.json(personsArray);
});

module.exports = persons;