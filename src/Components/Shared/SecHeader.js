import "./SecHeader.css";
import logo from "./img/logo.png";

export default function Navbar() {
  return (

    <nav className="container-nav">
      <div class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} />
          </a>

          <form class="d-flex">
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example">
              <option selected>All Categories</option>
              <option value="Laptops Collection">Laptops Collection</option>
              <option value="Acessories Collection">
                Acessories Collection
              </option>
              <option value="Cameras Collection">Cameras Collection</option>
            </select>
            <br />
            <div>
              <input
                class="form-control me-4"
                type="search"
                placeholder="Search here"
                aria-label="Search"
              />
            </div>
            <button class="btn btn-danger" type="submit">
              Search
            </button>
          </form>
        </div>
        </div>
      </nav>
    
  );
}
