import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "../Button/Button";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <>
      <Col md={6} className="contact-form my-4">
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <h3>Needs Help? Let’s Get in Touch</h3>
            <input
              type="text"
              id="contactName"
              placeholder="Full Name"
              className="form-control mb-3"
            />
            <input
              type="email"
              id="contactEmail"
              placeholder="Email Address"
              className="form-control mb-3"
            />
            <input
              type="text"
              id="contactSubject"
              placeholder="Your Subject"
              className="form-control mb-3"
            ></input>
            <textarea
              id="contactMessage"
              rows="5"
              placeholder="Message"
              className="form-control mb-3"
            ></textarea>
            <div id="error-div" className="text-warning"></div>
            <Button
              btnName="Submit Now"
              className="ms-auto"
              id="submitButton"
            ></Button>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default ContactForm;
