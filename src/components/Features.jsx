import { features } from "../data/features";

function Features() {
  return (
    <section className="features" id="features">
      <div className="features__header">
        <div>
          <span className="section-label section-label--dark">
            WHAT VANTA DOES
          </span>

          <h2>
            EVERYTHING YOU NEED
            <br />
            TO <span>MOVE FORWARD.</span>
          </h2>
        </div>

        <p>
          One intelligent workspace for planning, collaboration, automation,
          and everything your team needs to turn ideas into results.
        </p>
      </div>

      <div className="features__grid">
        {features.map((feature, index) => (
          <article className="feature-card" key={feature.title}>
            <div className="feature-card__number">
              0{index + 1}
            </div>

            <div className="feature-card__icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

            <a href="#cta">
              Learn more <span>↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Features;