const User = require("../models/User");
const mongoose = require("mongoose");
const connection = require("../config/connection"); //get your mongoose string
const Donation = require("../models/Donation");
//create your array of seeds
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
    username: "testingUserSeed3",

    // string
    email: "testingUserSeed3@gmail.com",

    // boolean
    password: "hopethisworks123",

  },
  {
    // string
    username: "userTest444",

    // string
    email: "testICLE444@gmail.com",

    // boolean
    password: "pleasework444",

  },
  {
    // string
    username: "55test55",

    // string
    email: "55test55@gmail.com",

    // boolean
    password: "5noerrors5",

  },
  {
    // string
    username: "666devils666",

    // string
    email: "satan666@gmail.com",

    // boolean
    password: "666lucifer666",

  },
  {
    // string
    username: "7heaven7",

    // string
    email: "heavenlysevenly7@gmail.com",

    // boolean
    password: "7minutesin7",

  },
  {
    // string
    username: "8yamate8",

    // string
    email: "jeffreydahmer8yourmama@gmail.com",

    // boolean
    password: "humankebabs8",

  },
  {
    // string
    username: "finelinebetween9",

    // string
    email: "lookinfinenumber9@gmail.com",

    // boolean
    password: "sixty9",

  },
  {
    // string
    username: "lookagainnumber10",

    // string
    email: "tricking10sdroppingbens@gmail.com",

    // boolean
    password: "10isthepassword",

  }
]


async function seedUsers(){
  

  return await User.insertMany(users);
  //connect mongoose
  // mongoose
  //   .connect(String(connection.db), { useNewUrlParser: true })
  //   .catch(err => {
  //     console.log(err.stack);
  //     process.exit(1);
  //   })
  //   .then(() => {
  //     console.log("connected to db in development environment");
  //     //save your data. this is an async operation
  //     //after you make sure you seeded the User, disconnect automatically
  //     users.map(async (p, index) => {
  //       await p.save((err, result) => {
  //         if (index === users.length - 1) {
  //           console.log("DONE!");
  //           mongoose.disconnect();
  //         }
  //       });
  //     });
  //   });
};

module.exports = seedUsers;
