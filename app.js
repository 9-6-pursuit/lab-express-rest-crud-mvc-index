const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const locationsController = require("./controllers/locations.controller");
app.use("/locations", locationsController);

const machinesController = require("./controllers/machines.controller");
app.use("/machines", machinesController);

const peopleController = require("./controllers/people.controller");
app.use("/people", peopleController);

const plansController = require("./controllers/plans.controller");
app.use("/plans", plansController);

const specialEventsController = require("./controllers/specialEvents.controller");
app.use("/special-events", specialEventsController);

const locations = require("./models/locations.model");
const people = require("./models/people.model");
app.get("/locations/people", (req, res) => {
  locations.forEach((location) => {
    location.people = people.filter((p) => location.zip === p.mainLocation);
  });
  res.send(locations);
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found!");
});

module.exports = app