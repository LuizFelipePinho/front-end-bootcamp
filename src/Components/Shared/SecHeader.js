import React, { useState, useEffect } from "react";
import "./SecHeader.css";

import { Link } from "react-router-dom";
import logo from "./img/logo1.png";

function SecHeader() {
	return (
		<nav class="navbar navbar-dark bg-dark">
			<div class="container-fluid">
				<Link to="/">
					<a class="navbar-brand" href="#">
						<img src={logo} className="logo_header" />
					</a>
				</Link>
			</div>
		</nav>
	);
}
export default SecHeader;
