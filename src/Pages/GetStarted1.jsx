import React from 'react'
import style from '../Style.css/GetStarted1.css'
import { Link } from 'react-router-dom'

const GetStarted1 = () => {
  return (
    <div>
         <form action="" className="getstartedForm">
        <h1>Welcome</h1>
        <div className="button-bg">
          <Link to="/getstarted" className="individual1">Individual</Link>
          <button className="bussiness1">Business</button>
        </div>
        <input className="username" type="text" placeholder="Username" />
        <input className="fullname" type="text" placeholder="Business Name" />
        <input className="email" type="email" placeholder="Email" />
        <input className="phonenumber" type="number" placeholder="Phone Number" />
        <input className="referalcode" type="number" placeholder="Referal Code (optional)" />
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
  )
}

export default GetStarted1