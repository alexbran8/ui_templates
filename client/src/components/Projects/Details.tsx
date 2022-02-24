import React from "react"

import "./Details.scss"


export const Details = () => {

    return (
        <div className="details-container">
            <div className="title-section">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
                className="header-picture" />
                
            <h1>NEXT.JS Avengers / Web platform for incident management and tools support</h1>
            </div>
            <div className="header-section">
                <div className="coordinator">coordinator: <b>Alexandru Bran</b></div>
                <div className="published">published: <b>24/02/2022</b></div>
                <div className="subject"> subject: <b>Fullstack Web Development</b></div>
                <div className="team-size"> team-size: <b>3-4 students</b></div>
                <div className="tags">tags: <b>React.JS / JS / CSS</b></div>
            </div>
            <div className="body-section">
                <div className="details">
                    Develop next.JS web application having the following CRUD components: tools support / incident management / landing page
                </div>

                <div className="tasks">
                    <b>Project Tasks: </b>
                    <div className="task-list">
                        <ol>
                            <li>get familiarized with next.JS framework, by being able to compare it with it's parent library (react.JS)</li>
                            <li>understand how next.JS works</li>
                            <li>understand SSR (Server Side Rendering)</li>
                            <li>create reusable components for the CRUD process</li>
                        </ol>
                    </div>
                    <b>Constraints: </b>
                    <div className="task-list">
                        <ol>
                            <li>project needs to use fake database provider</li>
                            <li>REST protocol shall not be used; only graphQL queries;</li>
                            <li>project infrastructure (webpack / babel / etc.) needs to be prepared for TypeScript implmentation</li>
                        </ol>
                    </div>
                    <b>Training: </b>
                    <div className="task-list">
                        <ol>
                            <li>next.JS documentation</li>
                            <li>...</li>
                        </ol>
                    </div>
                </div>

                {/* <div className="requirements">Required Skills: <b>React.JS / JS / CSS</b> </div> */}

            </div>


        </div>
    )
}