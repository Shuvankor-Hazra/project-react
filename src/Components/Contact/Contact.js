import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ContactForm from "../ContactForm/ContactForm";
import ContactText from "../ContactText/ContactText";
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
            subHeading="Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <ContactText />
          <ContactForm />
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
