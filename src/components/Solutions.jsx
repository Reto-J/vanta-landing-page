function Solutions() {
  const solutions = [
    {
      number: "01",
      title: "For Startups",
      description:
        "Move fast without letting your workflow become chaotic. VANTA keeps your team focused on what matters.",
      tag: "MOVE FAST",
    },
    {
      number: "02",
      title: "For Creative Teams",
      description:
        "Turn ideas into organized projects while keeping collaboration simple, visual, and flexible.",
      tag: "CREATE MORE",
    },
    {
      number: "03",
      title: "For Growing Teams",
      description:
        "Give everyone a clear view of priorities, progress, and responsibilities as your team scales.",
      tag: "SCALE SMART",
    },
    {
      number: "04",
      title: "For Remote Teams",
      description:
        "Keep distributed teams connected with shared workspaces, intelligent updates, and real-time visibility.",
      tag: "STAY CONNECTED",
    },
  ];

  return (
    <section className="solutions" id="solutions">
      <div className="solutions__header">
        <div>
          <span className="section-label section-label--dark">
            BUILT FOR YOUR TEAM
          </span>

          <h2>
            ONE PLATFORM.
            <br />
            <span>MANY WAYS</span>
            <br />
            TO WORK.
          </h2>
        </div>

        <p>
          Whether you're building a startup, running a creative team, or
          managing projects remotely, VANTA adapts to the way you work.
        </p>
      </div>

      <div className="solutions__grid">
        {solutions.map((solution) => (
          <article className="solution-card" key={solution.number}>
            <div className="solution-card__top">
              <span>{solution.number}</span>
              <span>{solution.tag}</span>
            </div>

            <div className="solution-card__content">
              <h3>{solution.title}</h3>

              <p>{solution.description}</p>

              <a href="#cta">
                Explore solution <span>↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Solutions;