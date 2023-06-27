const express = require("express");

const locationsController = require("./controllers/locations.controller");
const peopleController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");
const equipmentController = require("./controllers/machines.controller");
const specialEventController = require("./controllers/special-events.controller");

const app = express();

app.use(express.json());

// Use specialEventController as middleware for the "/locations" route
app.use("/locations", locationsController);
app.use("/people", peopleController);
app.use("/plans", plansController);
app.use("/equipment", equipmentController);
app.use("/special-events", specialEventController);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

module.exports = app;
