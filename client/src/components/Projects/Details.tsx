import React from "react"

import "./Details.scss"


export const Details = () => {

    return (
        <div className="details-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
            className="header-picture" />
            <h1>NEXT.JS Avengers / Web platform for incident management and tools support</h1>
            <div className="header-section">
                <div className="coordinator">coordinator: <b>Alexandru Bran</b></div>
                <div className="published">published: <b>24/02/2022</b></div>
                <div className="subject"> subject: <b>Fullstack Web Development</b></div>
                <div className="team-size"> team-size: <b>3-4 students</b></div>
                <div className="tags"><b>React.JS / JS / CSS</b></div>
            </div>
            <div className="details">Dezvoltarea unei aplicatii web folosind framework-ul Next.JS:
- CRUD pentru managementul incidentelor
- CRUD pentru dezvoltarea unui landing page (unde for fi iterate toate aplicatiile intr-un CSS grid)
</div>
            <div className="details">NEXT.JS</div>
            
            <div className="requirements">Required Skills: <b>React.JS / JS / CSS</b> </div>
            

        </div>
    )
}