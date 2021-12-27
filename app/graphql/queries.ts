import { gql } from "@apollo/client";

export const LOGIN = gql`
  query login($username: String, $password: String) {
    login(username: $username, password: $password) {
      id
      username
    }
  }
`;

export const POSTS = gql`
  query posts {
    posts {
      author {
        name
        id
      }
      content
      title
      next
      prev
      date
      id
    }
  }
`;
