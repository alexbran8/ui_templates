import React, { useEffect } from "react"

import "./Details.scss"


export const Details = (props) => {

    useEffect(() => {
        // update page data based on title params
        console.log(props.match.params.title)

    }, [])

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
                    Develop next.JS web application having the following CRUD components: tools support / incident management / landing page. 
                    The application would serve as a user interface where department team members would be able to see and access all the available web applications, see the status of the VM's/ containers where the application are being hosted in production (this is planned as a future implementation).

                    <p>About NEXT.JS: This is probably one of the hotest subjects in the web-world since React. In 2021 Vercel, the company that manages this framework citied a growth of over 50% in comparison to 2020.</p>


                </div>

                <div className="lists-container">

                    <div className="list">
                    <h4>Tasks</h4>
                        <ul>
                            <li>get familiarized with next.JS framework, by being able to compare it with it's parent library (react.JS)</li>
                            <li>understand how next.JS works</li>
                            <li>understand SSR (Server Side Rendering)</li>
                            <li>create reusable components for the CRUD process</li>
                        </ul>
                    </div>

                    <div className="list">
                    <h4>Constraints</h4>
                        <ul>
                            <li>project needs to use fake database provider</li>
                            <li>REST protocol shall not be used; only graphQL queries;</li>
                            <li>project infrastructure (webpack / babel / etc.) needs to be prepared for TypeScript implmentation</li>
                        </ul>
                    </div>
                    <div className="list">
                        <h4>Requirements</h4>
                        <ul>
                            <li>JS skills</li>
                            <li>CSS</li>
                            <li>React</li>
                            <li>next.JS would be a significant plus</li>
                        </ul>
                    </div>

                    <div className="list">
                    <h4>Training</h4>
                        <ul>
                            <li>next.JS documentation</li>
                            <li>...</li>
                        </ul>
                    </div>
                </div>

                {/* <div className="requirements">Required Skills: <b>React.JS / JS / CSS</b> </div> */}

            </div>


        </div>
    )
}