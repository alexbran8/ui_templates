const { gql } = require("apollo-server");

const projects = require("./projects");


const rootType = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;

module.exports = [rootType, projects];
