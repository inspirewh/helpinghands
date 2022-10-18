const { Error } = require('mongoose');
const Donation = require('../models/Donation');
const User = require('../models/User');
const { signToken } = require('../utils/auth');

// //to donate must be logged in donating -- currently not using
// function checkIfLoggedIn (context){
//     if(!context.user){
//       throw new Error('Not logged in')
//     }
//   }

const resolvers = {
  Query: {

    singleUser: async(parent, { username }) => {
        const user = await  User.findOne({ username: username }).populate({
          path: 'donation_ids',
          model: Donation,
        });
        // console.log('user',  user);
        // console.log(user.get({plain: true}));
        return {
          ...user.toObject(), //converting mongoose model into js object 
          donations: user.donation_ids
        }
    },

    users: async() => {   
      const users = await User.find({}).populate({
        path: 'donation_ids',
        model: Donation,
      });
 
      return users.map((user) => {
        
        return { 
          ...user.toObject(),
          donations: user.donation_ids
        }
      })
    },

    singleDonation: async (parent, { donation_id }, context) => {

        return await Donation.findOne({ _id: donation_id })
        // console.log('userData', userData)
    },
    
    Donations: async () => {
      return await Donation.find({});
    },
    
  },

    Mutation: {

      createUser: async (parent, {username, email, password }, context ) => {
        const user = await User.create({
          username, email, password
        });

        if (!user){
          throw new Error('Something went wrong')
        }
        const token = signToken(user);
        console.log({token}, {user});
        return {token, user};
      }, 

      login: async (parent, { email, password }) => {
      const user = await User.findOne({email: email});
        if (!user) {
          throw new Error('Something went wrong!');
        }
  
      const correctPw = await user.isCorrectPassword(password); // in user model isCorrectPAssword 
        if (!correctPw) {
          throw new Error('User or Password is incorrect')
        }

      const token = signToken(user);
      return ({ token, user }); //if you look in type def we are returning an Auth object, here is that auth object, token and user 
      },

      addDonation: async (parent, {item_name, item_description, item_recieved, item_imageUrl, item_quantity, item_status}) => {
        return await Donation.create({item_name, item_description, item_recieved, item_imageUrl, item_quantity, item_status});
      },
    },
  };
  
  module.exports = resolvers;
  