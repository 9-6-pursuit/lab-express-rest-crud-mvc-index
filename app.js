// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();


// ROUTES
app.get("/", (req, res) => {
    res.send("Hello, world!");
});
const locationsController = require("./controllers/locations.controller.js");
app.use("/locations", locationsController);

const machinesController = require("./controllers/machines.controller.js");
app.use("/machines", machinesController);

const personsController = require("./controllers/persons.controller.js");
app.use("/persons", personsController);

const plansController = require("./controllers/plans.controller.js");
app.use("/plans", plansController);

const specialEventsController = require("./controllers/special-events.controller.js");
app.use("/special-events", specialEventsController);


// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;