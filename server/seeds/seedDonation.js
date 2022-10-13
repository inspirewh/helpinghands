const Donation = require("../models/Donation");
const mongoose = require("mongoose");
const connection = require("../config/connection"); //get your mongoose string
const User = require("../models/User");
//create your array. i inserted only 1 object here
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
]
//connect mongoose
mongoose
  .connect(String(connection.db), { useNewUrlParser: true })
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to db in development environment");
  });
//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically
donations.map(async (don, index) => {
  const model = new Donation(don);
  await model.save((err, result) => {

    // grab a random user
    User.findOneAndUpdate()
    // add model._id

    // $addToSet

    if (index === donations.length - 1) {
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});

module.exports = function seedDonations(){
  // +.......

  return seededDonations
}



// // index.js in seeds folder
// const users = seedUsers();

// const dons = seedDonations();

// for (let index = 0; index < dons.length; index++) {
//   const don = dons[index];
  

//   // get a random user from 'users'
//   const randomUser = ....



//   User.findOneByIdAndUpdate(randomUser._id, {
//     $addToSet: {
//       donations_ids: don._id
//     }
//   })
// }