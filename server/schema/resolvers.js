const { Error } = require('mongoose');
const Donation = require('../models/Donation');
const User = require('../models/User');
const { signToken } = require('../utils/auth');

//to donate must be logged in donating -- currently not using
function checkIfLoggedIn (context){
    if(!context.user){
      throw new Error('Not logged in')
    }
  }

const resolvers = {
  Query: {
    //get a single user 
    //need to test
    singleUser: async(parent, { username }) => {
        if(!username){
            return Error('username does not exist');
        }else {
            return User.findOne({ username: username }); 
        }
    },

    // get all users 
    //need to test
    users: async() => {   
      const user = User.find({}).populate('Donations') 
      return user;
    },

    //get personal user donations
    //need to test
    singleDonation: async (parent, { username }, context) => {
      if(!username){
        return Error('No user with this id');
      }else {
        const userData = await User.findOne('Donation').select('-_v -password');
        return userData;
      }
    },
    
    //get donations for donation feed 
    //need to test
    Donations: async () => {
      const userDonations = await User.find('Donation');
      return userDonations
    },
    
  },

    Mutation: {

      //createUser TESTED and working
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
      //login TESTED and working
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
      // Need to test
      addDonation: async (parent, {item_name, item_description, item_recieved, item_imageUrl, item_quantity, item_status}) => {
        return await Donation.create({item_name, item_description, item_recieved, item_imageUrl, item_quantity, item_status});
      },
    },
  };
  
  module.exports = resolvers;
  