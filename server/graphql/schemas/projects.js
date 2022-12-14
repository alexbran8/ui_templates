const { gql } = require("apollo-server");

module.exports = gql`
type project {
    title: String!
    type: String!
    coordinator: String
    details: String
    requirements: String
    description: String
    year: Int
    id: Int!
    team_size:String
    tasks: String
    constraints: String
    training: String
    createdBy: String!
    subject: String
    creationDate: String
  }
  type Response {
    success: String!
    message: String!
    id: Int
    data: project
  }

  input Project {
    id: Int
    title: String!
    type: String!
    description: String!
    requirements: String!
    coordinator: String!
    year: String
    team_size:String
    tasks: String
    constraints: String
    training: String
    subject: String
   }

extend  type Query  {
    getAll(id:Int, subject: String, coordinator: String, title:String): [project]
    getCollumns: [String]
} 

extend type Mutation {
  addItem (data: Project):Response!
  editItem (data: Project):Response!
  deleteItem (id: Int):Response!
}
`;