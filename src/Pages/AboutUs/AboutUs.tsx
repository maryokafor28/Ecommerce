import "./AboutUs.css";
import { FaStar, FaRegStar } from "react-icons/fa";
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
      <div className="aboutus-content">
        {/* Left: Testimonial */}
        <div className="testimonial">
          <h2>What they say about us</h2>
          <AboutUsFrame className="testimonial-image" />
          <div className="stars">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} color="#FFD700" />
            ))}
            <FaRegStar color="#FFD700" />
          </div>
          <p className="testimonial-text">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <p className="mobile-testimonial-text">
            Slate helps you see how many more
            <br />
            days you need to work to
            <br />
            reach your financial goal.
          </p>

          <div className="testimonial-author">
            <p className="name">Regina Miles</p>
            <p className="role">Designer</p>
          </div>
        </div>

        {/* Right: Image Grid */}
        <div className="image-grid">
          {images.map((ImgComponent, idx) => (
            <ImgComponent key={idx} className="aboutus-image" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
