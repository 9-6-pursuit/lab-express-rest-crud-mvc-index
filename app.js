/** @format */

const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

const locationsController = require("./controllers/locations.controller");
const personsController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");
const machinesController = require("./controllers/machines.controller");
const specialEventsController = require("./controllers/special-events.controller");

app.get("/", (req, res) => {
	res.send("Hello, world!");
});

app.get("/locations", locationsController.index);

app.get("/persons", personsController.index);

app.get("/plans", plansController.index);

app.get("/machines", machinesController.index);

app.get("/special-events", specialEventsController.index);

app.use((req, res) => {
	res.status(404).send("Sorry, no page found!");
});

app.listen(port, () => {
	console.log(`The server is listening on the port ${port}`);
});

module.exports = app;