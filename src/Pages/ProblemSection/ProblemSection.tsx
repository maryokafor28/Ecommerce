import "./ProblemSection.css";

function ProblemSection() {
  return (
    <section className="problem-section">
      <div className="overlay-content">
        <p className="highlight">Designing Better Experience</p>
        <h2 className="heading">
          Problems trying to resolve <br />
          the conflict between
        </h2>
        <p className="description">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </p>
        <p className="price">$16.48</p>
        <button className="cta-button">ADD YOUR CALL TO ACTION</button>
      </div>

      <h2 className="mobile-headings">
        Problems <br />
        trying to resolve <br />
        the conflict <br />
        between
      </h2>

      <p className="mobile-price">$16.48</p>
      <p className="mobile-description">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics:
      </p>

      <button className="mobile-cta-button">ADD YOUR CALL TO ACTION</button>
    </section>
  );
}

export default ProblemSection;
