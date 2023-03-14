import React from "react";
import Col from "react-bootstrap/esm/Col";
import Button from "../Button/Button";
import Contact from "../../Images/contact.jpg";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <>
      <Col lg={6}>
        <div className="contact-left contact-hight">
          <div className="contact-image">
            <img src={Contact} alt="" className="w-100"></img>
          </div>
          <div className="contact-text">
            <h2>
              Quailty Consulting <span>Services Provider</span> For Your
              Business, We Are <span>Always Ready</span> For Your Solution
            </h2>
            <p>
              Improve efficiency, provide a better customer experience with
              modern technolo services available around the world. Our skilled
              staff, combined with Improve efficiency, provide a better customer
              experience with modern technolo services available around the
              world.
            </p>
          </div>
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
          <Button btnName="Submit Now" className="btn-link"></Button>
        </div>
      </Col>
    </>
  );
};

export default ContactForm;
