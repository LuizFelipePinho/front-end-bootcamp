import "./Notebook.css";

export default function Notebook() {
  return (
    <div className="container-section">
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
                  <a className="section" href="./Components/Products/Notebook/Notebook">
                   Notebooks
                  </a>
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
    </div>
  );
}
