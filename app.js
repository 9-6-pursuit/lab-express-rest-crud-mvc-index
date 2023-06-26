const express = require("express")

const app = express()

const locationController = require("./controllers/locations.controller")
app.use("/locations" , locationController)

const machinesController = require("./controllers/machines.controller")
app.use("/machines" ,machinesController)

const personController = require("./controllers/persons.controller")
app.use("/persons" , personController)

const planController = require("./controllers/plans.controller")
app.use("/plans" , planController)

const specialController = require("./controllers/special-events.controller")
app.use("/special-events" , specialController)

app.get("/", (req, res) => {
    res.send("Hello World!")
})

// const peopleData = [
//     {name: "Najee", location }
// ]

// app.get("/locations/people" , (req, res) => {
//     const peopleByLocation = {}
// })

app.get("*", (req, res) => {
    res.status(404).send("Sorry, no page found." );
});

module.exports = app