import React from "react";
import "./search.css";
import coupon1 from "./coupons/coupon1.png";
import coupon2 from "./coupons/coupon2.png";
import coupon3 from "./coupons/coupon3.png";
import coupon4 from "./coupons/coupon4.png";

import food from "./food/food.png";
import food2 from "./food/food2.png";
import food3 from "./food/food3.png";

import { motion } from "framer-motion";

export default function Search() {
  return (
    <div className="searchfood">
      <div className="coupons">
        <motion.img
          initial={{ x: -30 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            ease: "easeOut",
            duration: 0.4,
          }}
          src={coupon1}
          alt=""
        />
        <motion.img
          initial={{ x: -30 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            ease: "easeOut",
            duration: 0.4,
          }}
          src={coupon2}
          alt=""
        />
        <motion.img
          initial={{ x: 30 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            ease: "easeOut",
            duration: 0.4,
          }}
          src={coupon3}
          alt=""
        />
        <motion.img
          initial={{ x: 30 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            ease: "easeOut",
            duration: 0.4,
          }}
          src={coupon4}
          alt=""
        />
      </div>

      <div className="searchdatainfo">
        <motion.h1 initial={{ x: "-100px" }} animate={{ x: "0px" }}>
          360 restuarants
        </motion.h1>

        <ul>
          <li>Relevance</li>
          <li>Delivery time</li>
          <li>Rating</li>
          <li>Cost:Low to High</li>
        </ul>
      </div>

      <div className="displaycontent">
        <motion.div
          initial={{ y: "200px" }}
          animate={{ y: "0" }}
          className="foodcard"
        >
          <div className="setpadding">
            <div className="foodimage">
              <img src={food} alt="" />
            </div>

            <div className="fooddesc">
              <h3>The Grill</h3>
              <p>Arabian, Chinese, North Indian, South Indian</p>
            </div>
            <div className="foodrating">
              <p>35 min</p>
              <p>35 min</p>
              <p>₹300 FOR ONE</p>
            </div>

            <div className="discount">
              <p>10% off | use PARTY</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: "200px" }}
          animate={{ y: "0" }}
          className="foodcard"
        >
          <div className="setpadding">
            <div className="foodimage">
              <img src={food2} alt="" />
            </div>

            <div className="fooddesc">
              <h3>The Grill</h3>
              <p>Arabian, Chinese, North Indian, South Indian</p>
            </div>
            <div className="foodrating">
              <p>35 min</p>
              <p>35 min</p>
              <p>₹300 FOR ONE</p>
            </div>

            <div className="discount">
              <p>10% off | use PARTY</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: "200px" }}
          animate={{ y: "0" }}
          className="foodcard"
        >
          <div className="setpadding">
            <div className="foodimage">
              <img src={food3} alt="" />
            </div>

            <div className="fooddesc">
              <h3>The Grill</h3>
              <p>Arabian, Chinese, North Indian, South Indian</p>
            </div>
            <div className="foodrating">
              <p>35 min</p>
              <p>35 min</p>
              <p>₹300 FOR ONE</p>
            </div>

            <div className="discount">
              <p>10% off | use PARTY</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: "200px" }}
          animate={{ y: "0" }}
          className="foodcard"
        >
          <div className="setpadding">
            <div className="foodimage">
              <img src={food} alt="" />
            </div>

            <div className="fooddesc">
              <h3>The Grill</h3>
              <p>Arabian, Chinese, North Indian, South Indian</p>
            </div>
            <div className="foodrating">
              <p>35 min</p>
              <p>35 min</p>
              <p>₹300 FOR ONE</p>
            </div>

            <div className="discount">
              <p>10% off | use PARTY</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: "200px" }}
          animate={{ y: "0" }}
          className="foodcard"
        >
          <div className="setpadding">
            <div className="foodimage">
              <img src={food2} alt="" />
            </div>

            <div className="fooddesc">
              <h3>The Grill</h3>
              <p>Arabian, Chinese, North Indian, South Indian</p>
            </div>
            <div className="foodrating">
              <p>35 min</p>
              <p>35 min</p>
              <p>₹300 FOR ONE</p>
            </div>

            <div className="discount">
              <p>10% off | use PARTY</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: "200px" }}
          animate={{ y: "0" }}
          className="foodcard"
        >
          <div className="setpadding">
            <div className="foodimage">
              <img src={food3} alt="" />
            </div>

            <div className="fooddesc">
              <h3>The Grill</h3>
              <p>Arabian, Chinese, North Indian, South Indian</p>
            </div>
            <div className="foodrating">
              <p>35 min</p>
              <p>35 min</p>
              <p>₹300 FOR ONE</p>
            </div>

            <div className="discount">
              <p>10% off | use PARTY</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: "200px" }}
          animate={{ y: "0" }}
          className="foodcard"
        >
          <div className="setpadding">
            <div className="foodimage">
              <img src={food} alt="" />
            </div>

            <div className="fooddesc">
              <h3>The Grill</h3>
              <p>Arabian, Chinese, North Indian, South Indian</p>
            </div>
            <div className="foodrating">
              <p>35 min</p>
              <p>35 min</p>
              <p>₹300 FOR ONE</p>
            </div>

            <div className="discount">
              <p>10% off | use PARTY</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: "200px" }}
          animate={{ y: "0" }}
          className="foodcard"
        >
          <div className="setpadding">
            <div className="foodimage">
              <img src={food2} alt="" />
            </div>

            <div className="fooddesc">
              <h3>The Grill</h3>
              <p>Arabian, Chinese, North Indian, South Indian</p>
            </div>
            <div className="foodrating">
              <p>35 min</p>
              <p>35 min</p>
              <p>₹300 FOR ONE</p>
            </div>

            <div className="discount">
              <p>10% off | use PARTY</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
