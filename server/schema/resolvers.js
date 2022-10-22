const { Error } = require('mongoose');
const Donation = require('../models/Donation');
const User = require('../models/User');
const { signToken } = require('../utils/auth');
const { validateSignUpInput } = require('../utils/validators');
const { UserInputError } = require('apollo-server');

// //to donate must be logged in donating -- currently not using
// function checkIfLoggedIn (context){
//     if(!context.user){
//       throw new Error('Not logged in')
//     }
//   }

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate({
          path: 'donation_ids',
          model: Donation,
        });
      }
      throw new Error('You need to be logged in!');
    },
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
        
        // validate user input from validators file
        const { valid, errors } = validateSignUpInput(username, email, password);
        if (!valid) {
          throw new UserInputError('Errors', { errors })
        }
        const checkUser = await User.findOne({username});
        if (checkUser) {
          throw new UserInputError('Username is taken', {
            errors: {
              username: 'this username is taken'
            }
          });
        }

        if(!user){
          throw new Error('Something went wrong')
        }
        const token = signToken(user);
        console.log({token}, {user});
        return {token, user};
      }, 

      login: async (parent, { email, password }) => {
        const { valid, errors } = validateSignUpInput(email, password);

      const user = await User.findOne({email: email});
        if (!user) {
          errors.general = 'User not found'
          throw new UserInputError('User not found!', { errors });
        }
  
      const correctPw = await user.isCorrectPassword(password); // in user model isCorrectPAssword 
        if (!correctPw) {
          throw new Error('User or Password is incorrect')
        }
        
      const token = signToken(user);
      return ({ token, user }); //if you look in type def we are returning an Auth object, here is that auth object, token and user 
      },

      addDonation: async (parent, {item_name, item_description, item_received, item_imageUrl, item_quantity, item_status}) => {

        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: {
            item_name, item_description, item_received, item_imageUrl, item_quantity, item_status
          }}},
          { new: true, runValidators: true }
        );
        return updatedUser;
        // return await Donation.create({item_name, item_description, item_received, item_imageUrl, item_quantity, item_status});
      },
    },
  };
  
  module.exports = resolvers;
  