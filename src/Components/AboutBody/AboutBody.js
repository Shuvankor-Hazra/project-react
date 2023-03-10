import React from "react";
import "./AboutBody.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import AboutImg from "../../Images/about-area.jpg";

const AboutBody = () => {
  return (
    <section className="about-area">
      <Container>
        <Row>
          <Col md={6}>
            <div className="about-text">
              <h2>Our Skilled Team help you Grow Your Business.</h2>
              <p>
                Acquiring new clients is one of the biggest challenges many
                consultants face. You need to convince them that you are the
                right person to fix their problems. But I don’t need to tell you
                this, you’ve probably experienced it first-hand.{" "}
              </p>{" "}
              <p>
                So let’s talk about how you can design a consulting proposal
                (also known as a business proposal) that turns leads into
                clients{" "}
              </p>
              <p>
                A consulting proposal acts as a sales pitch that you send to a
                potential client. In your consulting proposal, you typically
                include:
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="about-image">
              <img src={AboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutBody;
