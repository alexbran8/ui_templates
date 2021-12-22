import React from "react";
import "./Homepage.scss"
import { withTranslation } from "react-i18next";
import "../../services/i18n";
import LanguageSelector from "../LanguageSelector";
import { motion } from 'framer-motion'
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Homepage = () => {
  const { t, i18n } = useTranslation();
  const user = useSelector((state) => ({ auth: state.auth }));

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const history = useHistory();


  return (<div className="home-page">
    
    <div className="toppane">
      {!user.auth.isAuthenticated ? (<>
        <h1>Welcome, please login in order to continue!</h1>
      </>
      ) : (
        <div>
          <div className="getStarted">
            <motion.h1
              className="title"
              initial={{ x: 100, y: -100 }}
              animate={{ x: 0, y: 0 }}
              transition={{ ease: 'easeOut', duration: 1.3 }}
              drag={true}
              dragConstraints={{ top: 1, bottom: 1, right: 1, left: 1 }}
              dragElastic={1}
              whileHover={{ cursor: "pointer" }}
            >
               <h2>Welcome, {user.auth.name}!</h2>
              "Your Plan, &nbsp; &nbsp; <br /> &nbsp; &nbsp; &nbsp; Your Planet"
            </motion.h1>

            {/* <Link to='/' className="button">Home</Link> */}

            <motion.div animate={{ opacity: [0, 1] }}>
              <div className="circle c1"  >Apply to a project</div>
              <div className="circle c1 ripple" onClick={e => history.push('/projects/list')} />
              <div className="circle c2" >View newsletter</div>
              <div className="circle c2 ripple" />
              <div className="circle c3" >Credits</div>
              <div className="circle c3 ripple" onClick={e => history.push('/credits')} />
              <div className="circle c4" >Check application results</div>
              <div className="circle c4 ripple" />
            </motion.div>
          </div>
        </div>
      )}
      <motion.h5
      initial={{ x: 100, y: -100 }}
      animate={{ x: 0, y: 100}}
      transition={{ ease: 'easeOut', duration: 1.3 }}
      >This web application is still under development!</motion.h5>
    </div>
    <div className="home-container">
      {/* ssss
      <section>
        section 1
      </section>
      <aside>
        aside 1
      </aside> */}
    </div>
  </div>)

}

export default Homepage