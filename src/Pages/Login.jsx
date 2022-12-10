import React from "react";
import style from "../Style.css/Login.css";

const Login = () => {
  return (
    <div>
      <form action="" className="loginForm">
        <h1>Welcome Back</h1>
        <div>
          <input className="logUsername" type="text" placeholder="Username" />
        </div>
        <div>
          <input
            className="logPassword"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="loginP">
          <div className="remember">
            <input className="check" type="checkbox" />
            <p>Remember password</p>
          </div>

          <p className="forget-link">Forget Password?</p>
        </div>
        <div>
          <button className="logButton">Log In</button>
        </div>
        <p className="newClick">
          New User? <span className="clickHere">Click here</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
