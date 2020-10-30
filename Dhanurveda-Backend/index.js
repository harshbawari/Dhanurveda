const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const countriesRouter = require('./routes/countriesRouter');


//Connect to Database
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/dhanurveda';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to the server");
}, err => {
    console.log(err);
});


const hostname = 'localhost';
const port = 3000;


var dhanurveda = express();

//Middlewares
dhanurveda.use(bodyParser.json());
dhanurveda.use(bodyParser.urlencoded({ extended: true }));

//API
dhanurveda.use('/countries', countriesRouter);


//API
dhanurveda.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end("Dhanurveda App API");
});

const server = http.createServer(dhanurveda);

server.listen(port, hostname);