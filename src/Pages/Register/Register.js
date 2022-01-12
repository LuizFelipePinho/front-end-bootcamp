import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from 'react';
import "../Register/Register.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";

import { useNavigate } from "react-router-dom";





export default function Register() {
  const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState(''); 
    const [regiao, setRegiao] = useState('');  
    const [cpf, setCPF] = useState(''); 
    const [password, setPassword] = useState('');
    const [passwordconfirmation, setPasswordConfirmation] = useState('');
    
    const clearInput = () => {
      setNome('')
      setEmail('')
      setRegiao('')
      setCPF('')
      setPassword('')
      setPasswordConfirmation('')
    }


    const handleSubmit = event => {
      event.preventDefault();

      const user = {
        name: nome,
        email: email,
        password: password,
        passwordConfirmation: passwordconfirmation, 
        cpf: cpf,
        region: regiao,
              
      }

      axios.post('https://back-end-brech-tech.herokuapp.com/users/create', user)
      .then((response) => {
        console.log(response)
        clearInput()
        alert("user created successfully")
        navigate('/login')

      })
      .catch( (err) => console.log(err))

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
              <h3> Register Account to buy</h3>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Type your Name"
                value={nome} 
                onChange={event => setNome(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Type your Email" 
                value={email} 
                onChange={event => setEmail(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Region</Form.Label>
                <Form.Control type="text" placeholder="Type your Region" 
                value={regiao} 
                onChange={event => setRegiao(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>CPF</Form.Label>
                <Form.Control type="text" placeholder="Type your CPF" 
                value={cpf} 
                onChange={event => setCPF(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password" placeholder="Type your Password"
                  value={password} 
                  onChange={event => setPassword(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" 
                value={passwordconfirmation} 
                onChange={event => setPasswordConfirmation(event.target.value)}
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
