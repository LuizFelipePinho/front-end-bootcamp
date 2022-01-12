import "./FirstHeader.css";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import {
	FaUserAstronaut,
	FaRegUser,
	FaUserCheck,
	FaUserAlt,
} from "react-icons/fa";

export default function FirstHeader() {
	return (
		<nav class="header navbar-expand-lg navbar-dark bg-dark ">
			<div class="collapse navbar-collapse" id="navbarText">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
					<Link to="/register">
						<li class="nav-item">
							<p class="nav-link active">
								<FaUserAstronaut className="icon" /> I want to
								sell !
							</p>
						</li>
					</Link>
					<Link to="/Register">
						<li class="nav-item">
							<p class="nav-link active">
								<FaRegUser className="icon" /> Register
							</p>
						</li>
					</Link>
				</ul>
				<ul class="navbar-nav me-end ">
					<Link to="/login">
						<li class="nav-item">
							<p class="nav-link active" href="#">
								<FaUserCheck className="icon" /> My Account
							</p>
						</li>
					</Link>
					<Link to="/cart">
						<li class="nav-item">
							<p class="nav-link active" href="#">
								<BsCartFill className="icon" /> Cart
							</p>
						</li>
					</Link>

					<Link to="/profile">
						<li class="nav-item">
							<p class="nav-link active">
								<FaUserAlt className="icon" /> Profile
							</p>
						</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
}
