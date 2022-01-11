/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./SecHeader.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

export default function Navbar() {

  // const handleForm = (event) => {
  //   event.preventDefault()
  //   console.log(event.target)

  // }


  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        
        <Link to="/">
          <a class="navbar-brand" href="#">
            <img src={logo} />
          </a>
        </Link>
        {/* <form class="d-flex" onSubmit={handleForm}>
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"> */}
            {/* <option selected>Select...</option> */}
            {/* <option value="Input">Input</option>
            <option value="Output">Output</option>
            <option value="Processing">Processing</option>
            <option value="Storage">Storage</option>

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
        </form> */}
      </div>
    </nav>
  );
}
