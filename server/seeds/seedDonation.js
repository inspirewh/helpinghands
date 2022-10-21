const Donation = require("../models/Donation");
const mongoose = require("mongoose");
const connection = require("../config/connection"); //get your mongoose string
const User = require("../models/User");


//create your array of donation seeds
const donations = [   
  {
    // string
    item_name: "Canned food and other goodies",

    // string
    item_description: "A random assortment from savoury foods or sweet treats!",

    // boolean
    item_received: true,

    // string
    item_imageUrl: "http://1.bp.blogspot.com/-VKjVEmTlHNM/UMmQErfB5BI/AAAAAAAAE6E/rIK22iPeGk8/s1600/Canned+Food+Haul.JPG",

    // number
    item_quantity: 24,
    
    // boolean
    item_status_sent: true,
  },
  {
    // string
    item_name: "Clothes for women",

    // string
    item_description: "Pre loved clothes. Sending with love x",

    // boolean
    item_received: false,

    // string
    item_imageUrl: "https://i.pinimg.com/originals/37/9d/cb/379dcb9c3690e6dbf2ee5942ef30bcf4.jpg",

    // number
    item_quantity: 35,
    
    // boolean
    item_status_sent: true,
  },
  {
    // string
    item_name: "Children toys",

    // string
    item_description: "Baby toddler toys. My babys all grown up now so these toys need a new home",

    // boolean
    item_received: true,

    // string
    item_imageUrl: "https://webimg.secondhandapp.at/1.1/5b8e6c6dfbd6bc3b46f6591b",

    // number
    item_quantity: 7,
    
    // boolean
    item_status_sent: true,
  },
  {
    // string
    item_name: "Sleeping bag",

    // string
    item_description: "For the people who really need it please, thank you.",

    // boolean
    item_received: true,

    // string
    item_imageUrl: "https://pyxis.nymag.com/v1/imgs/9bc/d2d/99da04bdc149cae71447fb73f2fd4b8e51.rsquare.w600.jpg",

    // number
    item_quantity: 4,
    
    // boolean
    item_status_sent: true,
  },
  {
    // string
    item_name: "Baby clothes",

    // string
    item_description: "Micky mouse baby clothes, only worn once",

    // boolean
    item_received: false,

    // string
    item_imageUrl: "https://lp2.hm.com/hmgoepprod?set=source[/28/78/287880621663ed20fcf93c929c4fccf2aa74c937.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",

    // number
    item_quantity: 2,
    
    // boolean
    item_status_sent: true,
  },
  {
    // string
    item_name: "Cozy sweater",

    // string
    item_description: "Something to keep you warm in the winter. Stay cozy!",

    // boolean
    item_received: true,

    // string
    item_imageUrl: "https://gumtreeau-res.cloudinary.com/image/private/t_$_20/gumtree/13a5e955-63da-40f0-aed3-51663af2d848.jpg",

    // number
    item_quantity: 7,
    
    // boolean
    item_status_sent: true,
  },
  {
    // string
    item_name: "Canned vegetables",

    // string
    item_description: "Supplys for the people to make nice hot meals for the people in need",

    // boolean
    item_received: true,

    // string
    item_imageUrl: "https://www.thesun.co.uk/wp-content/uploads/2021/11/image-68.png",

    // number
    item_quantity: 14,
    
    // boolean
    item_status_sent: true,
  },
  {
    // string
    item_name: "Footy",

    // string
    item_description: "fun for the kids to kick around and learn the great sport",

    // boolean
    item_received: false,

    // string
    item_imageUrl: "https://gumtreeau-res.cloudinary.com/image/private/t_$_s-l400/gumtree/0f46d723-bd21-4dc8-8192-7c1381a0d7c7.jpg",

    // number
    item_quantity: 1,
    
    // boolean
    item_status_sent: true,
  },
  {
    // string
    item_name: "Baby clothes",

    // string
    item_description: "All pink baby clothes, barely worn so I want these put to good use :)",

    // boolean
    item_received: true,

    // string
    item_imageUrl: "https://gumtreeau-res.cloudinary.com/image/private/t_$_58/gumtree/f8ff92a2-0c34-4b3e-81c5-62eacb1c50df.jpg",

    // number
    item_quantity: 5,
    
    // boolean
    item_status_sent: true,
  },
  {
    // string
    item_name: "Blanket",

    // string
    item_description: "Large furry blankets to keep warm, super comfortable!",

    // boolean
    item_received: true,

    // string
    item_imageUrl: "https://gumtreeau-res.cloudinary.com/image/private/t_$_20/gumtree/2742b3fc-88c6-45c5-a715-acb8b17ca8fe.jpg",

    // number
    item_quantity: 2,
    
    // boolean
    item_status_sent: true,
  }
  
]

async function seedDonation(){
  

  return await Donation.insertMany(donations);

  //connect mongoose
  // mongoose
  //   .connect(String(connection.db), { useNewUrlParser: true })
  //   .catch(err => {
  //     console.log(err.stack);
  //     process.exit(1);
  //   })
  //   .then(() => {
  //     console.log("connected to db in development environment");
  //   });
  // //save your data. this is an async operation
  // //after you make sure you seeded all the products, disconnect automatically
  // donations.map(async (don, index) => {
  //   const model = new Donation(don);
  //   await model.save((err, result) => {
  
      
  //     if (index === donations.length - 1) {
  //       console.log("DONE!");
  //       mongoose.disconnect();
  //     }
  //   });
  // });
};

module.exports = seedDonation;