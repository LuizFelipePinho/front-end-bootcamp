import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import "../ProductsCard.css";


export default function Processing(){

    const [category, setCategory] = useState([]);

    const getData = async () => {
      await axios.get('/categorias/input')
      .then(response => {
          setCategory(response.data)
      })
  
    }
    useEffect( () => {
      getData()
    },[])
    return(
        <div>
        
           { category.map((item, index) => (
                        <Card key={index}>
                            <div>{index }</div>
                            <td>{item.hardwerEntrada}</td>
                            {item.products.map((p, i) => (
                                <React.Fragment key={i}>
                                    <Card.Img variant="top" src={p.productPhotosHard} />
                                    <p>{p.id}</p>
                                    <Card.Title align="center" className="card__title">
                                    {p.typeHard}
                                     </Card.Title>
                                    <Card.Text className="card__title">
                                        {p.modelHard}
                                    </Card.Text>
                                    <Card.Body >
                                    <Button variant="danger" align="center" margin="1rem">
                                      <FaRegHeart />
                                    </Button>{" "}
                                    <Link to="/detail">
                                    <Button variant="danger" align="center">
                                      <FaRegEye />                    
                                    </Button>{" "}
                                    </Link>
                                    <Link to="/cart">
                                      <Button variant="danger" align="center">
                                        Add To Cart
                                      </Button>{" "}
                                    </Link>
                                    </Card.Body>
                                                            
                                </React.Fragment>
                            ))}
                            
                        </Card>
                    ))} 
            
       
       
              
      </div>
    );  
    
}