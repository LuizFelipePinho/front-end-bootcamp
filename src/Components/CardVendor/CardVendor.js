import { Card, Row, Col, Button } from "react-bootstrap";
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import ButtonDel from "./ButtonDel/ButtonDel";
import ButtonAt from "./ButtonAt/ButtonAt";

import "./CardVendor.css";

const CardUnique = (props) => {
	return (
		<div id={props.data.id} className="containerCardVendor">
			<Card className="card-box-vendor">
				<Card.Img variant="top" src={props.data.productPhotosHard} />
				<Card.Body className="card__body">
					<Card.Text className="card__title">
						{props.data.modelHard}
					</Card.Text>
						
				</Card.Body>
				<div
					className="btn-group"
					role="group"
					aria-label="Basic mixed styles example"
				>
					<ButtonAt data={props.data} />

					<ButtonDel data={props.data} />
				</div>
			</Card>
		</div>
	);
};

export default CardUnique;
