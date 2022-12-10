import React from "react";
import style from "../Style.css/Section6.css";
import Union1 from "../images/Union-1.png";
import Ireti from "../images/Ireti.png";
import quote from "../images/quote.png";
import Union2 from "../images/Union-2.png";
import Bayo from "../images/Bayo.png";
import Union3 from "../images/Union-3.png";
import Olagoke from "../images/Olagoke.png";

const Section6 = () => {
  return (
    <div className="section6">
      <h5>Customer’s Review</h5>
      <div className="section6-div">
        <div className="feedback-container">
          <div className="eachtop-div">
            <img className="purple" src={Union1} alt="" />
            <img className="quote" src={quote} alt="" />
            <p>
              Trading on TradExpress mobile & web platforms has been a smooth
              experience for me quite easy to navigate.
            </p>
          </div>
          <div className="eachbottom-div">
            <img src={Ireti} alt="" />
            <div>
              <h6>Ireti</h6>
              <p> Nigeria</p>
            </div>
          </div>
        </div>

        <div className="feedback-container">
          <div className="eachtop-div">
            <img className="purple" src={Union2} alt="" />
            <img className="quote" src={quote} alt="" />
            <p>
              Trading on TradExpress mobile & web platforms has been a smooth
              experience for me quite easy to navigate.
            </p>
          </div>
          <div className="eachbottom-div">
            <img src={Bayo} alt="" />
            <div>
              <h6>Bayo</h6>
              <p> USA</p>
            </div>
          </div>
        </div>

        <div className="feedback-container">
        <div className="eachtop-div">
          <img className="purple" src={Union3} alt="" />
          <img className="quote" src={quote} alt="" />
          <p>
            Trading on TradExpress mobile & web platforms has been a smooth
            experience for me quite easy to navigate.
          </p>
        </div>
        <div className="eachbottom-div">
            <img src={Olagoke} alt="" />
            <div className="bottom-text">
                <h6>Olagoke</h6>
                <p> Nigeria</p>
            </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Section6;
