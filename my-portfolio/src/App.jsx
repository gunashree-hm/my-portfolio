import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio-wrapper">
      {/* Decorative background lines to fill white space */}
      <div className="bg-line line-left"></div>
      <div className="bg-line line-right"></div>

      <header className="nav-container">
        <div className="logo">Gunashree<span>.</span>HM</div>
        <nav className="links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="mailto:gunashreehm@gmail.com" className="contact-pill">Contact </a>
        </nav>
      </header>

      <main className="main-content">
        {/* HERO SECTION - Corrected Tag Error */}
        <section className="hero">
          <div className="status-pill">🟢 Available for Opportunities</div>
          <h1>Crafting Intelligent <br/><span>Software Solutions..</span></h1>
          <p className="hero-bio">
            Information Science Engineer and <strong>GeoAI Intern</strong> at Gesix. 
            </p>
            <p>
              I am an Information Science and Engineering student with a strong

          interest in software development.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="primary-btn">Explore Work</a>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="content-section">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I am a final-year Information Science student at <strong>Global Academy of Technology</strong> with a CGPA of 8.15. 
                  I am an Information Science and Engineering student who is curious

          about how software systems are designed and built.
              </p>
              <p>
                 My learning journey started with basic programming and gradually

          expanded into web development and backend technologies. Working on

          projects helped me understand problem-solving, logical thinking.
          </p>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION - Exclusive to Resume Projects */}
        <section id="projects" className="content-section">
          <h2 className="section-title">Technical Projects</h2>
          <div className="project-grid">
            
            {/* AgriVision */}
            <div className="glass-card project-card">
              <div className="card-header">
                <span className="tech-label">ML · React · Flask</span>
                <h3>AgriVision: Smart Agriculture</h3>
              </div>
              <p>An AI-driven system combining soil parameters with CNN-based plant imaging for early disease detection.</p>
              <ul className="impact-list">
                <li>Expected 35% improvement in diagnostic speed.</li>
                <li>Projected 25% increase in crop yield through early stress prediction.</li>
              </ul>
            </div>

            {/* Containerized Chronicles */}
            <div className="glass-card project-card">
              <div className="card-header">
                <span className="tech-label">Django · Python · SQL</span>
                <h3>Containerized Chronicles</h3>
              </div>
              <p>A scalable blog application with secure authentication and role-based access control.</p>
              <ul className="impact-list">
                <li>Integrated Text-to-Speech features for accessible content.</li>
                <li>Optimized workflows using Django's MVT architecture.</li>
              </ul>
            </div>

            {/* Weather Dashboard */}
            <div className="glass-card project-card">
              <div className="card-header">
                <span className="tech-label">React.js · Express · API</span>
                <h3>Weather Dashboard</h3>
              </div>
              <p>Real-time climate insights dashboard with OpenWeather API integration and geolocation support.</p>
              <ul className="impact-list">
                <li>Responsive interface built with TailwindCSS and React Hooks.</li>
                <li>Implemented 7-day weather forecasting and unit toggles.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="content-section">
          <h2 className="section-title">Work Experience</h2>
          <div className="glass-card exp-card">
            <div className="exp-header">
              <h4>GeoAI Intern</h4>
              <span className="company">Gesix | Feb 2026 </span>
            </div>
            <p>Applying Geospatial AI techniques to process and analyze spatial data for real-world automation. Collaborating on backend architectures  to support complex AI pipelines.</p>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="content-section">
          <h2 className="section-title">Technical Stack</h2>
          <div className="skill-container">
            <div className="skill-group">
              <h4>Programming</h4>
              <div className="skill-pills">
                <span>Python</span> <span>JavaScript</span> <span>SQL</span> <span>Java</span> <span>C</span> 
              </div>
            </div>
            <div className="skill-group">
              <h4>Frameworks & Tools</h4>
              <div className="skill-pills">
                <span>React</span> <span>Django</span> <span>Flask</span> <span>Git</span> <span>GitHub</span> 
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Gunashree H M | Built for Performance & Impact</p>
      </footer>
    </div>
  );
}

export default App;