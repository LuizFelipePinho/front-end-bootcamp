import "./Products.css";
import { BsSuitHeartFill } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";

import product01 from "./img/product01.png";
import product02 from "./img/product02.png";
import product03 from "./img/product03.png";
import product04 from "./img/product04.png";
import product05 from "./img/product05.png";
import product06 from "./img/product06.png";
import product07 from "./img/product07.png";
import product08 from "./img/product08.png";
import product09 from "./img/product09.png";

// import { AiOutlineRightCircle } from "react-icons/ai";

export default function Section() {
  return (
    <nav className="container">
      <div class="col-md-12">
						<div class="section-title">
							<h3 class="title">New Products</h3>
							<div class="section-nav">
								<ul class="section-tab-nav tab-nav">
									<li class="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
									<li><a href="#">Smartphones</a></li>
									<li><a  href="#">Cameras</a></li>
									<li><a href="#">Accessories</a></li>
								</ul>
							</div>
						</div>
					</div>
      <div class="card-group">
        <div class="card">
          <img src={product01} class="card-img-top" alt="..." />
          <div class="card-body-prod">
            <p class="card-text">
              <h5>$550</h5>
            </p>
            <h5 class="card-title-prod">Notebook Samsung</h5>
            <p class="card-text">
              O Samsung Book possui uma arquitetura de última geração e design
              elegante.
            </p>

            <p class="card-text">
              <BsSuitHeartFill className="icons-products" />
              <BsCartFill className="icons-products" />
            </p>
          </div>
        </div>
        <div class="card">
          <img src={product02} class="card-img-top" alt="..." />
          <div class="card-body-prod">
            <p class="card-text">
              <h5>$150</h5>
            </p>
            <h5 class="card-body-prod">Fone Headset Gamer Led Rgb</h5>
            <p class="card-text">
              Headset Gamer com fone de ouvido almofadado que elimina os ruidos
              externos.
            </p>

            <p class="card-text">
              <BsSuitHeartFill className="icons-products" />
              <BsCartFill className="icons-products" />
            </p>
          </div>
        </div>
        <div class="card">
          <img src={product03} class="card-img-top" alt="..." />
          <div class="card-body-prod">
            <p class="card-text">
              <h5>$800</h5>
            </p>
            <h5 class="card-title-prod">MacBook Air</h5>
            <p class="card-text">
              O portátil mais fino e leve ganhou superpoderes com o processador
              M1 da Apple.
            </p>

            <p class="card-text">
              <BsSuitHeartFill className="icons-products" />
              <BsCartFill className="icons-products" />
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
