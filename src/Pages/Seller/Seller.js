import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from 'react';
import "../Register/Register.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";


export default function Seller() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');    
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [cpf, setCPF] = useState('');
    const [region, setRegion] = useState('');


    const handleSubmit = event => {
      event.preventDefault();

      const seller = {
        name: name,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
        cpf: cpf,
        region: region,
      }

      axios.post('vendedor/register', seller)
      .then(response => console.log(response))

    }
  return (
    <>
      <Container>
        <Row className="mt-6">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg">
            <Form className="rounded p-4 p-sm-3" onSubmit={handleSubmit}>
              <h3> Register Account to sell</h3>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Type your Name" 
                onChange={event => setName(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Type your Email" 
                onChange={event => setEmail(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password" placeholder="Type your Password"
                  onChange={event => setPassword(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" 
                onChange={event => setPasswordConfirmation(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>CPF</Form.Label>
                <Form.Control type="text" placeholder="Type your CPF" 
                onChange={event => setCPF(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Region</Form.Label>
                <Form.Control type="text" placeholder="Type your Region" 
                onChange={event => setRegion(event.target.value)}
                />
              </Form.Group>
              <p className="forgot-password text-right">
                Already have a login? <a href="/Login">Login!</a>
              </p>

              <button class="btn btn-dark px-4 rounded-pill" type="submit">
                {" "}
                Register
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
