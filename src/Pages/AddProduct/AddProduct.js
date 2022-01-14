import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import React from "react";
import "../Register/Register.css";
import { useState } from "react";
import axios from "axios";
import authLogin from "../../api/authLogin";
import { useNavigate } from "react-router-dom";

export default function AddProduct(props) {
	const [typeHard, setTypeHard] = useState("");
	const [modelHard, setModelHard] = useState("");
	const [priceHard, setPriceHard] = useState("");
	const [yearuseHard, setYearUseHard] = useState(0);
	const [productPhotosHard, setProductPhotosHard] = useState("");
	const [videoHard, setVideoHard] = useState("");
	const [usedHard, setUsedHard] = useState("");
	const [description, setDescription] = useState("");
	const navigate = useNavigate();

	const clearInput = () => {
		setTypeHard("");
		setModelHard("");
		setPriceHard("");
		setYearUseHard("");
		setProductPhotosHard("");
		setVideoHard("");
		setUsedHard("");
		setDescription("");
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const product = {
			typeHard: typeHard,
			modelHard: modelHard,
			priceHard: priceHard,
			yearuseHard: parseInt(yearuseHard),
			productPhotosHard: productPhotosHard,
			videoHard: videoHard,
			usedHard: usedHard,
			description: description,
		};

		const dataUser = authLogin.getDataUser();

		const token = dataUser.token;
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		const res = await axios
			.post("product/create", product, config)
			.then((reponse) => {
				console.log(reponse);
				alert("product added successfully");
				clearInput();
				navigate("/profile");
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<Container>
				<Row className="mt-6">
					<Col
						lg={5}
						md={6}
						sm={12}
						className="p-5 m-auto shadow-sm rounded-lg"
					>
						<Form
							className="rounded p-2 p-sm-3"
							onSubmit={handleSubmit}
						>
							<h3> Product Register</h3>
							{/* <Form.Group
								className="mb-3"
								controlId="formBasicEmail"
								required
							>	 */}
							{/* </Form.Group>																
								<Form.Group className="mb-3" controlId="formBasicEmail" required>
									<Form.Label>Product Type:</Form.Label>
									<Form.Control type="text" placeholder="Ex: Input, Output" 
									onChange={event => setTypeHard(event.target.value)}
									/> 								
							</Form.Group> */}

							<Form.Group>
							<Form.Select className="mb-3" controlId="formBasicEmail" required
							onChange={event => setTypeHard(event.target.value)}>
								<option>Product Type:</option>
								<option value="Input">Input</option>
								<option value="Output">Output</option>
								<option value="Storage">Storage</option>
								<option value="Processing">Processing</option>
								
							</Form.Select>
							</Form.Group>



							<Form.Group
								className="mb-3"
								controlId="formBasicEmail"
							>
								<Form.Label>Model:</Form.Label>
								<Form.Control
									type="text"
									placeholder="Ex: Galax"
									value={modelHard}
									onChange={(event) =>
										setModelHard(event.target.value)
									}
								/>
							</Form.Group>

							<Form.Group
								className="mb-3"
								controlId="formBasicPassword"
							>
								<Form.Label>Price</Form.Label>
								<Form.Control
									type="text"
									placeholder="Product's price"
									value={priceHard}
									onChange={(event) =>
										setPriceHard(event.target.value)
									}
								/>
							</Form.Group>

							<Form.Group
								className="mb-3"
								controlId="formBasicPassword"
							>
								<Form.Label>Years of Use:</Form.Label>
								<Form.Control
									type="text"
									placeholder=""
									value={yearuseHard}
									onChange={(event) =>
										setYearUseHard(event.target.value)
									}
								/>
							</Form.Group>

							<Form.Group
								className="mb-3"
								controlId="formBasicPassword"
							>
								<Form.Label>Image's Link:</Form.Label>
								<Form.Control
									type="text"
									value={productPhotosHard}
									onChange={(event) =>
										setProductPhotosHard(event.target.value)
									}
								/>
							</Form.Group>

							<Form.Group
								className="mb-3"
								controlId="formBasicPassword"
							>
								<Form.Label>Video's Link:</Form.Label>
								<Form.Control
									type="text"
									value={videoHard}
									onChange={(event) =>
										setVideoHard(event.target.value)
									}
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="">
								<Form.Label>
									How many persons owned this product?
								</Form.Label>
								<Form.Control
									type="text"
									placeholder=""
									value={usedHard}
									onChange={(event) =>
										setUsedHard(event.target.value)
									}
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="">
								<Form.Label>Description</Form.Label>
								<Form.Control
									type="text"
									placeholder=""
									value={description}
									onChange={(event) =>
										setDescription(event.target.value)
									}
								/>
							</Form.Group>

							<button
								class="btn btn-dark px-4 rounded-pill"
								type="submit"
							>
								Register Product
							</button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
}
