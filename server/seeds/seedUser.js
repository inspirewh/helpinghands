const User = require("../models/User");
const mongoose = require("mongoose");
const connection = require("../config/connection"); //get your mongoose string
//create your array. i inserted only 1 object here
const user = [
  new User({
    // string
    username: "testUser1",

    // string
    email: "testUser1@gmail.com",

    // boolean
    password: "abcd1234",

    donation_ids: `// TODO: not sure how te ref :(`,
  },
  {
    // string
    username: "userTest2",

    // string
    email: "userTest2@gmail.com",

    // boolean
    password: "1234abcd",

    donation_ids: `// TODO: not sure how te ref :(`,
  },
  {
    // string
    username: "testingUserSeed1",

    // string
    email: "testingUserSeed1@gmail.com",

    // boolean
    password: "hopethisworks123",

    donation_ids: `// TODO: not sure how te ref :(`,
  }
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
//after you make sure you seeded the User, disconnect automatically
user.map(async (p, index) => {
  await p.save((err, result) => {
    if (index === user.length - 1) {
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});