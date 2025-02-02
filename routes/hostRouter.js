// Core Module
//const path = require('path');

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
//const rootDir = require("../utils/pathUtil");
//we r using MVC so we move fuction to controller as this will do control the flow 
//hostRouter.get("/add-home", (req, res, next) => {
  //res.render('addHome',{pageTitle: 'Add Home ',currentPage:'add-home'});
  //res.sendFile(path.join(rootDir, 'views', 'addHome.ejs'));
//})

const {getaddHome,postAddHome,getFavourites,gethomelist} = require('../controller/hostController');

hostRouter.get('/add-home',getaddHome);
// here our problem is that at every sever end our array bcomes empty and to show those homes on html page we use ejs this array also needed here as this is not used here
// const registeredHomes= [];

//hostRouter.post("/add-home", (req, res, next) => {
 // console.log(req.body);
 
  // we send here as {houseName: req.body.houseName} bcz we want this to be object bcz later we will add more details so instead of using whole body we did tht
 //registeredHomes.push({houseName: req.body.houseName, Price: req.body.Price, location: req.body.location, Rating:req.body.Rating, Photo:req.body.Photo });
 // console.log(registeredHomes);
 // res.render('homeAdded', {pageTitle: 'Home Added',currentPage:'homeadded'});
  //res.sendFile(path.join(rootDir, 'views', 'homeAdded.ejs'));
  
//})

// same for above we moved to controller

hostRouter.post('/add-home',postAddHome);
hostRouter.get('/favourites',getFavourites);
hostRouter.get('/host-home-list',gethomelist);
//now we need to export resgisteredhomes bcz we have to use them else where 
//exports.hostRouter = hostRouter;

module.exports=hostRouter;

// we did above method instead of module.export bcz that way we can export only one so with multiple we do above now this will send a object so wehereever we are using that we need to destructure that 