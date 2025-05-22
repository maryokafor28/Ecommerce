import "./Header.css";
import { FiPhone, FiChevronDown } from "react-icons/fi";
import { Envelope, UserIcon } from "../../icons/icons";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import { HeartIcon, CartIcon, SearchIcon } from "../../icons/icons";

function Header() {
  return (
    <header>
      {/* Top Green Banner */}
      <div className="top-banner">
        <div className="banner-left">
          <FiPhone className="icon" />
          <p>(225)555-0118</p>
          <span>
            <Envelope className="mail-icon" />
            michelle.rivera@example.com
          </span>
        </div>
        <div className="banner-center">
          <span>Follow Us and get a chance to win 80% off</span>
        </div>
        <div className="banner-right">
          <span>Follow Us :</span>
          <FaInstagram className="icon" />
          <FaYoutube className="icon" />
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="logo">Bandage</div>
        <ul className="nav-links">
          <li>Home</li>
          <li style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            Shop <FiChevronDown />
          </li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Pages</li>
        </ul>
        <div className="nav-actions">
          <a href="#">
            <UserIcon className="user-icon" />
            Login / Register
          </a>
          <SearchIcon className="nav-icon" />
          <CartIcon className="nav-icon" />
          <HeartIcon className="nav-icon" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
