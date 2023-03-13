import React from "react";
import AboutHeadImg from "../../Images/sub-head.jpg";
import "./AboutHead.css";

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
