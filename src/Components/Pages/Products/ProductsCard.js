import "./ProductsCard.css";
import { Link } from "react-router-dom";

import { Card, Row, Col, Button } from "react-bootstrap";
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import product01 from "./img/product01.png";

function ProductsCard() {
  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 9 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={product01} />
              <Card.Body className="card__body">
                <Card.Title align="center" className="card__title">
                  CATEGORY
                </Card.Title>
                <Card.Text className="card__title">
                  PRODUCT NAME GOES HERE
                </Card.Text>
                <>
                  <Button variant="danger" align="center">
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
                </>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductsCard;
