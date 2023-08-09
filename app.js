// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

//DEFINING THE BASE OF OUR ROUTES
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

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});


// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).json({ error: "Sorry, no page found!" });
  });

// EXPORT
module.exports = app;