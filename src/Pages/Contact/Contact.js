import React from "react";
import "./Contact.css";
import img from "./img/img.jpg";
import imgbia from "./img/imgbia.jpg";
import imgjoao from "./img/imgjoao.jpg";
import imgluis from "./img/imgluis.jpg";
import imgpedro from "./img/imgpedro.jpg";
import { FaLinkedin } from "react-icons/fa";
function Contact() {
	return (
		<div className="container">
			
			<div class="row">
				<div class="column">
					<div class="card">
						<img src={img} />
						<div class="container">
							<h2>Ana Trindade</h2>
							<p class="title">Fullstack</p>
							<a
								className="icon_contact"
								href="https://www.linkedin.com/in/ana-santanazt/"
							>
								<FaLinkedin />
							</a>
							<p>anacgsantana@gmail.com</p>
						</div>
					</div>
				</div>

				<div class="column">
					<div class="card">
						<img src={imgbia} />
						<div class="container">
							<h2>Beatriz Costa</h2>
							<p class="title">Back-End</p>
							<a
								className="icon_contact"
								href="https://www.linkedin.com/in/beatriz-costa-leal/"
							>
								<FaLinkedin />
							</a>
							<p>beatrizcostaleal1996@gmail.com</p>
						</div>
					</div>
				</div>

				<div class="column">
					<div class="card">
						<img src={imgjoao} />
						<div class="container">
							<h2>João Vitor</h2>
							<p class="title">Fullstack</p>
							<a
								className="icon_contact"
								href="https://www.linkedin.com/in/jo%C3%A3o-vitor-gomes-244b7592/"
							>
								<FaLinkedin />
							</a>
							<p>joaovitorgomes95@gmail.com</p>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<img src={imgluis} />
						<div class="container">
							<h2>Luis Felipe</h2>
							<p class="title">Fullstack</p>
							<a
								className="icon_contact"
								href="https://www.linkedin.com/in/luiz-felipe-pinho/"
							>
								<FaLinkedin />
							</a>
							<p>luizfelipesilva458@gmail.com</p>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<img src={imgpedro} />
						<div class="container">
							<h2>Pedro Santos</h2>
							<p class="title">Fullstack</p>
							<a
								className="icon_contact"
								href="https://www.linkedin.com/in/pedro-santos-dev/"
							>
								<FaLinkedin />
							</a>
							<p>ph.senasantos@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Contact;
