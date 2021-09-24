import React from "react";
import "./Homepage.scss"
import { withTranslation } from "react-i18next";
import "../../services/i18n";
import LanguageSelector from "../LanguageSelector";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";


const Homepage = () => {
  const { t, i18n } = useTranslation();
  const user = useSelector((state) => ({ auth: state.auth }));

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };



  return (<div className="home-page">

    <div className="toppane">
      {!user.auth.isAuthenticated ? (<>
        <h1>Welcome, please login in order to continue!</h1>
      </>
      ) : (
        <div>
          <h2>Welcome, {user.auth.name}!</h2>
        </div>
      )}
      <h5>This web application is still under development!</h5>
      {/* <div className="grid-container">
        <div className="grid-item">1</div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
        <div className="grid-item">4</div>
        <div className="grid-item">5</div>
        <div className="grid-item">6</div>
        <div className="grid-item">7</div>
        <div className="grid-item">8</div>
        <div className="grid-item">9</div>
      </div> */}
    </div>
    <div className="home-container">
      ssss
      <section>
        section 1
      </section>
      <aside>
        aside 1
      </aside>
    </div>
  </div>)

}

export default Homepage