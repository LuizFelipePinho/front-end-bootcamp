import { Card, Row, Col, Button } from "react-bootstrap/";
import { FaRegHeart, FaRegEye, FaSearch } from "react-icons/fa";
import product01 from "./img/product01.png";
import "./ProductsCard.css";

function ProductsCard() {
    return (
        <div>
              <Row xs={1} md={3} className="g-4">
              {Array.from({ length: 9 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src={product01} />
                    <Card.Body>
                      <Card.Title align="center">CATEGORY</Card.Title>
                      <Card.Text>PRODUCT NAME GOES HERE</Card.Text>
                      <>
                        <Button>
                          <FaRegHeart />
                        </Button>
                        <Button>
                          <FaRegEye />
                        </Button>
                      </>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
        </div>
    )
}

export default ProductsCard
