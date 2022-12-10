import React from "react";
import style from "../Style.css/InstantBuySell.css";
import { Link } from "react-router-dom";

const InstantBuySell = () => {
  return (
    <div>
      <form action="" className="buysellform">
        <h1>Instant Buy/Sell</h1>
        <div className="buttonBuy-Sell">
          <button className="buy">Buy</button>
          <Link to="/instantbuysell1" className="sell">Sell</Link>
        </div>
        <div className="pInput">
          <p className="coin">Coin to Buy</p>
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

export default InstantBuySell;
