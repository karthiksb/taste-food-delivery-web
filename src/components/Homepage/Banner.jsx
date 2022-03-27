import React from "react";
import "./banner.css";
import bann from "./banner.png";
import { motion } from "framer-motion";

function Banner() {
  return (
    <div className="banner">
      <motion.div
        initial={{ x: "-200px" }}
        animate={{ x: "0" }}
        className="left-banner"
      >
        <div className="quote">
          <h1>Be The Fastest in delivering</h1>
          <h1>
            Your <span>Food</span>
          </h1>

          <p>
            Our job is to filling your tummy with delicious food and with fast
            and free delivery
          </p>

          <button>Get started</button>
        </div>
      </motion.div>
      <div className="right-banner">
        <img src={bann} alt="" />
      </div>
    </div>
  );
}

export default Banner;
