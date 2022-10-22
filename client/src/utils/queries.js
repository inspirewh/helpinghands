import { gql } from '@apollo/client'


export const ALL_USERS = gql`
    query allUsers{
        users {
            email
            username
            donations {
              _id
              item_description
              item_imageUrl
              item_name
              item_quantity
              item_received
              item_status
        }
    }
  }
`;
export const SINGLE_USER = gql`
    query getSingleUser($username: String!){
        singleUser(username: $username) {
            email
            username
        donations {
            item_description
            item_imageUrl
            item_name
            item_quantity
            item_received
            item_status
      }
    }
  }
`;
export const ALL_DONATIONS= gql`
    query allDonations{
        Donations {
            _id
            item_description
            item_imageUrl
            item_name
            item_quantity
            item_received
            item_status
    }
  }
`;
export const SINGLE_DONATION = gql`
    query singledonation($singleDonationId: ID!){
        singleDonation(donation_id: $singleDonationId) {
            _id
            item_description
            item_imageUrl
            item_name
            item_quantity
            item_received
            item_status
    }
}
`;
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      donations {
        item_description
        item_imageUrl
        item_name
        item_quantity
        item_received
        item_status
        }
    }
  }
`;