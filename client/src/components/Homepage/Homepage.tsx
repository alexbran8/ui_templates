import React, { useEffect, useState } from "react";
import "./Homepage.scss"

import "./sun.scss"
import "../../services/i18n";
import { motion } from 'framer-motion'
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { config } from "../../config";

// TODO: 1. create object of arrays with alert messages {message: 'Update #4', type: 'success'} (type depending on material ui alert types)
//       2. check out: https://mui.com/components/alert/
//     3. implement material ui alert component in AlertBar, having as props type and message
//     4. loop over object of arrays in order to show each message for 5 to 10 seconds CHECKOUT: setTimeout, setInverval, useEffect, loops (for / forEach)

const Homepage = () => {
  const { t, i18n } = useTranslation();
  const [rotation, setRotation] = useState(0)
  const user = useSelector((state) => ({ auth: state.auth }));

  let rocket = null;

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const history = useHistory();

  function getCenter(element) {
    const { left, top, width, height } = element.getBoundingClientRect();
    return { x: left + width / 2, y: top + height / 2 }
  }


  useEffect(() => {
    const arrowCenter = getCenter(rocket);
    // let arrowRects = rocket.getBoundingClientRect();

    addEventListener("mousemove", ({ clientX, clientY }) => {
      const radAngle = Math.atan2(clientY - arrowCenter.y, clientX - arrowCenter.x);
      const degAngle = radAngle * (180 / Math.PI)
      degAngle >= 360 ? setRotation(90 + rotation - degAngle) : setRotation(90 + rotation + degAngle)
    }
    )

  }, [])




  return (
    <div className="home-page">
      <div className="toppane">
        {!user.auth.isAuthenticated ? (<>
          <h1>Welcome, please login in order to continue!</h1>
        </>
        ) : (
          <div>
            <div className="getStarted">
              <motion.h1
                className="sun"
                initial={{ x: 100, y: -100 }}
                animate={{ x: 0, y: 0 }}
                transition={{ ease: 'easeOut', duration: 1.3 }}
                drag={true}
                dragConstraints={{ top: 1, bottom: 1, right: 1, left: 1 }}
                dragElastic={1}
              //whileHover={{ cursor: "pointer" }}
              >
                {/* TODO:  what if the sun was in the left up corner, embeded somehow with the app brand (NOKIA ECOSYSTEM) and the component inside the middle of the screen would be a startship ?? (DONE)*/}
                <div className="sun-text">
                  <b>NOKIA</b> {config.AppName}
                </div>
              </motion.h1>

              <div className="space">
                {/* TODO:make rocket an extenal component with it's own styles and just import it here. */}
                <div className="rocket" style={{ transform: `rotate(${rotation}deg)` }} ref={div => (rocket = div)}>
                  <div className="fuselage">
                    <div className="nose"></div>
                    <div className="head">
                      <div className="window"></div>
                    </div>
                    <div className="neck"></div>
                    <div className="body"></div>
                    <div className="reactor"></div>
                    <div className="fire">
                      <div className="spark1"></div>
                      <div className="spark2"></div>
                      <div className="spark3"></div>
                      <div className="spark4"></div>
                      <div className="spark5"></div>
                      <div className="spark6"></div>
                    </div>
                  </div>
                  <div className="left-fin">
                  </div>
                  <div className="left-fin-end">
                    <div className="rocket-text1">
                      {user.auth.name}
                    </div>
                  </div>
                  <div className="right-fin"></div>
                  <div className="right-fin-end">
                    <div className="rocket-text2">
                      "Your Plan, Your Planet"
                    </div>

                  </div>
                </div>
              </div>
              {/* TODO: how about making the text inside the circles dependent on the screen size? :D (DONE)*/}
              <motion.div animate={{ opacity: [0, 1] }} >
                <div className="circle c1" onClick={e => history.push('/projects/list')}><p className="circle-text">Apply to a project</p></div>
                <div className="circle c1 ripple" />
                <div className="circle c2" onClick={e => history.push('/projects/list')}><p className="circle-text">View newsletter</p></div>
                <div className="circle c2 ripple" />
                <div className="circle c3" onClick={e => history.push('/credits')}><p className="circle-text">Credits</p></div>
                <div className="circle c3 ripple" />
                <div className="circle c4" onClick={e => history.push('/projects/list')}><p className="circle-text">Check application results</p></div>
                <div className="circle c4 ripple" />
                <div className="star star1"></div>
                <div className="star star2"></div>
                <div className="star star3"></div>
                <div className="star star4"></div>
                <div className="star star5"></div>

              </motion.div>
            </div>
          </div>
        )}
        {<motion.h5
          initial={{ x: 100, y: -100 }}
          animate={{ x: 0, y: 100 }}
          transition={{ ease: 'easeOut', duration: 1.3 }}
        >
          <div className="development">This web application is still under development!</div>
        </motion.h5>}
      </div>

    </div>)

}

export default Homepage