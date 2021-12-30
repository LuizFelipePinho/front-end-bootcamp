import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./../Login/Login.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Login() {
  return (
    <>
      <Container>
        <Row className="mt-6">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg">
            <Form>
              <h3> Login</h3>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Type your e-mail" />
              </Form.Group>
              <p></p>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Type your password"
                />
              </Form.Group>
              <p></p>
              <p></p>
              <button class="btn btn-dark px-4 rounded-pill" type="button">
                Login
              </button>
              <p></p>

              <p className="forgot-password text-right">
                Don't have a login yet? <a href="/Register">I want to sell!</a>
              </p>
              <p className="forgot-password text-right">
                Don't have a login yet? <a href="/Register">I want to buy!</a>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
