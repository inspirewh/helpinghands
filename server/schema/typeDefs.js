const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    donations: [Donation]
  }
  type Auth {
    token: String
    user: User
   }

  type Donation {
    _id: ID
    item_name: String
    item_description: String
    item_recieved: Boolean
    item_imageUrl: String
    item_quantity: Int
    item_status: String
  }

  type Query {
    users: [User]
    singleUser(username: String!): User
    Donations: [Donation]
    singleDonation(donation_id: ID!): Donation
    me: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addDonation(item_name: String!, item_description: String!, item_recieved: Boolean!, item_imageUrl: String!, item_quantity: Int!, item_status: String!): Donation
  }
`;

module.exports = typeDefs;
