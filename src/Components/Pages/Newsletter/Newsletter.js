import "./Newsletter.css";
import { FaEnvelope,FaFacebookF,FaTwitter,FaInstagram,FaPinterestP } from "react-icons/fa";

export default function Section() {
  return (
    <div id="newsletter" className="section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="newsletter">
              <p>
                Sign Up for the <strong>NEWSLETTER</strong>
              </p>
              <form>
                <input
                  class="input"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <button class="newsletter-btn">
                  <i><FaEnvelope /></i> Subscribe
                </button>
              </form>
              <ul class="newsletter-follow">
                <li>
                  <a href="#">
                  <i><FaFacebookF /></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                  <i><FaTwitter /></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                  <i><FaInstagram /></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i><FaPinterestP /></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
