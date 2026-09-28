import "../styles/sections.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <span className="section-label">AI PRODUCTIVITY PLATFORM</span>

        <h1 className="hero__title">
          TURN IDEAS
          <br />
          INTO <span>MOMENTUM.</span>
        </h1>

        <p className="hero__description">
          VANTA is an AI-powered workspace that helps teams plan projects,
          automate repetitive work, track progress, and collaborate from one
          place.
        </p>

        <div className="hero__actions">
          <a href="#pricing" className="button button--primary">
            Get Started Free <span>↗</span>
          </a>

          <a href="#how-it-works" className="button button--secondary">
            See How It Works <span>→</span>
          </a>
        </div>

        <div className="hero__trust">
          <div className="hero__avatars">
            <span>JD</span>
            <span>AM</span>
            <span>SK</span>
            <span>+</span>
          </div>

          <p>
            Trusted by <strong>10,000+</strong> teams
            <br />
            worldwide
          </p>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__glow"></div>

        {/* Dashboard */}
        <div className="dashboard">
          <div className="dashboard__sidebar">
            <div className="dashboard__brand">VANTA</div>
            <div className="dashboard__nav">
              <span className="active">⌂ Home</span>
              <span>▣ Projects</span>
              <span>✓ Tasks</span>
              <span>◷ Calendar</span>
              <span>◉ Team</span>
              <span>⚙ Settings</span>
            </div>
          </div>

          <div className="dashboard__main">
            <div className="dashboard__top">
              <div>
                <small>GOOD MORNING, ALEX 👋</small>
                <h3>Here's what's happening today.</h3>
              </div>

              <div className="dashboard__avatar">A</div>
            </div>

            <div className="dashboard__stats">
              <div>
                <small>Total Projects</small>
                <strong>12</strong>
              </div>

              <div>
                <small>Completed Tasks</small>
                <strong>28</strong>
              </div>

              <div>
                <small>Team Members</small>
                <strong>5</strong>
              </div>
            </div>

            <div className="dashboard__bottom">
              <div className="dashboard__projects">
                <h4>Recent Projects</h4>

                <p>
                  <span></span> Website Redesign
                </p>

                <p>
                  <span></span> Mobile App Development
                </p>

                <p>
                  <span></span> Marketing Campaign
                </p>

                <p>
                  <span></span> Product Research
                </p>
              </div>

              <div className="dashboard__ai">
                <h4>AI Assistant</h4>
                <p>How can I help you today?</p>

                <div className="ai-message">
                  Summarize project updates
                </div>

                <div className="ai-message">
                  Create a new task
                </div>

                <div className="ai-button">↗</div>
              </div>
            </div>
          </div>
        </div>

        <div className="herodecoration herodecoration--one">✦</div>
        <div className="herodecoration herodecoration--two">✳</div>
      </div>
    </section>
  );
}

export default Hero;