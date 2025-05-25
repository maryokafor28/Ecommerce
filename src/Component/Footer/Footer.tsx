import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <h2 className="footer-logo">Bandage</h2>
          <div className="social-icons">
            <FaFacebookF className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
          </div>
        </div>

        <hr />

        {/* Full-width white background section */}
        <div className="footer-columns-wrapper">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-column">
                <h4>Company Info</h4>
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
              </div>
              <div className="footer-column">
                <h4>Features</h4>
                <p>Business Marketing</p>
                <p>User Analytic</p>
                <p>Live Chat</p>
                <p>Unlimited Support</p>
              </div>
              <div className="footer-column">
                <h4>Resources</h4>
                <p>IOS & Android</p>
                <p>Watch a Demo</p>
                <p>Customers</p>
                <p>API</p>
              </div>
              <div className="footer-columns">
                <h4>Get In Touch</h4>
                <div className="subscribe">
                  <input type="email" placeholder="Your Email" />
                  <button>Subscribe</button>
                </div>
                <p className="subtext">Lore imp sum dolor Amit</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Made With Love By Finland All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
