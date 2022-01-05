import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import { Container, Button, Row, Col } from "react-bootstrap";
import axios from "axios";

function ProductDetail() {
   const [product, setProduct] = useState([]);
    
   const getProductById = async () => {
    await axios.get(`/product/find/${ id}`)
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
          <img src={product.productPhotosHard} alt="imagem do produto" />
        </Col>
        <Col>
          <h1 class="display-3">{product.modelHard}</h1>
          <h1 class="display-6">Store: {product.vendedorId}</h1>
          <h1 class="display-6">$:{product.priceHard}</h1>
          <Button variant="danger" align="center">
            <FaRegHeart />
          </Button>{" "}
          <Link to="/cart">
            <Button variant="danger" align="center">
              Add To Cart
            </Button>{" "}
          </Link>
          <div class="container">
            <dl class="row">
              <dt class="col-sm-3">Description</dt>
              <dd class="col-sm-9">
                ASUS VivoBook R Series 15.6" FHD NanoEdge Touchscreen Notebook
              </dd>
              <dt class="col-sm-3">Detail</dt>
              <dd class="col-sm-9">
                <p>R564JA-UH51T</p>
                <p>8GB DDR4 2666MHz So-Dimm - 256GB PCIe SSD</p>
              </dd>
            </dl>
          </div>
        </Col>
      </Row>



    </Container>
  );
}

export default ProductDetail;