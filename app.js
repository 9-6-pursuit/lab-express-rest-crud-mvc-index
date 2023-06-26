//dependencies 
const express = require('express');

//configuration
const app = express();
// const bookmarksController = require("./controllers/bookmarksController.js");
// app.use("/bookmarks", bookmarksController);

//routes
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

const locationsController = require("./controllers/locations.controller.js");
app.use("/locations", locationsController)

const machinesController = require("./controllers/machines.controller.js");
app.use("/machines", machinesController)

const personsController = require("./controllers/persons.controller.js");
app.use("/persons", personsController)

const plansController = require("./controllers/plans.controller.js");
app.use("/plans", plansController)

const specialEventsController = require("./controllers/special-events.controller.js");
app.use("/special-events", specialEventsController)

//404 page
app.get("*", (req, res) => {
    res.json({ error: "Sorry, no page found!"});
});

//export
module.exports = app;