const express = require("express");
const specialEventController = require("./controllers/special-events.controller");

const app = express();

app.use(express.json());

// Use specialEventController as middleware for the "/locations" route
app.use("/special-events", specialEventController);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

module.exports = app;
