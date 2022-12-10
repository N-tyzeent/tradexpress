import React from "react";
import style from "../Style.css/Section2.css";

const Section2 = ({ exchangerates }) => {
  return (
    <div className="section2">
      {exchangerates.map((all) => {
        return (
          <div key={all.id} className="exchangerates-box">
            <div className="per-exchangerate">
              <div className="top-box">
                <p>{all.name}</p>
                <p>{all.percent_change_24h}</p>
              </div>
              <p>{all.price_usd}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Section2;
