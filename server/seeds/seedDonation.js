const Donation = require("../models/Donation");
const mongoose = require("mongoose");
const connection = require("../config/connection"); //get your mongoose string
const User = require("../models/User");


//create your array of donation seeds
const donations = [   
  {
    // string
    item_name: "testitem1",

    // string
    item_description: "the bees knees",

    // boolean
    item_recieved: true,

    // string
    item_imageUrl: "https://www.aaphysiotherapy.com/media/9436/78103111_2729180907103027_1843802500663083008_n.jpg",

    // number
    item_quantity: 21,
    
    // boolean
    item_status_sent: true,
  },
  {
    // string
    item_name: "itemTest2",

    // string
    item_description: "terrifying aggressive dog!",

    // boolean
    item_recieved: false,

    // string
    item_imageUrl: "https://i.pinimg.com/236x/e2/42/1e/e2421ea92c654c3e88aa220b69cbd9e3--so-cute-puppy-love.jpg",

    // number
    item_quantity: 333,
    
    // boolean
    item_status_sent: true,
  },
  {
    // string
    item_name: "testingSeedItem3",

    // string
    item_description: "cute children party costume, for kids!",

    // boolean
    item_recieved: true,

    // string
    item_imageUrl: "https://costumesheaven.com/wp-content/uploads/2022/05/hero-image.jpg",

    // number
    item_quantity: 80085,
    
    // boolean
    item_status_sent: true,
  },
  {
    // string
    item_name: "SeedTestingNo4",

    // string
    item_description: "funny dog",

    // boolean
    item_recieved: true,

    // string
    item_imageUrl: "https://api.time.com/wp-content/uploads/2014/06/450965060.jpg",

    // number
    item_quantity: 1,
    
    // boolean
    item_status_sent: true,
  },
  {
    // string
    item_name: "seededItemNumber5",

    // string
    item_description: "delicious fish",

    // boolean
    item_recieved: false,

    // string
    item_imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/2006_sardines_can_open.jpg/220px-2006_sardines_can_open.jpg",

    // number
    item_quantity: 2,
    
    // boolean
    item_status_sent: true,
  },
  {
    // string
    item_name: "seededDonation6",

    // string
    item_description: "patriotic sweater",

    // boolean
    item_recieved: true,

    // string
    item_imageUrl: "https://media.cnn.com/api/v1/images/stellar/prod/191211145618-02-ugly-christmas-sweater-1211-trump.jpg?q=x_2,y_166,h_1123,w_1995,c_crop/h_270,w_480",

    // number
    item_quantity: 7,
    
    // boolean
    item_status_sent: true,
  },
  {
    // string
    item_name: "seedNumber7",

    // string
    item_description: "warm socks",

    // boolean
    item_recieved: true,

    // string
    item_imageUrl: "https://i.etsystatic.com/6572991/r/il/b91cff/3593874136/il_570xN.3593874136_qf0e.jpg",

    // number
    item_quantity: 2000,
    
    // boolean
    item_status_sent: true,
  },
  {
    // string
    item_name: "seedSocks8",

    // string
    item_description: "fun toy for kids",

    // boolean
    item_recieved: false,

    // string
    item_imageUrl: "https://i.ebayimg.com/images/g/1q4AAOSwC0dbtnBx/s-l500.jpg",

    // number
    item_quantity: 1,
    
    // boolean
    item_status_sent: true,
  },
  {
    // string
    item_name: "seedySeed9",

    // string
    item_description: "1 cheese block, still in date, tastes good",

    // boolean
    item_recieved: true,

    // string
    item_imageUrl: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/uqbmfey72kvyyux2b50d.jpg",

    // number
    item_quantity: 1,
    
    // boolean
    item_status_sent: true,
  },
  {
    // string
    item_name: "seedME10",

    // string
    item_description: "1x unconcious human",

    // boolean
    item_recieved: false,

    // string
    item_imageUrl: "https://www.firstaidpro.com.au/wp-content/uploads/2020/11/X0000_Physio_LifePak-CR-Plus-at-EMS-handoff-copy.jpg",

    // number
    item_quantity: 1,
    
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