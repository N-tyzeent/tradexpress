import React from "react";
import style from "../Style.css/GetStarted.css";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div>
      <form action="" className="getstartedForm">
        <h1>Welcome</h1>
        <div className="button-bg">
          <button className="individual">Individual</button>
          <Link to="/getstarted1" className="bussiness">
            Business
          </Link>
        </div>
        <input className="username" type="text" placeholder="Username" />
        <input className="fullname" type="text" placeholder="Full Name" />
        <input className="email" type="email" placeholder="Email" />
        <input
          className="phonenumber"
          type="number"
          placeholder="Phone Number"
        />
        <input
          className="referalcode"
          type="number"
          placeholder="Referal Code (optional)"
        />
        <p className="agreeTo">
          By clicking the Sign Up button, you agree to TradExpress{" "}
          <span className="termsService">terms and service</span>
        </p>
        <Link className="signUp"  to='/welcome'>Sign Up</Link>
        <p className="already">
          Already have an account? <span className="clickHere">click here</span>
        </p>
      </form>
    </div>
  );
};

export default GetStarted;
