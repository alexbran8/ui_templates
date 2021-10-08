const { gql } = require("apollo-server");

module.exports = gql`
type project {
    title: String!
    coordinator: String
    details: String
    requirements: String
    description: String
    year: Int
    id: Int!
  }
  type Response {
    success: String!
    message: String!
  }

  input Norms {
    id: Int
    to_email: String
    date: String
    resource: String
    wbsCustomer: String
    task: String
    taskComments: String
    twc: String
    bh: String
	  rh: String
	  normOK: String
	  normNok:  String
	  status: String
    var: String
   }

extend  type Query  {
    getAll: [project]
} 

extend type Mutation {
  sendNotifications (data: [Norms]):Response!
}
`;