function About() {
  return (
    <section className="about" id="about">
      <div className="about__visual">
        <div className="about__window">
          <div className="about__window-top">
            <div className="about__dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span>vanta.app</span>
          </div>

          <div className="about__window-content">
            <div className="about__mini-sidebar">
              <strong>VANTA</strong>

              <span className="active">Overview</span>
              <span>Projects</span>
              <span>Tasks</span>
              <span>Analytics</span>
            </div>

            <div className="about__workspace">
              <div className="about__workspace-heading">
                <div>
                  <small>WORKSPACE</small>
                  <h3>Product Launch</h3>
                </div>

                <span className="about__status">On track</span>
              </div>

              <div className="about__progress">
                <div>
                  <span>Project progress</span>
                  <strong>78%</strong>
                </div>

                <div className="progress-bar">
                  <span></span>
                </div>
              </div>

              <div className="about__tasks">
                <div>
                  <span className="task-check">✓</span>
                  Design landing page
                  <small>Completed</small>
                </div>

                <div>
                  <span className="task-check">✓</span>
                  Prepare campaign
                  <small>Completed</small>
                </div>

                <div>
                  <span className="task-check task-check--empty"></span>
                  Launch product
                  <small>In progress</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about__floating-card">
          <span>AI INSIGHT</span>
          <strong>+38%</strong>
          <p>team productivity this month</p>
        </div>
      </div>

      <div className="about__content">
        <span className="section-label">WHY VANTA</span>

        <h2>
          WORK LESS
          <br />
          <span>BUSY.</span>
          <br />
          WORK MORE
          <br />
          <span>SMART.</span>
        </h2>

        <p>
          Your team's best ideas shouldn't get buried under meetings,
          notifications, and repetitive tasks.
        </p>

        <p>
          VANTA brings planning, collaboration, automation, and intelligent
          assistance into one focused workspace — so your team can spend more
          time creating and less time managing work.
        </p>

        <a href="#how-it-works" className="button button--primary">
          Discover VANTA <span>↗</span>
        </a>

        <div className="about__stats">
          <div>
            <strong>10K+</strong>
            <span>Teams</span>
          </div>

          <div>
            <strong>38%</strong>
            <span>More productive</span>
          </div>

          <div>
            <strong>4.9</strong>
            <span>Average rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;