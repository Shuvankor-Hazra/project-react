import React from "react";
import AboutHeadImg from "../../Images/about-1.jpg";
import "./BlogHead.css";

const BlogHead = () => {
  return (
    <section className="blog-head">
      <div className="blog-head-img">
        <img src={AboutHeadImg} alt="" className="w-100"></img>
      </div>
      <div className="blog-head-text">
        <h1>Our Blog</h1>
      </div>
    </section>
  );
};

export default BlogHead;
