function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Capture",
      description:
        "Add your ideas, tasks, and goals to VANTA without losing the bigger picture.",
    },
    {
      number: "02",
      title: "Organize",
      description:
        "Turn scattered ideas into structured projects, priorities, and actionable tasks.",
    },
    {
      number: "03",
      title: "Automate",
      description:
        "Let VANTA's AI handle repetitive work and keep your workflow moving.",
    },
    {
      number: "04",
      title: "Deliver",
      description:
        "Track progress, collaborate with your team, and turn plans into results.",
    },
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works__header">
        <div>
          <span className="section-label">THE VANTA WORKFLOW</span>

          <h2>
            FROM IDEA
            <br />
            TO <span>DONE.</span>
          </h2>
        </div>

        <p>
          A simple workflow designed to remove friction from the way your team
          works.
        </p>
      </div>

      <div className="steps">
        {steps.map((step) => (
          <article className="step" key={step.number}>
            <span className="step__number">{step.number}</span>
            <div className="step__line"></div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <span className="step__arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;