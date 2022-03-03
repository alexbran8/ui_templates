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
        onError: (error) => { console.error("Error creating a post", error); alert("Error creating a post request " + error.message) },
      });
    

    useEffect(() => {
        // update page data based on title params
        setCurrentId(parseInt(props.match.params.id))

    }, [])

    return (
        <div className="details-container">
            <div className="title-section">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
                    className="header-picture" />

                <h1>{currentPorject && currentPorject.title}</h1>
            </div>
            <div className="header-section">
                <div className="coordinator">coordinator: <b>{currentPorject && currentPorject.coordinator}</b></div>
                <div className="published">published: <b>24/02/2022</b></div>
                <div className="subject"> subject: <b>Fullstack Web Development</b></div>
                <div className="team-size"> team-size: <b>{currentPorject && currentPorject.team_size} students</b></div>
                <div className="tags">tags: <b>{currentPorject && currentPorject.tags ? currentPorject.tags :'tags not definted' }</b></div>
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