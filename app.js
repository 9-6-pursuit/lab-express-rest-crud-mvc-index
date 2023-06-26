// DEPENDENCIES
const express = require("express");


// CONFIGURATION
const app = express();
// const bookmarksController = require("./controllers/bookmarksController.js");
// app.use("/bookmarks", bookmarksController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const locationsController = require("./controllers/locations.controller")
app.use("/locations", locationsController)
const plansController = require("./controllers/plans.controller")
app.use("/plans", plansController)
const machinesController = require("./controllers/machines.controller")
app.use("/machines", machinesController)
const personsController = require("./controllers/persons.controller")
app.use("/persons", personsController)
const specialEventsController = require("./controllers/special-events.controller")
app.use("/special-events", specialEventsController)

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("Sorry, no page found" );
  });

// EXPORT
module.exports = app;