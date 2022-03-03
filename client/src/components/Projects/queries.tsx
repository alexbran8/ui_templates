
import { gql } from "@apollo/client";

export const GET_ALL = gql`
  query ($id:Int) { 
    getAll (id:$id)  {
        id
        title
        type
        coordinator
        description
        requirements
        constraints
        tasks
        team_size
        training
    }
  }
`;