
import { gql } from "@apollo/client";

export const GET_ALL = gql`
  query ($id:Int, $subject:String, $coordinator:String, $title:String) { 
    getAll (id:$id, subject:$subject, coordinator:$coordinator, title:$title)  {
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
        creationDate
        subject
    }
  }
`;