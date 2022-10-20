import gql from 'graphql-tag'

export const QUERY_DONATIONS = gql `
    query donations{
        donation {
            _id
            username
            email
            image
            title
            description
        }
    }
`;

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      donations
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      donation
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      donations
    }
  }
`;