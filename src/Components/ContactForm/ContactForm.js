import React from "react";
import Col from "react-bootstrap/esm/Col";
import Button from "../Button/Button";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <>
      <Col lg={6}>
        <div className="contact-text contact-hight">
          <h2>
            Quailty Consulting <span>Services Provider</span> For Your Business,
            We Are <span>Always Ready</span> For Your Solution
          </h2>
          <p>
            Improve efficiency, provide a better customer experience with modern
            technolo services available around the world. Our skilled staff,
            combined with Improve efficiency, provide a better customer
            experience with modern technolo services available around the world.
          </p>
        </div>
      </Col>
      <Col lg={6}>
        <div className="contact-form contact-hight">
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
          <Button btnName="Submit Now" id="submitButton"></Button>
        </div>
      </Col>
    </>
  );
};

export default ContactForm;
