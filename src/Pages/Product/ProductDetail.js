import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;
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
      
      
      <Wrapper>
        <ImgContainer>
          <Image  src={product.productPhotosHard} alt="imagem do produto" />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.modelHard}</Title>
          <Desc>
            
             Marca	ELG <br/>
             Sistema operacional	Windows 7<br/>
             Fonte de alimentação	Não aplicável<br/>
             Número de chaves	107<br/>
          </Desc>
          <Price>{product.priceHard}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              
              <Amount>1</Amount>
              
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      
      
    </Container>
    // <Container>
    //   <Row>
    //     <Col>
    //       <img src={product.productPhotosHard} alt="imagem do produto" />
    //     </Col>
    //     <Col>
    //       <h1 class="display-3">{product.modelHard}</h1>
    //       <h1 class="display-6">Store: {product.vendedorId}</h1>
    //       <h1 class="display-6">$:{product.priceHard}</h1>
    //       <Button variant="danger" align="center">
    //         <FaRegHeart />
    //       </Button>{" "}
    //       <Link to="/cart">
    //         <Button variant="danger" align="center">
    //           Add To Cart
    //         </Button>{" "}
    //       </Link>
    //       <div class="container">
    //         <dl class="row">
    //           <dt class="col-sm-3">Description</dt>
    //           <dd class="col-sm-9">
    //             ASUS VivoBook R Series 15.6" FHD NanoEdge Touchscreen Notebook
    //           </dd>
    //           <dt class="col-sm-3">Detail</dt>
    //           <dd class="col-sm-9">
    //             <p>R564JA-UH51T</p>
    //             <p>8GB DDR4 2666MHz So-Dimm - 256GB PCIe SSD</p>
    //           </dd>
    //         </dl>
    //       </div>
    //     </Col>
    //   </Row>



    // </Container>
  );
}

export default ProductDetail;