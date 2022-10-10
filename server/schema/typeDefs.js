const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    donation_ids: [Donation]!
  }

  type Donation {
    _id: ID
    item_name: String
    item_description: String
    item_recieved: Boolean
    item_imageUrl: String
    item_quantity: Number
    item_status: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    Donations(username: String): [User]
    Donation(Donation_id: ID!): Donation
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addDonation(DonationText: String!): Donation
    getSingleUser(Donation_id: ID!): Donation
  }
`;

module.exports = typeDefs;
