import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Container, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";

const Img = styled.img`
  width:17rem;
  height: 14rem;
 
`;
const Model = styled.h1`
  font-size: 1.5em;
`;
const H3 = styled.h3`
  font-size: 0.9em;
`;
const Text = styled.p`
  font-size: 0.9em;
`;
const Description = styled.div`
  display:flex;
  flex-direction:column;
  width:25rem
  height:auto;
`;

function ProductDetail() {
   const [product, setProduct] = useState([]);
    
   const getProductById = async () => {
    await axios.get(`/product/find/${id}`)
    .then(response => {
        setProduct(response.data)
        
    })

   }

   const { id } = useParams();

   useEffect(() => {
     getProductById()
   },[])

   
  return (
    <Container>
      <Row>
        <Col>
          <Img src={product.productPhotosHard} alt="imagem do produto" />
        </Col>
        <Col>
          <Model >{product.modelHard}</Model>
          {/* <H3>Store: {product.Vendedor.name}</H3>  */}
          
           <Description>
            <b>Description : </b>
            <Text>{product.description}</Text>
            <b>hardware type :</b>
            <Text>{product.typeHard}</Text>
            <b>usage time :</b>
            <Text>{product.yearuseHard}</Text>
            <b>Product :</b>
            <Text>{product.usedHard}</Text>
          </Description>
          <H3>$:{product.priceHard}</H3>
          <Button variant="danger" align="center">
            <FaRegHeart />
          </Button>{" "}
          <Link to={`/cart/}`}>
            <Button variant="danger" align="center">
              <FaShoppingCart/>
            </Button>{" "}
          </Link>
          
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;