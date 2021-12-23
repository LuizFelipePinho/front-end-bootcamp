import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import '../Register/Register.css';
import { Form } from "react-bootstrap"

export default function AddProduct()  {
  return (
    
    <div className="color-overlay d-flex justify-content-center align-items-center">
        
        <Form className="rounded p-2 p-sm-3">
          <h3> Product Register</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Type:</Form.Label>
            <Form.Control type="email" placeholder="Ex: Video Card " />           
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Model:</Form.Label>
            <Form.Control type="email" placeholder="Ex: Galax" />           
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control type="password" placeholder="Product's price" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Years of Use:</Form.Label>
            <Form.Control type="password" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image Link:</Form.Label>
            <Form.Control type="password" placeholder="Upload image here" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Video's Link:</Form.Label>
            <Form.Control type="password" placeholder="Upload link here" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>How many persons owned this product?</Form.Label>
            <Form.Control type="password" placeholder="" />
          </Form.Group>
          
          <button class = "btn btn-dark px-4 rounded-pill" type = "button" >Register Product</button>
        </Form>
      </div>  
    
)
}

