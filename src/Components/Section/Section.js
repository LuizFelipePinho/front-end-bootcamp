import "./Section.css";

export default function Section() {
  return (
    <div class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid-section">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a className="nav-link">
                <c className="section" href="#">
                  Home
                  <hr />
                </c>
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link">
                <c className="section" href="#">
                  Hot Deals
                </c>
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link">
                <c className="section" href="#">
                  Categories
                </c>
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link">
                <c className="section" href="#">
                  Laptops
                </c>
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link">
                <c className="section" href="#">
                  Smartphones
                </c>
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link">
                <c className="section" href="#">
                  Cameras
                </c>
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link">
                <c className="section" href="#">
                  Acessories
                </c>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}