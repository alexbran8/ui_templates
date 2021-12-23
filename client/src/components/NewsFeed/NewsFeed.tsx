import React from "react"
import { SplitScreen } from './SplitScreen';
import "./NewsFeed.css"
const LeftHandComponent = () => {
    return <h1 style={{ backgroundColor: 'green' }}>Left!</h1>;
}

const RightHandComponent = () => {
    return <p style={{ backgroundColor: 'red' }}>Right!</p>;
}


export const NewsFeed = () => {
    return (
        <div className="main">
            <h1>NewsFeed</h1>
            <SplitScreen leftWeight={1} rightWeight={5}>
                <LeftHandComponent name="Shaun" />
                <RightHandComponent message="Hello" />
            </SplitScreen>
        </div>
    )
}