//Dependencies
const express = require("express")

//Configaration
const app =express()

//Routes
app.get("/", (request, response)=>{
    response.send("Hello, world!")
    })
//Controllers
const locationsController = require("./controllers/locations.controller.js")
    app.use("/locations", locationsController)

const machinesController = require("./controllers/machines.controller.js")
    app.use("/machines", machinesController)

const personsController = require("./controllers/persons.controller.js")
    app.use("/persons", personsController)

const plansController = require("./controllers/plans.controller.js")
    app.use("/plans", plansController)

const special_eventsController = require("./controllers/special-events.controller.js")
    app.use("/special-events", special_eventsController)
//404 page
app.get("*", (req, res)=>{
    res.status(404).send("Page not found.")
})




//Export
module.exports = app;