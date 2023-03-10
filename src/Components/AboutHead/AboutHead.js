import React from "react";
import "./AboutHead.css";
import AboutHeadImg from "../../Images/about-1.jpg";

const AboutHead = () => {
  return (
    <section className="about-head">
      <div className="about-head-img">
        <img src={AboutHeadImg} alt="" className="w-100"></img>
      </div>
      <div className="about-head-text">
        <h1>About Us</h1>
      </div>
    </section>
  );
};

export default AboutHead;
