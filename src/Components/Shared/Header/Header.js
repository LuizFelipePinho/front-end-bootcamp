import "./Header.css";


import { BsSuitHeartFill, BsCartFill } from "react-icons/bs";
import {
  FaUserAstronaut,
  FaRegUser,
  FaDollarSign,
  FaUserCheck,
} from "react-icons/fa";

export default function Header() {
  return (
    <nav class="header navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <FaUserAstronaut className="icon" /> Quero Vender!
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                <FaRegUser className="icon" /> Quero comprar!
              </a>
            </li>
          </ul>
          <ul class="navbar-nav me-end">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                <FaUserCheck className="icon" /> My Account
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