const Home = require("../Models/home");

const getHomes = (req, res, next) => {
  Home.FetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "AirBnb",
      currentPage: "home",
    })
  );
};

const getBookings =(req,res,next)=>{
  Home.FetchAll((registeredHomes) =>
    res.render("store/booking-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Bookings",
      currentPage: "Bookings",
    })
  );

}

const getHomeDetails=(req,res,next)=>{
   const homeId=req.params.homeId;
   console.log(homeId);
   Home.FindHome(homeId,home=>{
    if(!home){
      console.log("Home not found");
      res.redirect("/");
     }
     else{
      res.render("store/home-detail",{
        home:home,
        pageTitle:"home detail",
        currentPage:"home"
       })
  
     }
   })
   

}


exports.getHomes = getHomes;
exports.getBookings= getBookings;
exports.getHomeDetails=getHomeDetails;
//no need to export this as this is used in controller and here is full controller
//exports.registeredHomes = registeredHomes;
