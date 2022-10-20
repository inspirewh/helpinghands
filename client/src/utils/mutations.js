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
  mutation addDonation($itemName: String!, $itemDescription: String!, $itemRecieved: Boolean!, $itemImageUrl: String!, $itemQuantity: Int!, $itemStatus: String!){
    addDonation(item_name: $itemName, item_description: $itemDescription, item_recieved: $itemRecieved, item_imageUrl: $itemImageUrl, item_quantity: $itemQuantity, item_status: $itemStatus) {
      item_description
      item_imageUrl
      item_quantity
      item_name
      item_recieved
      item_status
  }
}
`;