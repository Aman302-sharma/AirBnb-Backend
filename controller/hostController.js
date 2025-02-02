const Home = require("../Models/home");

//we can do direcly export of we can give this as a constant and then export
const getaddHome = (req, res, next) => {
  res.render("host/addHome", { pageTitle: "Add Home ", currentPage: "add-home" });
};

const postAddHome = (req, res, next) => {
  //console.log(req.body);

  // we send here as {houseName: req.body.houseName} bcz we want this to be object bcz later we will add more details so instead of using whole body we did tht
  //registeredHomes.push({houseName: req.body.houseName, Price: req.body.Price, location: req.body.location, Rating:req.body.Rating, Photo:req.body.Photo });
  // now we use the model to store data

  //instead of using so many times we destructure that
  const { houseName, price, location, rating, picture } = req.body;
  // const Home= new Home(req.body.hosueName,req.body.price,req.body.Rating,req.body.location,req.body.picture);
  const HomeDetail = new Home(houseName, price, location, rating, picture);
  HomeDetail.save();
  //console.log(registeredHomes);
  res.render("host/homeAdded", {
    pageTitle: "Home Added",
    currentPage: "homeadded",
  });
  //res.sendFile(path.join(rootDir, 'views', 'homeAdded.ejs'));
};

const getFavourites =(req,res,next)=>{
  Home.FetchAll((registeredHomes)=>{
    res.render("host/favourites",{
      registeredHomes: registeredHomes,
      pageTitle: "favourites",
      currentPage: "favourites",

    })
  })
};

const gethomelist=(req,res,next)=>{
  Home.FetchAll((registeredHomes)=>{
    res.render("host/host-home-list",{
      registeredHomes: registeredHomes,
      pageTitle: "host-home-list",
      currentPage: "host-home-list",

    })
  })
};



exports.postAddHome = postAddHome;
exports.getaddHome = getaddHome;
exports.getFavourites=getFavourites
exports.gethomelist=gethomelist;
//no need to export this as this is used in controller and here is full controller
//exports.registeredHomes = registeredHomes;
