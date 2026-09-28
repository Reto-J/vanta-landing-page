function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="cta__content">
        <span className="section-label section-label--dark">
          READY TO MOVE?
        </span>

        <h2>
          TURN YOUR
          <br />
          <span>IDEAS</span>
          <br />
          INTO MOMENTUM.
        </h2>

        <p>
          Join thousands of teams using VANTA to work smarter, move faster,
          and build better things together.
        </p>

        <div className="cta__actions">
          <a href="#pricing" className="button button--primary">
            Get Started Free <span>↗</span>
          </a>

          <a href="#faq" className="button button--secondary">
            Have Questions? <span>→</span>
          </a>
        </div>
      </div>

      <div className="cta__circle">
        VANTA
      </div>
    </section>
  );
}

export default CTA;