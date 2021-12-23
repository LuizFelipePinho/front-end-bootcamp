import {Link } from 'react-router-dom';
import "./ThirdHeader.css";

export default function Gallery() {
  return (
    <nav className="container">
      <div class="col-md-6">
        <div class="section-nav">
          <ul class="section-tab-nav tab-nav">
            <li class="active">
              <a data-toggle="tab" href="#tab1">
              <Link to="/">Home</Link>
              </a>
            </li>
            <li>
            <Link to="/notebooks">Notebooks</Link>
            </li>
            <li>
            <Link to="/acessories">Acessories</Link>
            </li>
            <li>
            <Link to="/gamer">Gamer Experience</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
