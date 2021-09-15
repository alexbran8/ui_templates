import React from "react";
import "./Footer.scss"
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {

  return (<div className="footer">
    <footer>
      <section className="ft-main">
        <div className="ft-main-item">
          <h2 className="ft-title">About</h2>
          <ul>
            <li><a href="#">Details</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Projects</a></li>            
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Resources</h2>
          <ul>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Webinars</a></li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Contact</h2>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#"><FacebookIcon /></a><a href="#"><LinkedInIcon /></a><a href="#"><InstagramIcon /></a></li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Stay Updated!</h2>
          <p>Subscribe to our newsletter to get our latest news.</p>
          <form>
            <input type="email" name="email" placeholder="Enter email address" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </section>
      <section className="ft-legal">
        <ul className="ft-legal-list">

          <li><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li>&copy; 2021 Nokia Networks Romania</li>
        </ul>
      </section>
    </footer>
  </div>
  )
}

export default Footer;