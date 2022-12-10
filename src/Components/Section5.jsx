import React from "react";
import style from "../Style.css/Section5.css";
import appStore from "../images/Group 119.png";
import googlePlay from "../images/Group 120.png";
import { Link } from "react-router-dom";

const Section5 = () => {
  return (
    <div className="section5">
      <h2>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</h2>
      <h1>Create your account for free and start trading today!</h1>
      <div>
        <Link to="/getstarted" className="getstarted-sec5">Get Started</Link>
        <div className="appPlay">
            <div>
                <img src={appStore} alt="" />
            </div>
            <div>
                <img src={googlePlay} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
