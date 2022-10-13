// index.js in seeds folder
const users = seedUsers();

const dons = seedDonations();

for (let index = 0; index < dons.length; index++) {
  const don = dons[index];
  

  // get a random user from 'users'
  const randomUser = ....



  User.findOneByIdAndUpdate(randomUser._id, {
    $addToSet: {
      donations_ids: don._id
    }
  })
}