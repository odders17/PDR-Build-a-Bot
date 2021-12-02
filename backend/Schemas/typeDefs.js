const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    _id: ID!
    name: String!
  }

  type Query {

  }

  type Mutation {

    
  }
  `;
module.exports = typeDefs;
