import React from "react";
import "./review.css";
import re from "./review.png";

export default function Review() {
  return (
    <div className="review">
      <div className="left-review">
        <img src={re} alt="" />
      </div>
      <div className="right-review">
        <div className="reviewpost">
          <p>WHAT THEY SAY</p>
          <h1>What Our Customer Say About Us </h1>
          <p className="comment">
            "Taste is the best.Besides the many and delicious meals,the service
            is also very good,especially in the very fast delivery. i highly
            recommend Taste to you"
          </p>

          <h5>Karthik SB</h5>
          <p className="role">Food Enthusiast</p>
        </div>
      </div>
    </div>
  );
}
