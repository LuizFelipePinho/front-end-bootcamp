import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaRegHeart, FaRegEye , FaShoppingCart} from "react-icons/fa";
import "../ProductsCard.css";
import styled from "styled-components";

const Container=styled.div`
  height:100%;
  display:flex;
  flex-wrap: wrap;

`;
const Card= styled.div`
  width: 19rem;
  height:29rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 0.4rem;
  margin: 1rem
`;
const CardCover= styled.div`
  max-width: 100%;
  height: 13.5rem;
  border: 0 0 02rem 0;
  display: flex ;
  justify-content: center;
  aling-item: center;
`;
const Img= styled.img`
  width:13.5rem;
  height: 12rem;
`;
const CardContent= styled.div`
  flex: 1;

`;
const NameProduct = styled.h3`
  text-align: center;
  font-family: arial;
  font-size: 1.4em;
`;
const ItemText = styled.p`
  text-align: justify;
  padding-left: 0.8rem; 
  font-family: arial;
  font-size: 1em;
`;
const Price= styled.h3`
  text-align: left;
  padding-left: 0.8rem; 
  font-family: arial;
  font-size: 1em;
`;
const Btn= styled.button`
  width:2.2rem;
  height:2.2rem;
  margin:0.9rem;
  background-color: #D10024;
  border: none;
  border-radius:50%;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const ContainerBtn = styled.div`
  display: flex;
  justify-content:center;
  background-color: #D10024;
  margin-top: 1.2rem;
  border-radius 0 0 0.4rem 0.4rem ;

`

export default function Processing(){

    const [category, setCategory] = useState([]);

    const getData = async () => {
      await axios.get('/categorias/storage')
      .then(response => {
          setCategory(response.data)
      })
  
    }
    useEffect( () => {
      getData()
    },[])
    return(
        <Container>
        
           { category.map((item, index) => (
                        <Card key={index}>
                            {item.products.map((p, i) => (
                                <React.Fragment key={i}>
                                  <CardCover>
                                      <Img  src={p.productPhotosHard} />
                                  </CardCover>
                                  <CardContent>
                                    <NameProduct>
                                        {p.modelHard}
                                    </NameProduct>
                                    <ItemText>
                                    {p.typeHard}
                                    </ItemText>
                                    <ItemText>
                                      Vendido por: 
                                      Vendedor
                                    </ItemText>
                                    <Price>
                                      {p.priceHard}
                                    </Price>
                                    <ContainerBtn>
                                    <Btn >
                                      <FaRegHeart />
                                    </Btn>{" "}
                                    <Link to={`/detail/${p.id}`}>
                                    <Btn>
                                      <FaRegEye />                    
                                    </Btn>{" "}
                                    </Link>
                                    <Link to="/cart">
                                      <Btn >
                                        <FaShoppingCart/>
                                      </Btn>{" "}
                                    </Link>
                                    </ContainerBtn>
                                    </CardContent>                     
                                </React.Fragment>
                            ))}
                            
                        </Card>
                    ))} 
              
      </Container>
    );  
    
}