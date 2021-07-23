import Header from "./Header.jsx";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { config } from "../config"
import "./Homepage.scss"

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';



const homePage = () => {

  
const cardClick = (resource_origin) => {
  console.log('test', resource_origin)
}
  return (
    <div className="homeContainer">

      <div>
        {/* add user to redux */}
        {!sessionStorage.getItem('userEmail') ? (

          <div>
            <div className="resourceType-container">
              <a style={{ cursor: 'pointer' }} onClick={() => {cardClick('student')}}>
                <Card className="card-item">
                  <CardBody>
                    <CardTitle>I am a student</CardTitle>
                    <CardText className="text-muted">Select this if you are stundent at University and you want to login using your facebook / google account</CardText>
                  </CardBody>
                </Card>
              </a>
              <a style={{ cursor: 'pointer' }} onClick={() => {cardClick('nokia')}}>
                <Card className="card-item">
                  <CardBody>
                    <CardTitle>I am a Nokia user</CardTitle>
                    <CardText className="text-muted">Select this if you are a nokia user </CardText>
                  </CardBody>
                </Card>
              </a>
            </div>
          </div>

        ) : (
          <div>
            <h1>You have login succcessfully!</h1>
            <h2>Welcome {state.user.email}!</h2>
          </div>
        )}

      </div>
    </div>
  );
}

export default homePage;