import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SectionHeading from "../SectionHeading/SectionHeading";
import SinglePricing from "../SinglePricing/SinglePricing";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing-area">
      <Container>
        <Row>
          <SectionHeading
            heading="Our best"
            span="Pricing Plan"
            subHeading="Our pricing plans are designed to offer maximum value and
            flexibility to our clients, with transparent pricing and no hidden fees. We offer competitive rates without compromising on quality, and our packages can be customized to suit your specific requirements."
          />
          <SinglePricing />
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
