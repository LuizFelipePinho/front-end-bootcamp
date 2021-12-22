import "./Collection.css";

import shop01 from "./img/shop01.png";
import shop02 from "./img/shop02.png";
import shop03 from "./img/shop03.png";

import { AiOutlineRightCircle } from "react-icons/ai";

export default function Section() {
  return (
    <div className="container">
      <div class="section-title">
        <h3 class="title">Collection</h3>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src={shop01} className="img" />
            <div class="card-body">
              <h5 class="card-title">Notebook Collection</h5>
              <p class="card-text">
                SHOP NOW <AiOutlineRightCircle className="icons" />
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={shop03} className="img" />
            <div class="card-body">
              <h5 class="card-title">Accessories Collection</h5>
              <p class="card-text">
                SHOP NOW <AiOutlineRightCircle className="icons" />
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={shop02} className="img" />
            <div class="card-body">
              <h5 class="card-title">Gamer Experience</h5>
              <p class="card-text">
                SHOP NOW <AiOutlineRightCircle className="icons" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
