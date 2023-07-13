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

const locationsController = require("./Controllers/locations.contollers")
app.use("/locations", locationsController)

const machinesController = require("./Controllers/machines.controller")
app.use("/machines", machinesController)

const personsController = require("./Controllers/persons.controller")
app.use("/persons", personsController)

const plansController = require("./Controllers/plans.controller")
app.use("/plans", plansController)

const specialEventsController = require("./Controllers/special-events.controllers")
app.use("/special-events", specialEventsController)


// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
  });

// EXPORT
module.exports = app;