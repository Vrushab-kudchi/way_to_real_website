// Imports
require('dotenv').config()
const express = require('express');
const http = require('http');
// importing router which was created in route folder
const route = require('./routes/route');

// express setup
const app = express();


//static folder for css and images
app.use(express.static("public"));

//ejs setup
app.set("view engine", "ejs");

//setting up route
app.use('/', route);


app.get('/', (req, res) => {
    res.render('index')
})

//setting Up Server
const port = 3000;

app.listen(port, function (req, res) {
    console.log("http://localhost:" + port);
})
