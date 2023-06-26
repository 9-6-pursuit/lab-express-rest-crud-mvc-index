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

// Location Model
const locationModel = require("./models/location.model.js");
// Index route for Location Model
app.get("/locations", (req, res) => {
  const locations = locationModel.index();
  res.json(locations);
});

// Machine Model
const machineModel = require("./models/machine.model.js");
// Index route for Machine Model
app.get("/machines", (req, res) => {
  const machines = machineModel.index();
  res.json(machines);
});

// Person Model
const personModel = require("./models/person.model.js");
// Index route for Person Model
app.get("/persons", (req, res) => {
  const persons = personModel.index();
  res.json(persons);
});

// Plan Model
const planModel = require("./models/plan.model.js");
// Index route for Plan Model
app.get("/plans", (req, res) => {
  const plans = planModel.index();
  res.json(plans);
});

// Special-Events Model
const specialEventsModel = require("./models/special-event.model.js");
// Index route for Special-Events Model
app.get("/specialevents", (req, res) => {
  const specialEvents = specialEventsModel.index();
  res.json(specialEvents);
});

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

// EXPORT
module.exports = app;
