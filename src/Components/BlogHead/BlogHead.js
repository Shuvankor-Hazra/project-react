import React from "react";
import BlogHeadImg from "../../Images/sub-head.jpg";
import "./BlogHead.css";

const BlogHead = () => {
  return (
    <section className="blog-head">
      <div className="blog-head-img">
        <img src={BlogHeadImg} alt="" className="w-100"></img>
      </div>
      <div className="blog-head-text">
        <h1>Our Blog</h1>
      </div>
    </section>
  );
};

export default BlogHead;
