import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Service from "../Service/Service";
import Row from "react-bootstrap/esm/Row";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Services.css";

const Servises = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="services-area">
      <Container>
        <SectionHeading
          heading="OUR BEST"
          span="SERVICES"
          subHeading="We offer a range of top-quality services tailored to meet the needs of our clients, including web development, digital marketing, content creation, and more. Our experienced team is dedicated to delivering exceptional results that exceed your expectations."
        />
        <Row>
          {services.map((item) => (
            <Service key={item.id} item={item}></Service>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Servises;
