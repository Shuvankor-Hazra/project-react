import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import BlogHead from "../../Components/BlogHead/BlogHead";
import BlogImg1 from "../../Images/blog-2.jpg";
import BlogImg2 from "../../Images/blog-4.jpg";
import "./Blog.css";

const Blog = () => {
  return (
    <section className="blog-area">
      <BlogHead />
      <div className="blog-body">
        <Container>
          <Row>
            <Col md={6}>
              <div className="single-blog">
                <div className="Blog-image">
                  <img src={BlogImg1} alt="" className="w-100"></img>
                </div>
                <div className="Blog-text">
                  <h2>Blog-1</h2>
                  <p>
                    Industry trends are an extremely valuable management
                    consulting topic. You need to show potential clients your
                    industry knowledge is up-to-date and you have what it takes
                    to turn their business around, improve their leadership
                    skills, or accomplish whatever goal you’ve set out.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="single-blog">
                <div className="Blog-image">
                  <img src={BlogImg2} alt="" className="w-100"></img>
                </div>
                <div className="Blog-text">
                  <h2>Blog-2</h2>
                  <p>
                    No matter what industry you consult for, tech or finance or
                    entertainment, proving your knowledge is essential. Here’s
                    an example from industry leader, Deloitte, talking about the
                    future of advertising in an article designed to lure
                    potential advertising clients in need of consulting
                    services.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="single-blog">
                <div className="Blog-image">
                  <img src={BlogImg2} alt="" className="w-100"></img>
                </div>
                <div className="Blog-text">
                  <h2>Blog-3</h2>
                  <p>
                    Industry trends are an extremely valuable management
                    consulting topic. You need to show potential clients your
                    industry knowledge is up-to-date and you have what it takes
                    to turn their business around, improve their leadership
                    skills, or accomplish whatever goal you’ve set out.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="single-blog">
                <div className="Blog-image">
                  <img src={BlogImg1} alt="" className="w-100"></img>
                </div>
                <div className="Blog-text">
                  <h2>Blog-4</h2>
                  <p>
                    No matter what industry you consult for, tech or finance or
                    entertainment, proving your knowledge is essential. Here’s
                    an example from industry leader, Deloitte, talking about the
                    future of advertising in an article designed to lure
                    potential advertising clients in need of consulting
                    services.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Blog;
