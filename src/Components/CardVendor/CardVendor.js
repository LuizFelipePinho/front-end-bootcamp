import { Card, Row, Col, Button } from "react-bootstrap";
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import ButtonDel from "./ButtonDel/ButtonDel";
import ButtonAt from "./ButtonAt/ButtonAt";

import './CardVendor.css'

const CardUnique = (props) => {
    return (
            <Col id={props.data.id}>
                <Card>
                <Card.Img variant="top" src={props.data.productPhotosHard} />
                <Card.Body className="card__body">
                    <Card.Text className="card__title">
                    {props.data.modelHard}

                    </Card.Text>
                    <>
                    <ButtonAt data={props.data}/>
                    <ButtonDel data={props.data} />
                    </>
                </Card.Body>
                </Card>
            </Col>
    )
    
}

export default CardUnique