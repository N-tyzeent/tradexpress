import React, { useRef, useState } from "react";
import style from "../Style.css/Section3.css";
import amico from "../images/amico.png";
import cuate from "../images/cuate.png";
import rafiki from "../images/rafiki.png";

const Section3 = () => {
  const [data, setData] = useState("See Less");
  const divRef = useRef();
  return (
    <div className="section3">
      <h2>Why do people get involved with Cryptocurrencies?</h2>
      <button
        onClick={() => {
          if (divRef.current.classList.contains("active")) {
            divRef.current.classList.remove("active");
            setData("See Less");
          } else {
            divRef.current.classList.add("active");
            setData("See More");
          }
        }}
      >
        {data}
      </button>
      <div ref={divRef} className="div-info">
        <div className="easyMode">
          <img src={rafiki} alt="" />
          <h3>Easy Mode of Payment</h3>
          <p>
            People can now easily send and receive money from anywhere in the
            world to purchase goods and pay for services.
          </p>
        </div>
        <div className="freedom">
          <img src={cuate} alt="" />
          <h3>Financial Freedom</h3>
          <p>
            Just like the internet no single entity controls the Crypto network
            which provides users transparency and privacy, which puts you in
            absolute control of your money.
          </p>
        </div>
        <div className="investment">
          <img src={amico} alt="" />
          <h3>Investment</h3>
          <p>
            Just like the internet no single entity controls the Crypto network
            which provides users transparency and privacy, which puts you in
            absolute control of your money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
