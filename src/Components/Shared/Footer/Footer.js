import "./Footer.css";
import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaCcMastercard,
  FaCcVisa,
  FaCcPaypal,
  FaCreditCard,
  FaCcDiscover,
  FaCcAmex,
} from "react-icons/fa";

import { BsSuitHeartFill } from "react-icons/bs";

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
                  <a href="#">Contact Us</a>
                </li>

                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-3 col-xs-6">
            <div class="footer">
              <h3 class="footer-title">Service</h3>
              <ul class="footer-links">
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">View Cart</a>
                </li>
                <li>
                  <a href="#">Wishlist</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-xs-6">
            <div class="footer">
              <h3 class="footer-title">Categories</h3>
              <ul class="footer-links">
                <li>
                  <a href="#">Hot deals</a>
                </li>
                <li>
                  <a href="#">Laptops</a>
                </li>

                <li>
                  <a href="#">Accessories</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-12 text-center">
          <span className="copyright">
            Copyright ©2021 All rights reserved | Made with <BsSuitHeartFill />{" "}
            by Equipe 04
          </span>
        </div>
      </div>
    </footer>
  );
}
