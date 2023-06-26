//dependencies
const app = require('./app.js');

//configuration
require("dotenv").config();
const PORT = proccess.env.PORT;

//listen
app.listen(PORT, () => {
    console.log(`Listening on port`)
})