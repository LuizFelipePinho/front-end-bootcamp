import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../Register/Register.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Register() {
  return (
    <>
      <Container>
        <Row className="mt-6">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg">
            <Form className="rounded p-4 p-sm-3">
              <h3> Register Account</h3>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="Type your Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Type your Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Type your Password"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>

              <p className="forgot-password text-right">
                Already have a login? <a href="/Login">Login!</a>
              </p>

              <button class="btn btn-dark px-4 rounded-pill" type="button">
                {" "}
                Login
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
