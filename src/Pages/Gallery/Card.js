import "./Card.css";
import product01 from "./img/product01.png";
import product06 from "./img/product06.png";
import product08 from "./img/product08.png";
import product03 from "./img/product03.png";
export default function Card() {
  return (
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col">
        <div class="card">
          <img src={product01} class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Notebook Lenovo</h5>
            <p class="card-text">
            R$2000
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={product06} class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Notebook Samsung</h5>
            <p class="card-text">
              R$2500
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={product08} class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Notebook Apple</h5>
            <p class="card-text">
            R$4000
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={product03} class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Notebook Asus</h5>
            <p class="card-text">
            R$1500
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

