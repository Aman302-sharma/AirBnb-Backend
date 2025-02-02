const fs =require('fs');
const path=require('path');
const rootDir =require('../utils/pathUtil');

const registeredHomes=[];


module.exports =class Home{
    constructor(houseName,price,location,rating,picture){
        this.houseName=houseName;
        this.price=price;
        this.location=location;
        this.rating=rating;
        this.picture=picture;
    }
    // this is saving data so needs to be done in model so doing here.
    save(){
        this.id=Math.random().toString();
        Home.FetchAll((registeredHomes)=>{
        registeredHomes.push(this);
        console.log(registeredHomes);
        const filePath=path.join(rootDir,'data','homes.json');
        fs.writeFile(filePath,JSON.stringify(registeredHomes),(err)=>{
            console.log(err);

        })
        
        })
    }

    // static so that the fucniton will be associated to class instead of object
    static FetchAll(callback){
        const filePath=path.join(rootDir,'data','homes.json');
        fs.readFile(filePath,(err,data)=>{
            if(!err){
               callback(JSON.parse(data));
            }
            else{
                callback([]);

            }              
        });
        
    }
    static FindHome(homeId, callback){
        this.FetchAll(homes=>{
           const homeFound=homes.find(home=>home.id===homeId);
           callback(homeFound);
        })
    }
}