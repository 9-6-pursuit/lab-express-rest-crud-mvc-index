//Dependencies
const express = require("express");
const persons = express.Router();
const personsArray = require("../models/person.model.js");

//Configuration
persons.get("/", (req, res) => {
    res.json(personsArray);
});

//Export
module.exports = persons;