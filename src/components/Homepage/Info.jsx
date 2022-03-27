import React from "react";
import "./info.css";
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";
import { motion } from "framer-motion";

function Info() {
  return (
    <motion.div
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        ease: "easeOut",
        duration: 0.1,
      }}
      className="info"
    >
      <div className="info-quote">
        <p>What we serve</p>
        <h1>Your Favourite Food </h1>
        <h1>Delivery Partner</h1>
      </div>

      <div className="step">
        <div className="row">
          <img className="img1" src={pic1} alt="" />
          <h1>Easy to order</h1>

          <div className="sub">
            <p>You only need a few steps in</p>

            <p>ordering food.</p>
          </div>
        </div>

        <div className="row">
          <img className="img2" src={pic2} alt="" />
          <h1>Fastest Delivery</h1>
          <div className="sub">
            <p>Delivery that is always ontime</p>
            <p> even faster.</p>
          </div>
        </div>

        <div className="row">
          <img className="img3" src={pic3} alt="" />
          <h1>Best Quality</h1>
          <div className="sub">
            <p>Not only fast for us quality is </p>
            <p> also number one.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Info;
