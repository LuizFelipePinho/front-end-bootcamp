import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import '../Register/Register.css';
import { Form } from "react-bootstrap"

export default function Register()  {
  return (
    
    <div className="color-overlay d-flex justify-content-center align-items-center">
        
        <Form className="rounded p-4 p-sm-3">
          <h3> Cadastrar Conta</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="email" placeholder="Digite seu Nome" />           
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Digite seu Email" />           
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite sua senha" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirme sua senha</Form.Label>
            <Form.Control type="password" placeholder="Confirme sua senha" />
          </Form.Group>
          <p className="forgot-password text-right">
                        Já possui login? <a href="/Login">login!</a>
            </p>
          <button class = "btn btn-dark px-4 rounded-pill" type = "button" > Login</button>
        </Form>
      </div>  
    
)
}
