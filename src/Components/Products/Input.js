import "./Product.css";

import axios from "axios";
import Input from "./Input/Input";

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
										Input
										<small>(120)</small>
									</label>
								</div>

								<div class="input-checkbox">
									<input type="checkbox" id="category-2" />
									<label for="category-2">
										<span></span>
										Output
										<small>(740)</small>
									</label>
								</div>

								<div class="input-checkbox">
									<input type="checkbox" id="category-3" />
									<label for="category-3">
										<span></span>
										Processing
										<small>(1450)</small>
									</label>
								</div>

								<div class="input-checkbox">
									<input type="checkbox" id="category-4" />
									<label for="category-4">
										<span></span>
										Storage
										<small>(578)</small>
									</label>
								</div>
							</div>
						</div>

						<div class="aside">
							<h3 class="aside-title">STORE</h3>
							<div class="checkbox-filter">
								<div class="input-checkbox">
									<input type="checkbox" id="brand-1" />
									<label for="brand-1">
										<span></span>
										TECH SHOP
										<small>(578)</small>
									</label>
								</div>
								<div class="input-checkbox">
									<input type="checkbox" id="brand-2" />
									<label for="brand-2">
										<span></span>
										TI STORE
										<small>(125)</small>
									</label>
								</div>
								<div class="input-checkbox">
									<input type="checkbox" id="brand-3" />
									<label for="brand-3">
										<span></span>
										BLUE SHOP
										<small>(755)</small>
									</label>
								</div>
								<div class="input-checkbox">
									<input type="checkbox" id="brand-4" />
									<label for="brand-4">
										<span></span>
										FUTURE STORE
										<small>(578)</small>
									</label>
								</div>
							</div>
						</div>
					</div>

					<div id="store" class="col-md-9">
						<Input />
					</div>
				</div>
			</div>
		</div>
	);
}
