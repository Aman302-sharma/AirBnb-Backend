// Core Module
const path = require('path');

// External Module
const express = require('express');

//Local Module
const storeRouter = require("./routes/storeRouter")
//destructuring host router as we exported 2 things from there they imported as objects 
const hostRouter = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtil");
const {pageNotFound} =require('./controller/error');

const app = express();
// set the view engine as ejs 
app.set('view engine','ejs');
//this will tell where we r using ejs means out html code
app.set('views','views');

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, 'public')));

//app.use((req, res, next) => {

  //res.status(404).sendFile(path.join(rootDir, 'views', '404.ejs'));
//  res.status(404).render('404.ejs', {pageTitle: 'Page Not Found',currentPage:'404'});
//})
// for error page we created controller and we use this here

app.use(pageNotFound);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});