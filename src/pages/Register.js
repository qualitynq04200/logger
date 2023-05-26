import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="justify-content-center">
        <Col>
          <div
            className="bg-light p-4 text-center"
            style={{ borderRadius: "5px" }}
          >
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  style={{ minWidth: "300px" }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  style={{ minWidth: "300px" }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  style={{ minWidth: "300px" }}
                />
              </Form.Group>

              <Button className="mt-3" variant="primary" type="submit">
                Register
              </Button>

            </Form>

            <p className="mt-3">Existing user? <Link to="/login">Log in here</Link></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
