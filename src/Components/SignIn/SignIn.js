import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { NavLink } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const messageDiv = document.getElementById("message-div");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (error) {
    messageDiv.innerHTML = "Please fill in all boxes";
  }
  if (loading) {
    messageDiv.innerHTML = "Loading...";
  }
  if (user) {
    messageDiv.innerHTML = "Sign In Successfully Completed";
  }

  return (
    <section className="reg-area py-5">
      <Container>
        <h2 className="text-center py-5">Sign In Here</h2>
        <Row>
          <Col lg={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div id="message-div"></div>
            <p>
              New User?
              <NavLink to="/reg" className="reg-link">
                Registration Now!
              </NavLink>
            </p>
            <Button
              onClick={() => signInWithEmailAndPassword(email, password)}
              variant="primary"
              type="submit"
              className="w-100"
            >
              Sign In
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignIn;
