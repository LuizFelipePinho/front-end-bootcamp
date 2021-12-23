import "./Product.css";

import ProductsCard from "./ProductsCard";
import product01 from "./img/product01.png";
import product02 from "./img/product02.png";
import product03 from "./img/product03.png";

export default function Acessories() {
  return (
    <div class="section">
      <div class="container">
        <div class="row">
          <div id="aside" class="col-md-3">
            <div class="aside">
              <h3 class="aside-title">Categories</h3>
              <div class="checkbox-filter">
                <div class="input-checkbox">
                  <input type="checkbox" id="category-1" />
                  <label for="category-1">
                    <span></span>
                    Laptops
                    <small>(120)</small>
                  </label>
                </div>

                <div class="input-checkbox">
                  <input type="checkbox" id="category-2" />
                  <label for="category-2">
                    <span></span>
                    Smartphones
                    <small>(740)</small>
                  </label>
                </div>

                <div class="input-checkbox">
                  <input type="checkbox" id="category-3" />
                  <label for="category-3">
                    <span></span>
                    Cameras
                    <small>(1450)</small>
                  </label>
                </div>

                <div class="input-checkbox">
                  <input type="checkbox" id="category-4" />
                  <label for="category-4">
                    <span></span>
                    Accessories
                    <small>(578)</small>
                  </label>
                </div>

                <div class="input-checkbox">
                  <input type="checkbox" id="category-5" />
                  <label for="category-5">
                    <span></span>
                    Laptops
                    <small>(120)</small>
                  </label>
                </div>

                <div class="input-checkbox">
                  <input type="checkbox" id="category-6" />
                  <label for="category-6">
                    <span></span>
                    Smartphones
                    <small>(740)</small>
                  </label>
                </div>
              </div>
            </div>

            <div class="aside">
              <h3 class="aside-title">Price</h3>
              <div class="price-filter">
                <div id="price-slider"></div>
                <div class="input-number price-min">
                  <input id="price-min" type="number" />
                  <span class="qty-up">+</span>
                  <span class="qty-down">-</span>
                </div>
                <span>-</span>
                <div class="input-number price-max">
                  <input id="price-max" type="number" />
                  <span class="qty-up">+</span>
                  <span class="qty-down">-</span>
                </div>
              </div>
            </div>

            <div class="aside">
              <h3 class="aside-title">Brand</h3>
              <div class="checkbox-filter">
                <div class="input-checkbox">
                  <input type="checkbox" id="brand-1" />
                  <label for="brand-1">
                    <span></span>
                    SAMSUNG
                    <small>(578)</small>
                  </label>
                </div>
                <div class="input-checkbox">
                  <input type="checkbox" id="brand-2" />
                  <label for="brand-2">
                    <span></span>
                    LG
                    <small>(125)</small>
                  </label>
                </div>
                <div class="input-checkbox">
                  <input type="checkbox" id="brand-3" />
                  <label for="brand-3">
                    <span></span>
                    SONY
                    <small>(755)</small>
                  </label>
                </div>
                <div class="input-checkbox">
                  <input type="checkbox" id="brand-4" />
                  <label for="brand-4">
                    <span></span>
                    SAMSUNG
                    <small>(578)</small>
                  </label>
                </div>
                <div class="input-checkbox">
                  <input type="checkbox" id="brand-5" />
                  <label for="brand-5">
                    <span></span>
                    LG
                    <small>(125)</small>
                  </label>
                </div>
                <div class="input-checkbox">
                  <input type="checkbox" id="brand-6" />
                  <label for="brand-6">
                    <span></span>
                    SONY
                    <small>(755)</small>
                  </label>
                </div>
              </div>
            </div>

            <div class="aside">
              <h3 class="aside-title">Top selling</h3>
              <div class="product-widget">
                <div class="product-img">
                  <img src={product01} />
                </div>
                <div class="product-body">
                  <p class="product-category">Category</p>
                  <h3 class="product-name">
                    <a href="#">product name goes here</a>
                  </h3>
                  <h4 class="product-price">
                    $980.00 <del class="product-old-price">$990.00</del>
                  </h4>
                </div>
              </div>

              <div class="product-widget">
                <div class="product-img">
                  <img src={product02} />
                </div>
                <div class="product-body">
                  <p class="product-category">Category</p>
                  <h3 class="product-name">
                    <a href="#">product name goes here</a>
                  </h3>
                  <h4 class="product-price">
                    $980.00 <del class="product-old-price">$990.00</del>
                  </h4>
                </div>
              </div>

              <div class="product-widget">
                <div class="product-img">
                  <img src={product03} />
                </div>
                <div class="product-body">
                  <p class="product-category">Category</p>
                  <h3 class="product-name">
                    <a href="#">product name goes here</a>
                  </h3>
                  <h4 class="product-price">
                    $980.00 <del class="product-old-price">$990.00</del>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div id="store" class="col-md-9">
            <div class="store-filter clearfix">
              <div class="store-sort">
                <label>
                  Sort By:
                  <select class="input-select">
                    <option value="0">Popular</option>
                    <option value="1">Position</option>
                  </select>
                </label>
              </div>
            </div>

            <ProductsCard />
            

            <div class="store-filter clearfix">
              <span class="store-qty">Showing 9-100 products</span>
              <ul class="store-pagination">
                <li class="active">1</li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
