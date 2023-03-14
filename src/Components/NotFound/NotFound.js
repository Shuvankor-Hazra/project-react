import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="not-found-area">
      <Container>
        <div className="not-found-text text-center">
          <h2>404 Error-Not Found</h2>
          <h3>Sorry, this page doesn't exist.</h3>
          <a href="/" class="router-link-active">
            Bring me Home!
          </a>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
