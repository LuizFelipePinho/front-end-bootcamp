import "./Gallery.css";
import Card from './Card'


export default function Gallery() {
  return (
    <nav className="container">
      <div class="col-md-12">
        <div class="section-title">
          <h3 class="title">New Products</h3>
          <div class="section-nav">
            <ul class="section-tab-nav tab-nav">
              <li class="active">
                <a data-toggle="tab" href="#tab1">
                  Notebooks
                </a>
              </li>
              <li>
                <a href="#">Acessories</a>
              </li>
              <li>
                <a href="#">Gamer Experience</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
          <Card />
      </div>
      
    </nav>
  );
}
