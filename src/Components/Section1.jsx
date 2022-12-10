import React from "react";
import style from "../Style.css/Section1.css";
import { Link } from "react-router-dom";
import appStore from "../images/Group 68@2x.png";
import googlePlay from "../images/Group 69.png";
import ellipse from "../images/Group 127.png";

const Section1 = () => {
  return (
    <div className="section1">
      <div>
        <h1>Buy, sell and manage your crypto on TradExpress.</h1>
        <p>
          Easily trade cryptocurrencies like BTC, USDT, ETH, LTC & XPR with NGN.
        </p>

        <Link className="section1-getstarted" to="/getstarted">
          Get Started
        </Link>

        <div className="download-btns">
          <img className="appstore" src={appStore} alt="" />
          <img className="googleplay" src={googlePlay} alt="" />
        </div>
      </div>

      <img className="ellipse" src={ellipse} alt="" />
    </div>
  );
};

export default Section1;
