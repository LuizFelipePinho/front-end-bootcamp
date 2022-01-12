import React from "react";
import "./About.css";
import logo from "./img/logo1.png";

function About() {
	return (
		<div className="container_about">
			<div className="img_about">
				<img src={logo} class="img-fluid" />
			</div>
			<div class="container">
				<div class="row align-items-start">
					<div class="col">
						<p class="lead">
							Due to the lack of hardware on the market, the price
							of new products has become increasingly inaccessible
							to the majority of the Brazilian population that is
							interested in getting this type of product. This
							software was built to become a solution in the
							hardware market.
						</p>

						<blockquote class="blockquote">
							<a>This projet is deployed on </a>
							<a
								target="_blank"
								href="https://front-end-brecho-tech.herokuapp.com/"
							>
								Heroku
							</a>
							<p>
								<a>
									Please, check and test all the API routes on{" "}
								</a>
								<a
									target="_blank"
									href="https://back-end-brech-tech.herokuapp.com/api/"
								>
									Swagger
								</a>
							</p>
						</blockquote>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
