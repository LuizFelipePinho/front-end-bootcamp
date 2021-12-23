import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import '../Login/Login.css';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function Teste()  {
  return (
    
    <>
        <Container>
          <ProgressBar animated now={100} />     
          <Row className="mt-6"><Col lg={7} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
          <Form className="rounded p-4 p-sm-3">
          <h3> Pagamento </h3>
          <div class = "d-block my-3" >
                        <div class = "form-check" >
                        <input id = "credit" name = "paymentMethod" type = "radio" class = "form-check-input" verificado obrigatório />
                        <label class = "form-check-label" for = "credit" > Cartão de crédito </label>
                        </div>
                        <div class = "form-check" >
                        <input id = " debit " name = "paymentMethod" type = "radio" class = "form-check-input" obrigatório />
                        <label class = "form-check-label" for = "debit" > Cartão de débito </label>
                        </div>
                        <div class = "form-check" >
                        <input id = "paypal" name = "paymentMethod" type = "radio" class = "form-check-input" obrigatório />
                        <label class = "form-check-label" for = "paypal" > Paypal </label>
                        </div>
                    </div>
                    <div class = "row" >
                        <div class = "col-md-6 mb-3" >
                        <label for = "cc-name" class = "form-label" > Nome </label>
                        <input type = "text" class = "form-control" id = "cc-name" placeholder = "" obrigatório />
                        <small class = "text-muted" > Nome exibido no cartão </small>
                        <div class = "invalid-feedback" >
                            Nome no cartão é obrigatório
                        </div>
                        </div>
                        <div class = "col-md-6 mb-3" >
                        <label for = "cc-number" class = "form-label" > Números do cartão </label>
                        <input type = "text" class = "form-control" id = "cc-number" placeholder = "" obrigatório />
                        <div class = "invalid-feedback" >
                            O número do cartão de crédito é obrigatório
                        </div>
                        </div>
                    </div>
                    <div class = "row" >
                        <div class = "col-md-3 mb-3" >
                        <label for = "cc-expiration" class = "form-label" > Expiração </label>
                        <input type = "text" class = "form-control" id = "cc-expiration" placeholder = "" obrigatório />
                        <div class = "invalid-feedback" >
                            Data de expiração necessária
                        </div>
                        </div>
                        <div class = "col-md-3 mb-3" >
                        <label for = "cc-expiration" class = "form-label" > CVV </label>
                        <input type = "text" class = "form-control" id = "cc-cvv" placeholder = "" obrigatório />
                        <div class = "invalid-feedback" >
                            Código de segurança necessário
                        </div>
                        </div>
                    </div>
                    <hr class = "mb-4" />
                    <button class = "btn btn-dark px-4 rounded-pill" type = "button" > Fazer pedido </button>
                    
               
                    </Form>
                    </Col>
                  
                </Row>                             
            </Container>
        </>
    
)
}