const Donation = require("../models/Donation");
const mongoose = require("mongoose");
const connection = require("../config/connection"); //get your mongoose string
//create your array. i inserted only 1 object here
const donation = [   
  new Donation({
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
  ),]
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
donation.map(async (p, index) => {
  await p.save((err, result) => {
    if (index === donation.length - 1) {
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});