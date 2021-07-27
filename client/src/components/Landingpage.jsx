
import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { UPDATE_PROFILE, AUTH_SIGN_IN, AUTH_SIGN_OUT, AUTH_ERROR } from '../actions/types'
import { config } from "../config"
import "./Landingpage.scss"

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';



const Langingpage = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  
const cardClick = (resource_origin) => {
  
  console.log('test', resource_origin)
  dispatch({
    type: UPDATE_PROFILE,
    payload: {
      type: resource_origin,
    },
  });
  history.push('/home');
}
  return (
    <div className="home-container">

      <div>
        {/* add user to redux */}
        {!sessionStorage.getItem('userEmail') ? (

          <div>
         
            {/* <Card props={props} /> */}
             
            <div className="card-container">
            <a style={{ cursor: 'pointer' }} onClick={() => {cardClick('student')}}>
                <Card className="card-item">
                  <CardBody>
                    <CardTitle className="card-title">student</CardTitle>
                    <CardText className="text-muted">Select this if you are stundent at University</CardText>
                  </CardBody>
                </Card>
              </a>
              <a style={{ cursor: 'pointer' }} onClick={() => {cardClick('nokia')}}>
                <Card className="card-item">
                  <CardBody>
                    <CardTitle className="card-title">Nokia tentant</CardTitle>
                    <CardText className="text-muted">Select this if you are a nokia employee / guest </CardText>
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

export default Langingpage;