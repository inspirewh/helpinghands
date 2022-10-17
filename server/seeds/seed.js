const db = require('../config/connection');
const {User, Donation} = require("../models");
const seedDonation = require('./seedDonation');
const seedUsers = require('./seedUser');


db.on('error', (err) => err);


db.once('open', async () => {
  console.log("connected to db")

  // clear db user + donations data
  await User.deleteMany({});
  await Donation.deleteMany({});

  const users = await seedUsers();

  const donations = await seedDonation()
  

  for (let index = 0; index < donations.length; index++) {
    const don = donations[index];

    const randomUser = users[Math.floor(Math.random() * users.length)];

    console.log({randomUser});
    await User.findOneAndUpdate({
      _id: randomUser._id,
    },{
      $addToSet: {
        donation_ids: don._id
      }
    })
  }
  console.log('done seeding');
  process.exit(0);
});
  

//   // get a random user from 'users'
//   const randomUser = "";


//   //add donation id to user
//   User.findOneByIdAndUpdate(randomUser._id, {
//     $addToSet: {
//       donations_ids: don._id
//     }
//   })
// }