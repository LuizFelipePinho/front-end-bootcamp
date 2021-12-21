import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import '../Register/Register.css';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

export default function AddProduto()  {
  return (
    
  <>
      <Container>                
        <Row className="mt-6">
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
            <Form className="rounded p-4 p-sm-3">
            <h3> Cadastrar de Produto</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tipo de Produto:</Form.Label>
              <Form.Control type="email" placeholder="Exemplo: Placa de Vídeo" />           
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Modelo:</Form.Label>
              <Form.Control type="email" placeholder="Exemplo: Galax" />           
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Preço:</Form.Label>
              <Form.Control type="password" placeholder="Digite o valor do produto" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Anos de uso:</Form.Label>
              <Form.Control type="password" placeholder="Quantos anos o produte tem." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Link da imagem:</Form.Label>
              <Form.Control type="password" placeholder="Cole o link da imagem." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Link do vídeo:</Form.Label>
              <Form.Control type="password" placeholder="Suba um vídeo do produto" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Número de donos:</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
            
            <button class = "btn btn-dark px-4 rounded-pill" type = "button" >Cadastrar Produto</button>

          </Form>
        </Col>
        </Row>                
      </Container>
  </>    
)
}

