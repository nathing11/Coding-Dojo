const express = require("express");
require('dotenv').config();
const port = process.env.port;
require('./config/configs')
const app = express();

//Middleware
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.listen(port,()=>{
    console.log(' server is up and running on port ${port} 🎈🎈');
});