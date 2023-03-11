import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ContactForm from "../ContactForm/ContactForm";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-area">
      <Container>
        <Row className="justify-content-center align-items-center">
          <SectionHeading
            heading="Contact About"
            span="Your Project"
            subHeading="If you have a project in mind, we would love to hear from
            you! Contact us today to discuss your requirements and learn more about how we can help you achieve your goals. Our team is responsive, professional, and committed to delivering outstanding customer service."
          />
          <ContactForm />
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
