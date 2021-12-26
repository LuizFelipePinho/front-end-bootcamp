import "./FirstHeader.css";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { FaUserAstronaut, FaRegUser, FaUserCheck } from "react-icons/fa";

export default function Header() {
  return (
    <nav class="header navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/login">
              <li class="nav-item">
                <a class="nav-link active">
                  <FaUserAstronaut className="icon" /> I want to sell !
                </a>
              </li>
            </Link>
            <Link to="/login">
              <li class="nav-item">
              <a class="nav-link active">
                  <FaRegUser className="icon" /> I want to buy !
                </a>
              </li>
            </Link>
          </ul>
          <ul class="navbar-nav me-end">
            <Link to="/cart">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <FaUserCheck className="icon" /> My Account
                </a>
              </li>
            </Link>
            <Link to="/cart">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <BsCartFill className="icon" /> Cart
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
