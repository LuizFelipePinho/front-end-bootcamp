import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaRegHeart, FaRegEye , FaShoppingCart} from "react-icons/fa";
import { Container, Card, CardCover, CardContent, ItemText, Img, NameProduct,Price, ContainerBtn, Btn } from './Style/CategoriesStyle'


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