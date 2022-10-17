const User = require("../models/User");
const mongoose = require("mongoose");
const connection = require("../config/connection"); //get your mongoose string
const Donation = require("../models/Donation");
//create your array. i inserted only 1 object here
const users = [
  {
    // string
    username: "testUser1",

    // string
    email: "testUser1@gmail.com",

    // boolean
    password: "abcd1234",

  },
  {
    // string
    username: "userTest2",

    // string
    email: "userTest2@gmail.com",

    // boolean
    password: "1234abcd",

  },
  {
    // string
    username: "testingUserSeed1",

    // string
    email: "testingUserSeed1@gmail.com",

    // boolean
    password: "hopethisworks123",

  }
]


async function seedUsers(){
  

  return await User.insertMany(users);
  mongoose
    .connect(String(connection.db), { useNewUrlParser: true })
    .catch(err => {
      console.log(err.stack);
      process.exit(1);
    })
    .then(() => {
      console.log("connected to db in development environment");
      //save your data. this is an async operation
      //after you make sure you seeded the User, disconnect automatically
      users.map(async (p, index) => {
        await p.save((err, result) => {
          if (index === users.length - 1) {
            console.log("DONE!");
            mongoose.disconnect();
          }
        });
      });
    });
  // const userSeeds = users;
  
  //connect mongoose
}

module.exports = seedUsers;
