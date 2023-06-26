// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
// const bookmarksController = require("./controllers/bookmarks.controller.js");
// app.use("/bookmarks", bookmarksController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Locations Controller
const locationsController = require("./controllers/locations.controller.js");
app.use("/locations", locationsController);

// People Controller
const peoplesController = require("./controllers/persons.controller.js");
app.use("/people", peoplesController);

// Plans Controller
const plansController = require("./controllers/plans.controller.js");
app.use("/plans", plansController);

// Machines Controller
const machinesController = require("./controllers/machines.controller.js");
app.use("/machines", machinesController);

// Special Events Controller
const specialEventsController = require("./controllers/special-events.controller.js");
app.use("/special-events", specialEventsController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

// EXPORT
module.exports = app;
