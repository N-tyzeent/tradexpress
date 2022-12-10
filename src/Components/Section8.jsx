import React from "react";
import style from "../Style.css/Section8.css";
import copyrighticon from "../images/copyRightIcon.png";

const Section8 = () => {
  return (
    <div className="section8">
      <div className="sec8-div">
       <div>
       <img src={copyrighticon} alt="" />
       </div>
        <div>
        <p>2022 Designed by BOB KELLY OVIE WILLIAMS for Tradexpress Technologies. All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Section8;
