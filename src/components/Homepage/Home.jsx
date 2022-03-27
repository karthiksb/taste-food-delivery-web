import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import Footer from "./Footer";
import Review from "./Review";
import "./home.css";
export default function Home() {
  return (
    <div className="home">
      <Banner />
      <Info />
      <Review />
      <Footer />
    </div>
  );
}
