import "./Gallery.css";

import Card from "./Card";

export default function Gallery() {
  return (
    <nav className="container">
      <div class="col-md-12">
        <div class="section-title">
          <h3 class="title">New Products</h3>
        </div>
      </div>
  
          <div className="card">
            <Card />
          </div>
       
    </nav>
  );
}
