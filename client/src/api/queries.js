import { gql } from 'apollo-boost';

// POST Queries

export const GET_POSTS =  gql`
  query {
    getPosts {
      _id
      title
      imageUrl
    }
  }
`;

// User Queries
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      _id
      username
      email
      avatar
      joinDate
      favorites {
        _id
        title
        imageUrl

      }
    }
  }

`

// Posts Mutations


// User Mutations
export const LOGIN_USER = gql`
  mutation loginUser($username:String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
    }
  }
`;

export const REGISTER_USER = gql`
  mutation registerUser($username: String!, $email:String!, $password:String!) {
    registerUser(username: $username, email: $email, password:$password) {
      token
    }
  }
`;