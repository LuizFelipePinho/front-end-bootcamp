import "./Header.css";
import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaDollarSign,
  FaRegUser,
} from "react-icons/fa";

import { BsSuitHeartFill, BsCartFill } from "react-icons/bs";

export default function Header() {
  return (
    
    <nav class="header navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <FaPhoneAlt className="icon" /> (73) 3252-4957{" "}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                <FaRegEnvelope className="icon" /> faleconosco@brechotech.com
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                <FaMapMarkerAlt className="icon" /> Brazil
              </a>
            </li>
          </ul>
          <ul class="navbar-nav me-end">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                <FaRegUser className="icon" /> My Account
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                <BsSuitHeartFill className="icon" /> Wishlist
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                <BsCartFill className="icon" /> Cart
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                <FaDollarSign className="icon" /> BR
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
}
