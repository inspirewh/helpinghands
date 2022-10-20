import gql from "graphql-tag";

// Mutation logic for logging in the user
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user{
                _id
                username
            }
        }
    }
`;

// Mutation definition for adding a user
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

// Mutation definition for adding a donation post
export const ADD_DONATION = gql`
  mutation postDonation ($input: postedDonation!) {
    postDonation(input: $input) {
      username
      _id
      email
      postedDonation {
        image
        title
        description
      }
    }
  }
`;