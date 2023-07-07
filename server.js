//Dependencies
const app = require("./app.js");

//configuration
require("dotenv").config();
const PORT = process.env.PORT;
//using "dotenv" simplifies the management of sensitive/ configuration-related information in our application.

//Listen
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});