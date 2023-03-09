import React from "react";
import Col from "react-bootstrap/esm/Col";
// import Row from "react-bootstrap/esm/Row";
// import Button from "../Button/Button";
import "./ContactText.css";

const ContactText = () => {
  return (
    <Col md={6} className="contact-text pe-5">
      <h2>
        Quailty Consulting <span>Services Provider</span> For your Business, We
        Are <span>Always Ready</span> For Your Solution
      </h2>
      <p>
        Improve efficiency, provide a better customer experience with modern
        technolo services available around the world. Our skilled staff,
        combined with Improve efficiency, provide a better customer experience
        with modern technolo services available around the world.
      </p>
      {/* <Button
            btnName="More Details"
            className="ms-auto"
            id="submitButton"
          ></Button> */}
    </Col>
  );
};

export default ContactText;
