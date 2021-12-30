import { Link } from "react-router-dom";
import "./ThirdHeader.css";

export default function Gallery() {
  return (
    <nav className="container">
      <div class="col-md-6">
        <div class="section-nav">
          <ul class="section-tab-nav tab-nav">
            <li class="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/input">Input</Link>
            </li>
            <li>
              <Link to="/output">Output</Link>
            </li>
            <li>
              <Link to="/processing">Processing</Link>
            </li>
            <li>
              <Link to="/storage">Storage</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
