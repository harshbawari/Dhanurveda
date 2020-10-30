const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = 3000;


const dhanurveda = express();

dhanurveda.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('hello');

});

const server = http.createServer(dhanurveda);

server.listen(port, hostname, () => {
    console.log("Server Running!");
});