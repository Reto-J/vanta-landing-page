function Statistics() {
  const stats = [
    {
      value: "10K+",
      label: "Teams using VANTA",
    },
    {
      value: "2.4M+",
      label: "Tasks completed",
    },
    {
      value: "38%",
      label: "Average productivity increase",
    },
    {
      value: "4.9/5",
      label: "Average customer rating",
    },
  ];

  return (
    <section className="statistics">
      <div className="statistics__intro">
        <span className="section-label section-label--dark">
          THE NUMBERS
        </span>

        <h2>
          WORK THAT
          <br />
          <span>MOVES.</span>
        </h2>
      </div>

      <div className="statistics__grid">
        {stats.map((stat) => (
          <div className="stat" key={stat.value}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;