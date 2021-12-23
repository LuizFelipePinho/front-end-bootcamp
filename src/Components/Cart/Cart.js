import React from "react";
import Finish from "../Finish/Finish";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Router, Route, Link } from "react-router";

export default function CheckOut() {
  return (
    <div className="checkout">
      <ProgressBar animated now={50} />
      <section class="py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="row">
            <div class="col-md-4 order-md-2 mb-4">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted"> Your Cart </span>
                <span class="badge badge-secondary badge-pill"> 3 </span>
              </h4>
              <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0"> First Item </h6>
                    <small class="text-muted"> Description </small>
                  </div>
                  <span class="text-muted"> $ 12 </span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0"> Second Item </h6>
                    <small class="text-muted"> Description </small>
                  </div>
                  <span class="text-muted"> $ 8 </span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0"> Third item </h6>
                    <small class="text-muted"> Description </small>
                  </div>
                  <span class="text-muted"> $ 5 </span>
                </li>
                <li class="list-group-item d-flex justify-content-between bg-light">
                  <div class="text-success">
                    <h6 class="my-0"> Prome Code </h6>
                    <small> EXAMPLECODE </small>
                  </div>
                  <span class="text-success"> - $ 5 </span>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                  <span> Total ( USD ) </span>
                  <strong> R$ 20 </strong>
                </li>
              </ul>
              <form class="card p-2">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control me-2"
                    placeholder="Código promocional"
                  />
                  <div class="input-group-append">
                    <button
                      type="button"
                      class="btn btn-dark px-4 rounded-pill">
                      {" "}
                      Rescue{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-md-8 order-md-1">
              <h4 class="mb-3"> Charge Address </h4>
              <form class="needs-validation" novalidate>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName" class="form-label">
                      {" "}
                      Name{" "}
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder=""
                      value=""
                      obligatory
                    />
                    <div class="invalid-feedback">
                      The first name is obligatory.
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName" class="form-label">
                      {" "}
                      last name{" "}
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder=""
                      value=""
                      obligatory
                    />
                    <div class="invalid-feedback">
                      It's required a valid last name.
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="username" class="form-label">
                    {" "}
                    User's name{" "}
                  </label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"> @ </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      placeholder="Username"
                      obligatory
                    />
                    <div class="invalid-feedback">User's name is required.</div>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    {" "}
                    Email <span class="text-muted"> ( Optional ) </span>{" "}
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">
                    {" "}
                    Address{" "}
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    obligatory
                  />
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="address2" class="form-label">
                    {" "}
                    Address 2 <span class="text-muted">
                      {" "}
                      ( Optional ){" "}
                    </span>{" "}
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                  />
                </div>
                <div class="row">
                  <div class="col-md-5 mb-3">
                    <label for="country" class="form-label">
                      {" "}
                      Country{" "}
                    </label>
                    <select
                      class="form-select d-block w-100"
                      id="country"
                      obligatory>
                      <option value=""> Choose ... </option>
                      <option> USA </option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="state" class="form-label">
                      {" "}
                      State{" "}
                    </label>
                    <select
                      class="form-select d-block w-100"
                      id="state"
                      obligatory>
                      <option value=""> Choose ... </option>
                      <option> California </option>
                    </select>
                    <div class="invalid-feedback">Provide a valid state.</div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="zip" class="form-label">
                      {" "}
                      Zip{" "}
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="zip"
                      placeholder=""
                      obligatory
                    />
                    <div class="invalid-feedback">
                      The zip code is required.
                    </div>
                  </div>
                </div>
                <hr class="mb-4" />
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="same-address"
                  />
                  <label class="form-check-label" for="same-address">
                    The shipping address is the same as my billing address.{" "}
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="save-info"
                  />
                  <label class="form-check-label" for="save-info">
                    {" "}
                    Salve essas informações para a próxima vez{" "}
                  </label>
                </div>

                <hr class="mb-4" />
                <a href="/Finish">
                  <button class="btn btn-dark px-4 rounded-pill" type="button">
                    Make Payment{" "}
                  </button>
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
