import "./Header.css";
import { useState } from "react";
import { FiPhone, FiChevronDown, FiX } from "react-icons/fi";
import {
  Envelope,
  UserIcon,
  Harmbuger,
  MobileSearch,
  ShoppingCart,
} from "../../icons/icons";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import { HeartIcon, CartIcon, SearchIcon } from "../../icons/icons";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Green Banner */}
      <div className="top-banner">
        <div className="banner-left">
          <span>
            <FiPhone className="icon" />
            (225)555-0118
          </span>
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
        <div className="nav-left">
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
        </div>
        <div className="nav-actions">
          <a href="#">
            <UserIcon className="user-icon" />
            Login / Register
          </a>
          <SearchIcon className="nav-icon" />
          <CartIcon className="nav-icon" />
          <HeartIcon className="nav-icon" />
        </div>

        {/* Mobile Icons */}
        <div className="mobile-icons">
          <MobileSearch className="nav-icons" />
          <ShoppingCart className="nav-icons" />
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <FiX /> : <Harmbuger />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-expanded">
          <ul>
            <li>Home</li>
            <li className="active">Product</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
