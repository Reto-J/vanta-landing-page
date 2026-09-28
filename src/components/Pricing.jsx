import { pricingPlans } from "../data/pricing";

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing__header">
        <div>
          <span className="section-label">SIMPLE PRICING</span>

          <h2>
            START FREE.
            <br />
            <span>SCALE WHEN</span>
            <br />
            YOU'RE READY.
          </h2>
        </div>

        <p>
          Start with the tools you need today and upgrade when your team is
          ready for more.
        </p>
      </div>

      <div className="pricing__grid">
        {pricingPlans.map((plan) => (
          <article
            className={`pricing-card, ${
              plan.popular ? "pricing-card--popular" : ""
            }`}
            key={plan.name}
          >

            <div>
              <h3>{plan.name}</h3>

              <p className="pricing-card__description">
                {plan.description}
              </p>
            </div>

            <div className="pricing-card__price">
              <strong>{plan.price}</strong>
              <span>{plan.period}</span>
            </div>

            <ul className="pricing-card__features">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <span>✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a href="#cta" className="pricing-card__button">
              {plan.name === "Starter"
                ? "Get Started"
                : "Start Free Trial"}
              <span>↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Pricing;