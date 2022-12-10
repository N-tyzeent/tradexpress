import React from "react";
import style from "../Style.css/Welcome.css";
import image from "../images/Rectangle 26.png";

const Welcome = () => {
  return (
    <div>
      <form action="">
        <div className="welcome">
          <div>
            <h5 className="almostIn">You're Almost In!</h5>
            <h1 className="wel">Welcome Juliet Chinenye</h1>
          </div>
          <div>
            <img src={image} alt="" />
          </div>
          <div className="activationMessage">
            <p>
              An activation link has been sent to egwuotijulietchinenye@gmail.com Please
              click on the link to verify your email and activate your
              TradExpress account.
            </p>
          </div>
          <div>
            <button className="signUpWel">Sign Up</button>
          </div>
          <div>
            <p className="already">
              Already have an account?{" "}
              <span className="clickHere">Click here</span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Welcome;
