import "./Footer.css";
import {
	BsSuitHeartFill,
	BsInstagram,
	BsFacebook,
	BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer id="footer">
			<div class="container">
				<div class="row">
					<div class="col-md-3 col-xs-6">
						<div class="footer">
							<h3 class="footer-title">Information</h3>
							<ul class="footer-links">
								<li>
									<a href="#">About Us</a>
								</li>
								<li>
									<Link to="/contact">Contact Us</Link>
								</li>
							</ul>
						</div>
					</div>

					<div class="col-md-3 col-xs-6">
						<div class="footer">
							<h3 class="footer-title">Service</h3>
							<ul class="footer-links">
								<li>
									<Link to="/profile">My Account</Link>
								</li>
								<li>
									<Link to="/cart">View Cart</Link>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-md-3 col-xs-6">
						<div class="footer">
							<h3 class="footer-title">Categories</h3>
							<ul class="footer-links">
								<li>
									<a href="#">Products</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-12 text-center">
					<span className="copyright">
						Copyright ©2021 All rights reserved | Made with{" "}
						<BsSuitHeartFill /> by Equipe 04
					</span>
				</div>
			</div>
		</footer>
	);
}
