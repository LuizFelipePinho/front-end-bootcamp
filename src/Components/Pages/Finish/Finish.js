import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./../Login/Login.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function Teste() {
  return (
    <>
      <Container>
        <ProgressBar animated now={100} />
        <Row className="mt-6">
          <Col
            lg={7}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg">
            <Form className="rounded p-4 p-sm-3">
              <h3> Payment </h3>
              <div class="d-block my-3">
                <div class="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    class="form-check-input"
                    verified
                    obligatory
                  />
                  <label class="form-check-label" for="credit">
                    {" "}
                    Credit card{" "}
                  </label>
                </div>
                <div class="form-check">
                  <input
                    id=" debit "
                    name="paymentMethod"
                    type="radio"
                    class="form-check-input"
                    obligatory
                  />
                  <label class="form-check-label" for="debit">
                    {" "}
                    Debit card{" "}
                  </label>
                </div>
                <div class="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    class="form-check-input"
                    obligatory
                  />
                  <label class="form-check-label" for="paypal">
                    {" "}
                    Paypal{" "}
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="cc-name" class="form-label">
                    {" "}
                    Name{" "}
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-name"
                    placeholder=""
                    obligatory
                  />
                  <small class="text-muted"> Name exibido no cartão </small>
                  <div class="invalid-feedback">
                    Name in the card is required
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number" class="form-label">
                    {" "}
                    Card Number{" "}
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-number"
                    placeholder=""
                    obligatory
                  />
                  <div class="invalid-feedback">
                    Credit card's number is required
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration" class="form-label">
                    {" "}
                    Expiration{" "}
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-expiration"
                    placeholder=""
                    obligatory
                  />
                  <div class="invalid-feedback">Expiration date required</div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration" class="form-label">
                    {" "}
                    CVV{" "}
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-cvv"
                    placeholder=""
                    obligatory
                  />
                  <div class="invalid-feedback">Required security code</div>
                </div>
              </div>
              <hr class="mb-4" />
              <button class="btn btn-dark px-4 rounded-pill" type="button">
                {" "}
                Make request{" "}
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
