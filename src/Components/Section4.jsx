import React from "react";
import style from "../Style.css/Section4.css";
import emojione1 from "../images/emojione-monotone_keycap-1.png";
import cuate8 from "../images/cuate8.png";
import rafiki9 from "../images/rafiki9.png";
import emojione2 from "../images/emojione-monotone_keycap-2.png";
import emojione3 from "../images/emojione-monotone_keycap-3.png";
import cuate7 from "../images/cuate7.png";

const Section4 = () => {
  return (
    <div className="section4">
      <div className="stepsLorem">
        <h2>Buy and Sell your Cryptocurrency in 3 simple steps</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lectus
          faucibus et nunc id sollicitudin pretium nulla. Et nunc tempus mauris
          ullamcorper mauris, rhoncus sed magna. Eu consectetur nulla aliquam
          consectetur lectus. Rutrum feugiat et, tellus mattis donec et odio
          molestie amet.
        </p>
      </div>
      <div className="sec4-container">
        <div className="freeAccout-Section">
          <div className="free-sec2">
            <div>
              <img src={emojione1} alt="" />
            </div>
            <div className="free-text">
              <h1>Create a free Account</h1>
              <p>
                Sign up for your free TradExpress Wallet on web, iOS, or Android
                devices and follow our easy process to set up your profile.
              </p>
            </div>
          </div>
          <div>
            <img src={cuate8} alt="" />
          </div>
        </div>
        <div className="deposit-div1">
          <img src={rafiki9} alt="" />
          <div className="deposit-div2">
            <div>
              <img src={emojione2} alt="" />
            </div>
            <div className="deposit-div-text">
              <h1>Deposit</h1>
              <p>
                Choose your preferred deposit option like bank transfer,
                credit/debit card or send digital asset directly to your wallet
                for easy funding/withdrawal.
              </p>
            </div>
          </div>
        </div>

        <div className="buySell-div">
          <div className="buySell-div2">
          <div>
          <img src={emojione3} alt="" />
          </div>
          <div className="buySell-div-text">
            <h1>Buy/ Sell Crypto</h1>
            <p>
              Sign up for your free TradExpress Wallet on web, iOS, or Android
              devices and follow our easy process to set up your profile.
            </p>
          </div>
          </div>
          <img src={cuate7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section4;
