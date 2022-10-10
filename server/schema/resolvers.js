const { AuthenticationError } = require('apollo-server-express');
const { User, Donation } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('Donations');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('Donations');
    },
    Donations: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Donation.find(params).sort({ createdAt: -1 });
    },
    Donation: async (parent, { DonationId }) => {
      return Donation.findOne({ _id: DonationId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('Donations');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addDonation: async (parent, { DonationText }, context) => {
      if (context.user) {
        const Donation = await Donation.create({
          DonationText,
          DonationAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { Donations: Donation._id } }
        );

        return Donation;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { DonationId, commentText }, context) => {
      if (context.user) {
        return Donation.findOneAndUpdate(
          { _id: DonationId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeDonation: async (parent, { DonationId }, context) => {
      if (context.user) {
        const Donation = await Donation.findOneAndDelete({
          _id: DonationId,
          DonationAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { Donations: Donation._id } }
        );

        return Donation;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { DonationId, commentId }, context) => {
      if (context.user) {
        return Donation.findOneAndUpdate(
          { _id: DonationId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
