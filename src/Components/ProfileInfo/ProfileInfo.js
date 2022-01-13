import { Row } from "react-bootstrap";
import CardUnique from "../../Components/CardVendor/CardVendor";
import "./ProfileInfo.css";
import img from "./ProfileImg.png";
import { useState, useEffect } from "react";
import ButtonRedirect from "../CardVendor/ButtonRedirect/ButtonRedirect";

const ProfileInfo = (props) => {
	const [data, setData] = useState(props.user);

	return (
		<div class="card">
			<div class="container-profile">
				<h2 align="center">{props.user.name}</h2>
				<h4 align="center">{props.user.email}</h4>
				<h6 align="center">CPF: {props.user.cpf}</h6>
				<div align="center">
					{props.user.role === "VENDOR" ? <ButtonRedirect /> : ""}
				</div>
			</div>
			<div align="center">
				<Row xs={1} md={4} className="g-4" align="center">
					{data.products.map((prod) => (
						<CardUnique key={prod.id} data={prod} />
					))}
				</Row>
			</div>
		</div>
	);
};

export default ProfileInfo;
