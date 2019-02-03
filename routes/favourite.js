let express = require('express');
let route = express.Router();
let mongoose = require('mongoose');

let favourite = require('../models/favourite');
route.get('/', (req, res, next) => {
    favourite.find((err, favouriteThingsList) => {
        if (err) { return console.error(err); }
        else {
            console.log(favouriteThingsList);
            res.render('favourite/index', {
                title: "My Favourite Things",
                favouriteThings: favouriteThingsList
            })
        }
    });
});


module.exports = route;