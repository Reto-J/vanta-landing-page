import { testimonials } from "../data/testimonials";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__header">
        <div>
          <span className="section-label">
            WHAT PEOPLE SAY
          </span>

          <h2>
            BUILT FOR TEAMS.
            <br />
            <span>LOVED BY PEOPLE.</span>
          </h2>
        </div>

        <p>
          See why teams use VANTA to simplify their workflows and keep their
          best work moving forward.
        </p>
      </div>

      <div className="testimonials__grid">
        {testimonials.map((testimonial) => (
          <article
            className="testimonial-card"
            key={testimonial.name}
          >
            <div className="testimonial-card__quote">
              “
            </div>

            <p className="testimonial-card__text">
              {testimonial.quote}
            </p>

            <div className="testimonial-card__author">
              <div className="testimonial-card__avatar">
                {testimonial.initials}
              </div>

              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;