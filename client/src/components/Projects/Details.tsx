import React, { useEffect, useState } from "react"
import { useMutation, useQuery, gql } from "@apollo/client";

import "./Details.scss"
import { GET_ALL } from "./queries"

export const Details = (props) => {

    const [currentId, setCurrentId] = useState<Number>()
    const [currentPorject, setCurrentProject] = useState()
    const { data, loading, error } = useQuery(GET_ALL,  {variables:{id:currentId},
        onCompleted: () => {
        //   setProjects(data.getAll);
          console.log(data.getAll)
          data.getAll && setCurrentProject(data.getAll[0])
        },
        onError: (error) => { console.error("Error", error, error.message); alert("Error" + error.message) },
      });
    

    useEffect(() => {
        // update page data based on title params
        setCurrentId(parseInt(props.match.params.id))

    }, [])

    return (
        <div className="details-container">
            <div className="title-section">
                { currentPorject && currentPorject.url ?
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
                    className="header-picture" />
                    : null }

                <h1>{currentPorject && currentPorject.title}</h1>
            </div>
            <div className="header-section">
                <div className="coordinator">coordinator: <b>createdBy: { currentPorject && currentPorject.coordinator },</b></div>
                <div className="published">published: <b>{currentPorject && currentPorject.creationDate}</b></div>
                <div className="subject"> subject: <b>{currentPorject && currentPorject.subject}</b></div>
                <div className="team-size"> team-size: <b>{currentPorject && currentPorject.team_size} students</b></div>
                {currentPorject && currentPorject.tags  ?<div className="tags">tags: <b>{currentPorject.tags ? currentPorject.tags :'tags not definted' }</b></div> : null }
            </div>
            <div className="body-section">
                <div className="details">
                    {currentPorject && currentPorject.description}

                </div>

                <div className="lists-container">

                    <div className="list">
                    <h4>Tasks</h4>
                    {currentPorject && currentPorject.tasks}
                        
                    </div>

                    <div className="list">
                    <h4>Constraints</h4>
                    {currentPorject && currentPorject.constraints}
                    </div>
                    <div className="list">
                        <h4>Requirements</h4>
                        {currentPorject && currentPorject.requirements}
                    </div>

                    <div className="list">
                    <h4>Training</h4>
                    {currentPorject && currentPorject.training}
                    </div>
                </div>

                {/* <div className="requirements">Required Skills: <b>React.JS / JS / CSS</b> </div> */}

            </div>


        </div>
    )
}