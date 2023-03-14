import React from "react";
import "./AboutBody.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import AboutImg1 from "../../Images/about-1.jpg";
import AboutImg2 from "../../Images/about-2.jpg";

const AboutBody = () => {
  return (
    <section className="about-area">
      <Container>
        <Row>
          <div className="about-div">
            <Col lg={6}>
              <div className="about-image about-height">
                <img src={AboutImg1} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-text about-height">
                <h2>Our Skilled Team help you Grow Your Business.</h2>
                <p>
                  Acquiring new clients is one of the biggest challenges many
                  consultants face. You need to convince them that you are the
                  right person to fix their problems. But I don’t need to tell
                  you this, you’ve probably experienced it first-hand.
                </p>
                <p>
                  So let’s talk about how you can design a consulting proposal
                  (also known as a business proposal) that turns leads into
                  clients.A consulting proposal acts as a sales pitch that you
                  send to a potential client. In your consulting proposal, you
                  typically include.
                </p>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
      <Container>
        <Row>
          <div className="about-div">
            <Col lg={6} xs={{ order: "last" }}>
              <div className="about-image about-height">
                <img src={AboutImg2} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-text about-height">
                <h2>How to create a mission statement for consulting.</h2>
                <p>
                  A consulting proposal acts as a sales pitch that you send to a
                  potential client. In your consulting proposal, you typically
                  include.So let’s talk about how you can design a consulting
                  proposal (also known as a business proposal) that turns leads
                  into clients.
                </p>
                <p>
                  Acquiring new clients is one of the biggest challenges many
                  consultants face. You need to convince them that you are the
                  right person to fix their problems. But I don’t need to tell
                  you this, you’ve probably experienced it first-hand.
                </p>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default AboutBody;
