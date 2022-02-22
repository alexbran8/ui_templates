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
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Issues</th>
                  <th>Progress</th>
                  <th>Planned implementation</th>
                  <th>Details</th>
                  <th>Responsible</th>
                </tr>
              </thead>
              <tbody>
                {timelineData && timelineData.map(item=>{
                    return <tr>
                        <td>{item.id}</td>
                        <td>{item.text}</td>
                        <td>{item.priority.priority_text}</td>
                        <td>{item.status}</td>
                        <td>{item.issues}</td>
                        <td>{item.progress}</td>
                        <td>{item.date}</td>
                        <td>{item.details}</td>
                        <td>{item.responsible}</td>
                    </tr>
                })}
              </tbody>
            </table>
        </div>
    )
}