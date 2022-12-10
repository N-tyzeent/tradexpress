import React from "react";
import style from "../Style.css/Section7.css";
import twitter from "../images/twitter.png";
import icon from "../images/socialMediaIcon.png";
import phoneIcon from "../images/PhoneCallIcon.png";
import facebook from "../images/Facebook.png";

const Section7 = () => {
  return (
    <div className="section7">
      <footer className="footer">
        <div className="products-div">
          <h5>Products</h5>
          <p>Alt</p>
          <p>Fiat</p>
          <p>Refill</p>
          <p>P2P</p>
        </div>
        <div className="learnBlogHelp">
          <h5>Learn</h5>
          <p>Blog</p>
          <p>Help Center</p>
        </div>
        <div className="contactEmailMedia">
          <h5>Contact</h5>
          <p>hello@tradexpress.com</p>
          <p>support@tradexpress.com</p>
          <div className="socialMedia-div">
            <div>
              <img src={twitter} alt="" />
            </div>
            <div>
              <img src={icon} alt="" />
            </div>
            <div>
              <img src={phoneIcon} alt="" />
            </div>
            <div>
              <img src={facebook} alt="" />
            </div>
          </div>
        </div>
        <div className="company-div">
          <h5>Company</h5>
          <p>About Us</p>
          <p>Careers</p>
          <p>Rates</p>
          <p>Mobile</p>
        </div>
        <div className="legal-div">
          <h5>Legal</h5>
          <p>Privacy Policy</p>
          <p>Anti-Money Laundering</p>
          <p>Terms and Conditions</p>
        </div>
      </footer>
    </div>
  );
};

export default Section7;
