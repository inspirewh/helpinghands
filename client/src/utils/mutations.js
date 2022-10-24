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
  mutation createUser($username: String!, $email: String!, $password: String!){
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
  mutation addDonation($item_name: String!, $item_description: String!, $item_received: Boolean, $item_imageUrl: String!, $item_quantity: Int!, $item_status: String){
    addDonation(item_name: $item_name, item_description: $item_description, item_received: $item_received, item_imageUrl: $item_imageUrl, item_quantity: $item_quantity, item_status: $item_status) {
      item_imageUrl
      item_name
      item_description
      item_quantity
      item_received
      item_status
  }
}
`;