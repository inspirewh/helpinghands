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