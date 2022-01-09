import { Card, Row, Col, Button } from "react-bootstrap";
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import ButtonDel from "./ButtonDel/ButtonDel";


import './CardVendor.css'

const CardUnique = ({data}) => {


    return (
        <div className="containerCardVendor" >
            
            <Col>
                <Card>
                <Card.Img variant="top" src={data.productPhotosHard} />
                <Card.Body className="card__body">
                    {/* <Card.Title align="center" className="card__title">
                    CATEGORY
                    </Card.Title> */}
                    <Card.Text className="card__title">
                    {data.modelHard}
                    </Card.Text>
                    <>
                    {/* <Button variant="danger" align="center">
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
                    </Link> */}
                 
                    <ButtonDel data={data} />
                    </>
                </Card.Body>
                </Card>
            </Col>
            
        </div>
    )
    
}

export default CardUnique