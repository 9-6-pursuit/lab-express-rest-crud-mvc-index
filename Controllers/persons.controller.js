const express = require("express");
const persons = express();
const personsArray = require("../models/person.model.js");

persons.get("/", (req, res) => {
    res.json(personsArray);
});

module.exports = persons;