import { graphql } from "@apollo/client";

export const QUERY_ME = gql`
  query Product {
    tech {
      _id
      name
    }
  }
`;
