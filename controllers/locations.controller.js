//Dependencies
const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model.js");

//Configuration
locations.get("/", (req, res) => {
    res.json(locationsArray);
});
//we are using res.json instead of res.send because we are sending json instead of a simple string. 
//the res.json() is a method in Express that converts an array of objects into JSON format when sent to the client. The res.json() method automatically converts JavaScript objects or arrays into JSON format and ends the request.


//now we have to go back to app.js to connect our controllers for locations.


//Export
module.exports = locations;