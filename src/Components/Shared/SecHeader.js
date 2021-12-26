import "./SecHeader.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

export default function Navbar() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        
        <Link to="/">
          <a class="navbar-brand" href="#">
            <img src={logo} />
          </a>
        </Link>
        <form class="d-flex">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example">
            <option selected>Select...</option>
            <option value="Notebooks">Notebooks</option>
            <option value="Acessories">Acessories</option>
            <option value="Gamer">Gamer Experience</option>
          </select>

          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-danger" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
