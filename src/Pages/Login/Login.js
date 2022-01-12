import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./../Login/Login.css";
import {  Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import authLogin from "../../api/authLogin";

export default function Login() {

  const [ email, setEmail ] = useState("")   
  const [ password, setPassword ] = useState("")
  const [ user, setUser] = useState("");
  const navigate = useNavigate();


  const clearInput = () => {
    setEmail("")
    setPassword("")
  }

  const getDada = (event) => {
    event.preventDefault();
    
    const data = {
      email: email,
      password: password
    }
    
    authLogin.authenticate(data)
    .then( (res) => {
      setUser(res.data)
    })
    .catch( (err) => {
      alert('Incorrect username or password')
    })
   
    clearInput()

  }


  useEffect( () => {
    if(user) {
      authLogin.saveDataUser(user)
      // navigate('/profile')

    }
  }, [navigate, user])
  


  return (
    <>
      <Container>
        <Row className="mt-6">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg">
            <Form onSubmit={getDada}>
              <h3> Login</h3>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Type your e-mail" value={email} onChange={ event => setEmail(event.target.value)}/>
              </Form.Group>
              <p></p>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Type your password"
                  value={password}
                  onChange={ event => setPassword(event.target.value)}
                />
              </Form.Group>
              <p></p>
              <p></p>
              <button class="btn btn-dark px-4 rounded-pill" type="submit">
                Login
              </button>
              <p></p>

              <p className="forgot-password text-right">
                Don't have a login yet? <a href="/Register">I want to sell!</a>
              </p>
              <p className="forgot-password text-right">
                Don't have a login yet? <a href="/Register">Register!</a>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
