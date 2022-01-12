import './atProduct.css'
import { useParams } from "react-router-dom";
import {  Col, Container, Form, Row } from "react-bootstrap";
import { useState, useEffect } from 'react';
import authLogin from '../../api/authLogin';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const AtProduct = (props) => {

    const [dataRecover, setDataRecover] = useState(' ')
    const [ getProduct, setGetProduct ] = useState(false) 
    const navigate = useNavigate();


  const [typeHard, setTypeHard] = useState();
  const [modelHard, setModelHard] = useState();
  const [priceHard, setPriceHard] = useState();
  const [yearuseHard, setYearUseHard] = useState();
  const [productPhotosHard, setProductPhotosHard] = useState();
  const [videoHard, setVideoHard] = useState();
  const [usedHard, setUsedHard] = useState();



    const { id } = useParams();

    // procurar esse produto por id e armazenar no estado
    // substituir o input por essas variaves de estado


    const getProductId = async (id) =>{
        await axios.get(`product/find/${id}`)
        .then((response) => {
            setDataRecover(response.data)
            setGetProduct(true)
            
            setTypeHard(response.data.typeHard)
            setModelHard(response.data.modelHard)
            setPriceHard(response.data.priceHard)
            setYearUseHard(response.data.yearuseHard)
            setProductPhotosHard(response.data.productPhotosHard)
            setVideoHard(response.data.videoHard)
            setUsedHard(response.data.usedHard)

        }).catch( (err) => console.log(err))
    }


        
    useEffect(() => {
        if(!getProduct) {
            getProductId(id)

        }
    }, [])

   

  const handleSubmit = async (event) => {
    event.preventDefault();

    const product = {
      typeHard: typeHard,
      modelHard: modelHard,
      priceHard: priceHard,
      yearuseHard: parseInt(yearuseHard),
      productPhotosHard: productPhotosHard,
      videoHard:videoHard,
      usedHard: usedHard,
    }
   
    const dataUser = authLogin.getDataUser();

    const token = dataUser.token;

    const config = {
      headers: {
        Authorization: `Bearer ${token}` }
    }  
      
    
    const res = await axios.put(`product/update/${id}`, product, config)
    .then(reponse => navigate('/profile'))
    .catch( (err) => alert(err))
}

    return(
        <>
        <Container>
          <Row className="mt-6">
            <Col
              lg={5}
              md={6}
              sm={12}
              className="p-5 m-auto shadow-sm rounded-lg">
          
          <Form className="rounded p-2 p-sm-3" 
          onSubmit={handleSubmit}
          >
            <h3> Product Register</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail" required>
              <Form.Label>Product Type:</Form.Label>
              <Form.Control value={typeHard} type="text" placeholder="Ex: Video Card"
               
              onChange={event => setTypeHard(event.target.value)}
              />           
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Model:</Form.Label>
              <Form.Control type="text" placeholder="Ex: Galax"
              value={modelHard} 

              onChange={event => setModelHard(event.target.value)}
              />           
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Product's price"
              value={priceHard}
              onChange={event => setPriceHard(event.target.value)}
              />
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Years of Use:</Form.Label>
              <Form.Control type="text" placeholder="" 
              value={yearuseHard}
              onChange={event => setYearUseHard(event.target.value)}
              />
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image Link:</Form.Label>
              <Form.Control type="text" placeholder="Upload image here"
              value={productPhotosHard} 
              onChange={event => setProductPhotosHard(event.target.value)}
              />
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Video's Link:</Form.Label>
              <Form.Control type="text" placeholder="Upload link here" 
              value={videoHard}
              onChange={event => setVideoHard(event.target.value)}
              />
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="">
              <Form.Label>How many persons owned this product?</Form.Label>
              <Form.Control type="text" placeholder="" 
              value={usedHard}
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

export default AtProduct;

