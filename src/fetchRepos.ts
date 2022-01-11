import { gql } from "@apollo/client";

export const FETCH_REPOS = gql`
  query fetchRepos {
    search(query: "user:ivanstnsk sort:updated-desc", type: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          name
          description
          id
          url
        }
      }
    }
  }
`;