import React from "react"

import "./Credits.css"
import { config } from "../../config";
import ReactAudioPlayer from "react-audio-player";


export const Credits = () => {


    const url = config.baseURL + "/158066369-space-wars.m4a";

    return (
        <div className="credits-container">
             <ReactAudioPlayer
            src={url}
            autoPlay
            loop={false}
            volume={0.3}
          />

            <div className="wrapper">
                <div className="scroll-text">
                    <h1>STAR WARS</h1>
                    <h2>Scrolling text effect</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, totam. Quos autem, corporis est maxime ea rem ut ad modi delectus nulla voluptate aliquid quas molestias omnis consectetur obcaecati neque perferendis aperiam. Vero voluptate dolores nesciunt. Alias sapiente explicabo necessitatibus?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, totam. Quos autem, corporis est maxime ea rem ut ad modi delectus nulla voluptate aliquid quas molestias omnis consectetur obcaecati neque perferendis aperiam. Vero voluptate dolores nesciunt. Alias sapiente explicabo necessitatibus?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, totam. Quos autem, corporis est maxime ea rem ut ad modi delectus nulla voluptate aliquid quas molestias omnis consectetur obcaecati neque perferendis aperiam. Vero voluptate dolores nesciunt. Alias sapiente explicabo necessitatibus?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, totam. Quos autem, corporis est maxime ea rem ut ad modi delectus nulla voluptate aliquid quas molestias omnis consectetur obcaecati neque perferendis aperiam. Vero voluptate dolores nesciunt. Alias sapiente explicabo necessitatibus?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, totam. Quos autem, corporis est maxime ea rem ut ad modi delectus nulla voluptate aliquid quas molestias omnis consectetur obcaecati neque perferendis aperiam. Vero voluptate dolores nesciunt. Alias sapiente explicabo necessitatibus?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, totam. Quos autem, corporis est maxime ea rem ut ad modi delectus nulla voluptate aliquid quas molestias omnis consectetur obcaecati neque perferendis aperiam. Vero voluptate dolores nesciunt. Alias sapiente explicabo necessitatibus?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, totam. Quos autem, corporis est maxime ea rem ut ad modi delectus nulla voluptate aliquid quas molestias omnis consectetur obcaecati neque perferendis aperiam. Vero voluptate dolores nesciunt. Alias sapiente explicabo necessitatibus?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, totam. Quos autem, corporis est maxime ea rem ut ad modi delectus nulla voluptate aliquid quas molestias omnis consectetur obcaecati neque perferendis aperiam. Vero voluptate dolores nesciunt. Alias sapiente explicabo necessitatibus?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, totam. Quos autem, corporis est maxime ea rem ut ad modi delectus nulla voluptate aliquid quas molestias omnis consectetur obcaecati neque perferendis aperiam. Vero voluptate dolores nesciunt. Alias sapiente explicabo necessitatibus?</p>
                </div>
            </div>
        </div>
    )
}