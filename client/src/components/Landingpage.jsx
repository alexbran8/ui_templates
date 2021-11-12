
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { UPDATE_PROFILE_TYPE } from '../redux/reducers/types'
import { useSelector, useDispatch } from "react-redux";
import { config } from "../config"
import { motion } from 'framer-motion'
import { useIsSmall } from '../hooks/utils'

import LogOut from  "../middlewares/LogOut"

import "./Landingpage.scss"

import Button from '@material-ui/core/Button';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';



const Landingpage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => ({ auth: state.auth }));

  const isSmall = useIsSmall()

  const variants = isSmall
    ? {
        animate: {
          opacity: 1,
          scale: 1,
                y: 0,
        },
        exit: {
          opacity: 1,
          scale: 1,
                y: 500,
        },
      }
    : {
        animate: {
          opacity: 1,
          scale: 1,
          y: 0,
        },
        exit: {
          opacity: 0,
          scale: 0.9,
          y: -10,
        },
      };

  const cardClick = (resource_origin) => {
    dispatch({
      type: UPDATE_PROFILE_TYPE,
      payload: {
        type: resource_origin,
      },
    });
    sessionStorage.setItem('type', resource_origin)
    history.push('/home');
  }

  const handleLogOut = () => 
  {
    LogOut()
  }

  return (

    <div className="home-container">
      
      <div>
        {!user.auth.token ? (
          <div>
                 
            <div className="card-container">
              <motion.a style={{ cursor: 'pointer' }} onClick={() => { cardClick('student') }}
                initial={{opacity: 0, y: 180}}
                // animate={{opacity: [0, 1], y: [140, 0]}}
                animate={isSmall ? {opacity: [0, 1], y: [140, 0], x: [0, 0]} : {opacity: [0, 1], x: [-500, 0]}}
                transition={{ ease: "easeOut", delay: 0.7, duration: 0.7 }}
                >
                <Card className="card-item">
                  <CardBody>
                    <CardTitle className="card-title">student</CardTitle>
                    <CardText className="text-muted">You are stundent at University</CardText>
                  </CardBody>
                </Card>
              </motion.a>
              <motion.a style={{ cursor: 'pointer' }} onClick={() => { cardClick('nokia') }}
                initial={{opacity: 0, y: 180}}
                animate={isSmall ? {opacity: [0, 1], y: [140, 0], x: [0, 0]} : {opacity: [0, 1], x: [500, 0]}}
                transition={{ ease: "easeOut", delay: 0.7, duration: 0.7 }}
                >
                <Card className="card-item">
                  <CardBody>
                    <CardTitle className="card-title">Nokia tentant</CardTitle>
                    <CardText className="text-muted">You are a nokia employee / guest </CardText>
                  </CardBody>
                </Card>
              </motion.a>
            </div>
            <motion.p
       animate={isSmall ? { y: 150} : { y: 150}}
       transition={{ ease: 'easeIn', duration: 0.5 }}
      >
        Please select one of the cards in order to continue:
      </motion.p>  
          </div>

        ) : (
          <div>
            <h1>{user.auth.name}, you have been logeed in succcessfully!</h1>
             <Button variant="contained" color="primary" className="button" onClick={() => { cardClick(user.auth.type) }}>Continue here</Button> 
            <Button variant="contained" color="secondary" className="button" onClick={() => { handleLogOut() }}>Logout</Button>
          </div>
        )}

      </div>
    </div>
  );
}

export default Landingpage;