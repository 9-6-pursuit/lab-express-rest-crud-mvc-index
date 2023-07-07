//Dependencies
const express = require("express");

//Configuration
const app = express();
//controllers
const locationsController = require("./controllers/locations.controller.js");

const machinesController = require("./controllers/machines.controller.js");

const personsController = require("./controllers/persons.controller.js");

const plansController = require("./controllers/plans.controller.js");

const specialEventsController = require("./controllers/special-events.controller.js");

//Routes
app.get("/", (req, res) => {
    res.send("Hello, world!");
})

app.use("/locations", locationsController);

app.use("/machines", machinesController);

app.use("/persons", personsController);

app.use("/plans", plansController);

app.use("/special-events", specialEventsController);
//here we can name our routes independently from what they are named in our controllers. look at the /equipment route for example. Naming the route "equipment" instead of machines doesn't break the code - yay!


//BONUS
app.get("/locations/people", (req, res) => {
    //create a fxn that organized each person according to their location. Then send as a json.
    const locationsData = require("./models/location.model.js");
    const personsData = require("./models/person.model.js");
    
    const listBylocation = locationsData.map((location) => {
        const peopleInLocation = personsData.filter((person) => person.mainLocation === location.zip
    );
    return {
        location: location,
        people: peopleInLocation,
        };
    })
    res.json(listBylocation);
});

//let's add a 404 route
app.get("*", (req, res) => {
    res.status(404).json({error: "Page not found"});
});
//the asterisk is to denote any page that does not have a route (catch-all)

//without the res.status(404) when we open up our Chrome Dev Tools and go to the Network tab we will get a status of the 304 or 200 but we want 4040 so we have to put status(404) which corresponds to "Page not found"

//Export
module.exports = app;