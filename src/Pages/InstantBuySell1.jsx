import React from "react";
import style from "../Style.css/InstantBuySell1.css";
import { Link } from "react-router-dom";

const InstantBuySell1 = () => {
  return (
    <div>
      <form action="" className="buysellform">
        <h1>Instant Buy/Sell</h1>
        <div className="buttonBuy-Sell">
          <Link to="/instantbuysell" className="sell">
            Buy
          </Link>
          <button className="buy">Sell</button>
        </div>
        <div className="pInput">
          <p className="coin">Coin to Sell</p>
          <input className="bitcoin" type="text" placeholder="Bitcoin(BTC)" />
        </div>
        <div className="pInput">
          <p className="currency">Currency</p>
          <input className="naira" type="text" placeholder="Naira(NGN)" />
        </div>
        <div className="pInput">
          <p className="amount">Amount</p>
          <input className="NGN" type="text" placeholder="NGN 3,000,000.00" />
        </div>
        <button className="continue">Continue</button>
      </form>
    </div>
  );
};

export default InstantBuySell1;
