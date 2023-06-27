const express = require("express");
const people = express.Router();
const peoplesArray = require("../models/person.model");

//INDEX
people.get("/", (req, res) => {
  res.json(peoplesArray);
});

// people.get("/:arrayIndex", (req, res) => {
//   if (peoplesArray[req.params.arrayIndex]) {
//     res.json(peoplesArray[req.params.arrayIndex]);
//   } else {
//     res.status(404).json({ error: "Not Found" });
//   }
// });
module.exports = people;
