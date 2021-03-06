const express = require('express');
const Location = require('../models/location');
const ApiError = require('../models/api-error');
const Users = require('../predefined-users');
const PRODUCTS = require('../predefined-data');

let serviceRouter = express.Router();

serviceRouter.post('/location', function (req, res) {
    if (req.body.customerID !== undefined && req.body.customerID !== "") {
        
        switch (req.body.customerID) {
            case Users.CUSTOMER_ID_LONDON:
                res.status(200).json(new Location('LONDON'));
                break;
            case Users.CUSTOMER_ID_LIVERPOOL:
                res.status(200).json(new Location('LIVERPOOL'));
                break;
            default: 
                res.status(404).json(new ApiError('CustomerID not found!'));
                break;
        }

        res.send();
    }
    else {
       res.status(400).send(new ApiError('CustomerID is invalid!'));
    }
});

serviceRouter.post('/catalogue', function (req, res) {
     if (req.body.locationID !== undefined && req.body.locationID !== "") {
        let products = [];

        for (let i = 0; i <= PRODUCTS.length - 1; i++) {
            if (PRODUCTS[i].locationID === req.body.locationID) {
                products.push(PRODUCTS[i]);
            }
            else if (PRODUCTS[i].locationID === "") {
                products.push(PRODUCTS[i]);
            }
        }
        
        res.status(200).json(products).send();
     }
     else {
       res.status(400).send(new ApiError('LocationID is invalid!'));
    }
});

serviceRouter.post('/confirm', function (req, res) {
    res.status(200).send("CONFIRM SUCCESS");
});

module.exports = serviceRouter;