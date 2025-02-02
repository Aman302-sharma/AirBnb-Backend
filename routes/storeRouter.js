// Core Modules
const path = require('path');

// External Module
const express = require('express');
const storeRouter = express.Router();
const {getHomes,getBookings,getHomeDetails}=require('../controller/storeController');

// Local Module
const rootDir = require("../utils/pathUtil");

//userRouter.get("/", (req, res, next) => {
//  console.log(registeredHomes);
// when we use ejs format we do res.render not sendfile
//  res.render('home',{registeredHomes, pageTitle: 'AirBnb',currentPage:'home' });
//res.sendFile(path.join(rootDir, 'views', 'home.html'));
//});

storeRouter.get('/',getHomes);
storeRouter.get('/bookings',getBookings);
storeRouter.get('/homes/:homeId',getHomeDetails)

module.exports = storeRouter;