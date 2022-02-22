import React from "react"
import { timelineData } from "../Timeline/Timeline"
import "./DevelopmentTasks.scss"
export const DevelopmentTasks = () => {


    return(
        <div><h2>DevelopmentTasks</h2>
          <table id='dev-table'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Task</th>
                  <th>Title</th>
                  <th>Replacement Resource</th>
                  <th>Type</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Status</th>
                  <th>Check</th>
                </tr>
              </thead>
              <tbody>
                {timelineData && timelineData.map(item=>{
                    return <tr>
                        <td>{item.id}</td>
                        <td>{item.text}</td>
                        <td>{item.priority.priority_text}</td>
                    </tr>
                })}
              </tbody>
            </table>
        </div>
    )
}