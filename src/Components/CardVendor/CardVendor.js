import { Card, Row, Col, Button } from "react-bootstrap";
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

import './CardVendor.css'

const CardUnique = (props) => {

    // const [productPhotosHard, modelHard] = data

    return (
        <div className="containerCardVendor">
            
            <Col>
                <Card>
                <Card.Img variant="top" src={props.data.productPhotosHard} />
                <Card.Body className="card__body">
                    {/* <Card.Title align="center" className="card__title">
                    CATEGORY
                    </Card.Title> */}
                    <Card.Text className="card__title">
                    {props.data.modelHard}
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
                    </>
                </Card.Body>
                </Card>
            </Col>
            
        </div>
    )
    
}

export default CardUnique