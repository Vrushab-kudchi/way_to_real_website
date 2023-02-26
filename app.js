// Imports
require('dotenv').config()
const express = require('express');
const http = require('http');
// importing router which was created in route folder
const route = require('./routes/route');

const hostname = '45.93.139.125';
// express setup
const app = express();


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hiiiii\n');
});

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
const port = 80;

app.listen(port, function (req, res) {
    console.log("http://localhost:" + port);
})
