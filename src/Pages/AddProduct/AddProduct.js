import 'bootstrap/dist/css/bootstrap.min.css';
import {  Col, Container, Form, Row } from "react-bootstrap";
import React from "react";
import '../Register/Register.css';
import { useState } from 'react';
import axios from 'axios';
import authLogin from '../../api/authLogin';

export default function AddProduct(props)  {

  const [typeHard, setTypeHard] = useState('');
  const [modelHard, setModelHard] = useState('');
  const [priceHard, setPriceHard] = useState('');
  const [yearuseHard, setYearUseHard] = useState('');
  const [productPhotosHard, setProductPhotosHard] = useState('');
  const [videoHard, setVideoHard] = useState('');
  const [usedHard, setUsedHard] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const product = {
      typeHard: typeHard,
      modelHard: modelHard,
      priceHard: priceHard,
      yearuseHard: yearuseHard,
      productPhotosHard: productPhotosHard,
      videoHard:videoHard,
      usedHard: usedHard,
    }

  //   const [mounted, setMounted] = useState(false);

  //   useEffect( () => {
  //     setMounted(true)

  //     if(localStorage.token){
  //       const token = localStorage.dataLogin;
  //       const config = {
  //     headers: { Authorization: `Bearer ${token}` }
  //     }
      
  //     axios.post('product/create', product,
  //     config)
  //     .then(reponse => console.log(reponse))
  //     }

  //   }, [mounted]);
  // }
    // const dataUser = authLogin.getDataUser();
    // const token = localStorage.dataLogin['token'];
    // console.log(token);
    // const token = localStorage.setItem('dataLogin', JSON.stringify);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvYW92aXRvcmdvbWVzOTVAZ21haWwuY29tIiwiaWF0IjoxNjQxNDc0MDcwLCJleHAiOjE2NDE0Nzc2NzB9.tb2ss-BbMRKriVO-qHawYHeluGL3GQPPsGTLALeHDDc'
    const config = {
      headers: {
        Authorization: `Bearer ${token}` }
    }  
      
    console.log(product)
    console.log(config)
    
    const res = await axios.post('product/create', product,
    config)
    .then(reponse => console.log(reponse))
    console.log(res)
    
    

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
        
        <Form className="rounded p-2 p-sm-3" onSubmit={handleSubmit}>
          <h3> Product Register</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail" required>
            <Form.Label>Product Type:</Form.Label>
            <Form.Control type="text" placeholder="Ex: Video Card " 
            onChange={event => setTypeHard(event.target.value)}
            />           
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Model:</Form.Label>
            <Form.Control type="text" placeholder="Ex: Galax" 
            onChange={event => setModelHard(event.target.value)}
            />           
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Product's price" 
            onChange={event => setPriceHard(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Years of Use:</Form.Label>
            <Form.Control type="text" placeholder="" 
            onChange={event => setYearUseHard(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image Link:</Form.Label>
            <Form.Control type="text" placeholder="Upload image here" 
            onChange={event => setProductPhotosHard(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Video's Link:</Form.Label>
            <Form.Control type="text" placeholder="Upload link here" 
            onChange={event => setVideoHard(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>How many persons owned this product?</Form.Label>
            <Form.Control type="text" placeholder="" 
            onChange={event => setUsedHard(event.target.value)}
            />
          </Form.Group>
          
          <button class = "btn btn-dark px-4 rounded-pill" type = "submit" >Register Product</button>
        </Form>        
        </Col>
      </Row>
    </Container>
  </>
)
}

