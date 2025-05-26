import "./AboutUs.css";

import {
  AboutUsFrame,
  AboutUs1,
  AboutUs2,
  AboutUs3,
  AboutUs4,
  AboutUs5,
  AboutUs6,
  AboutUs7,
  AboutUs8,
  AboutUs9,
} from "../../icons/icons";
import { FaStar, FaRegStar } from "react-icons/fa";

function AboutUs() {
  const images = [
    AboutUs1,
    AboutUs2,
    AboutUs3,
    AboutUs4,
    AboutUs5,
    AboutUs6,
    AboutUs7,
    AboutUs8,
    AboutUs9,
  ];

  return (
    <div className="aboutus-container">
      <div className="testimonial">
        <h3>What they say about us</h3>
        <AboutUsFrame className="profile-image" />
        <div className="stars">
          <FaStar color="#FFD700" />
          <FaStar color="#FFD700" />
          <FaStar color="#FFD700" />
          <FaStar color="#FFD700" />
          <FaRegStar color="#FFD700" />
        </div>
        <p className="testimonial-text">
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </p>
        <p className="mobile-testimonial-text">
          Slate helps you see how many more
          <br />
          days you need to work to
          <br />
          reach your financial goal.
        </p>

        <p className="name">Regina Miles</p>
        <p className="title">Designer</p>
      </div>

      <div className="gallerys">
        {images.map((ImgComponent, index) => (
          <span key={index} className="gallerys-image">
            <ImgComponent />
          </span>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
