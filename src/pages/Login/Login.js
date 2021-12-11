import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './../Login/Login.css';
import { Form } from "react-bootstrap"

export default function Login()  {
  return (
    
    <div className="color-overlay d-flex justify-content-center align-items-center">
        
        <Form className="rounded p-4 p-sm-3">
          <h3> Efetuar Login</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Digite seu email" />       
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite sua senha" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Lembrar" />
          </Form.Group>
          <button class = "btn btn-dark px-4 rounded-pill" type = "button" > Login</button>
        </Form>
      </div>  
    
)
}





