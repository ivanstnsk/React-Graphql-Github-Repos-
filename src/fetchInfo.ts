import { gql } from "@apollo/client";

export const FETCH_INFO = gql`
  query fetchInfo {
    viewer {
      name
      login
      avatarUrl
      bio
      repositories {
        totalCount
      }
    }
  }
`;