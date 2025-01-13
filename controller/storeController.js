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


exports.getHomes = getHomes;
exports.getBookings= getBookings;
//no need to export this as this is used in controller and here is full controller
//exports.registeredHomes = registeredHomes;
