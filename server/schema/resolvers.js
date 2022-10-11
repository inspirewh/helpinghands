const { Error } = require('mongoose');
const User = require('../models/User');

function checkIfLoggedIn (context){
    if(!context.user){
      throw new Error('Not logged in')
    }
  }

const resolvers = {
    Query: {
    //get a single user 
    user: async(parent, { username }) => {
        if(!username){
            return Error('No user with this id');
        }else {
            return User.findOne({ username: username }).populate('Donation'); //or is it donation_ids 
        }
    },

    // get all users 
    // users: [User]
    users: async() => {   
        return User.find({}).populate('Donation') //is find {} an issue? 
    }
    // TODO: add donations / donation 
        // Donations(username: String): [User]
        // Donation(Donation_id: ID!): Donation
    },

  //TODO: refactor code below
    Mutation: {
      createUser: async (parent, {username, email, password }, context ) => {
        const user = await User.create({
          username, email, password
        });
  
        if (!user){
          throw new Error('Something went wrong')
        }
        const token = signToken(user);
        return (token, user)
      },
      login: async (parent, { email, password }) => {
      const user = await User.findOne({email: email});
        if (!user) {
          throw new Error('User or Password is incorrect');
        }
  
      const correctPw = await user.isCorrectPassword(password); // in user model isCorrectPAssword 
        if (!correctPw) {
          throw new Error('User or Password is incorrect')
        }
  
      const token = signToken(user);
      return ({ token, user }); //if you look in type def we are returning an Auth object, here is that auth object, token and user 
      },
  
      addDonation: async () => {
        
      },

      getSingleUser: async() => {

      }
    },
  };
  
  module.exports = resolvers;
  