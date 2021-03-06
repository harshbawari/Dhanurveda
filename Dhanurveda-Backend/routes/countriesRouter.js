const express = require('express');
const bodyParser = require('body-parser');
const Countries = require('../models/countries');


//Connect to Database
const mongoose = require('mongoose');
const { json } = require('body-parser');
const url = 'mongodb://localhost:27017/dhanurveda';
const connect = mongoose.connect(url);

const countriesRouter = express.Router();

countriesRouter.use(bodyParser.json());

countriesRouter.route('/')
    .get((req, res, next) => {
        Countries.find({})
            .then((countries) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(countries);
            }, (err) => next(err))
            .catch((err) => console.log(err));
    });

countriesRouter.route('/:countryId')
    .get((req, res, next) => {
        Countries.findOne({ countryId: req.params.countryId })
            .then((country) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(country);
            }, (err) => next(err))
            .catch((err) => console.log(err));
    });

module.exports = countriesRouter;