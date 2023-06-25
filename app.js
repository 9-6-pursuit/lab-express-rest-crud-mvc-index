// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
const locationController = require("./controllers/locations.controller")
const machinesController = require("./controllers/machines.controller")
const personsController = require("./controllers/persons.controller")
const plansController = require("./controllers/plans.controller")
const eventsController = require("./controllers/special-events.controller")



// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/locations", locationController)

app.use("/machines", machinesController)

app.use("/persons", personsController)

app.use("/plans", plansController)

app.use("/special-events", eventsController)


// 404 PAGE
app.use("/*", (req, res) => {
    res.status(404).send("Sorry, no page found!");
  });

  

// EXPORT
module.exports = app;