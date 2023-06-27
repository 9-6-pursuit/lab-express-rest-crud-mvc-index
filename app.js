const express = require("express");
const app = express();

const locationsController = require("./controllers/locations.controller");
const peopleController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");
const equipmentController = require("./controllers/machines.controller");
const specialEventController = require("./controllers/special-events.controller");
const locations = require("./models/location.model");
const people = require("./models/person.model");

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

app.get("/locations/people", (req, res) => {
  const output = locations.map((location) => {
    if (location.zip === "11011") {
      const members = people.filter(
        (person) => person.mainLocation !== location.zip
      );
      return { ...location, members };
    } else {
      const peopleAtLocation = people.filter(
        (person) => person.mainLocation === location.zip
      );
      return { ...location, people: peopleAtLocation };
    }
  });
  res.json(output);
}); 


// 404 PAGE ROUTE
app.get("*", (req, res) => {
  res.status(404).json({ error: "Sorry, no page found!" });
});

module.exports = app;
