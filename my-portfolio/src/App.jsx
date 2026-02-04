import "./App.css";

function App() {
  return (
    <>
      {/* ===== HERO (ONLY ENHANCED, NOT REDESIGNED) ===== */}
      <section className="hero">
        <span className="availability">🟢 Available for opportunities</span>

        <h1>Gunashree HM</h1>
        <p className="role">Gesix GeoAI Intern</p>

        <p className="heroIntro">
          I am an Information Science and Engineering student with a strong
          interest in software development. I enjoy learning by building real
          projects and understanding how applications work in practice.
        </p>

        <p className="heroIntro">
          Currently focused on strengthening my fundamentals in web development
          and backend technologies while exploring modern tools step by step.
        </p>

        <a href="#projects" className="primaryBtn">
          View My Work
        </a>
      </section>

      {/* ===== ABOUT (WIDER, CLEANER, MORE EXPLANATION) ===== */}
      <section className="about" id="about">
        <h2>About Me</h2>

        <p>
          I am an Information Science and Engineering student who is curious
          about how software systems are designed and built. Rather than
          memorizing concepts, I prefer understanding them by applying them
          through hands-on projects.
        </p>

        <p>
          My learning journey started with basic programming and gradually
          expanded into web development and backend technologies. Working on
          projects helped me understand problem-solving, logical thinking, and
          how different components of an application come together.
        </p>

        <p>
          I believe in writing clean, readable code and improving continuously
          through practice. I am currently seeking opportunities where I can
          learn, contribute, and grow as a software developer.
        </p>

        <div className="contact">
          <p>📧 gunashreehm@gmail.com</p>
          <p>📞 +91 9164215417</p>
          <p>
            💻{" "}
            <a
              href="https://github.com/gunashree-hm"
              target="_blank"
              rel="noreferrer"
            >
              github.com/gunashree-hm
            </a>
          </p>
        </div>
      </section>

      {/* ===== PROJECTS (UNCHANGED – CARD STYLE KEPT) ===== */}
      <section className="projects" id="projects">
        <h2>Projects</h2>

        <div className="projectGrid">
          <div className="projectCard">
            <h3>AI Occupancy Monitoring System</h3>
            <p>
              Built an AI-based system using thermal sensors to estimate crowd
              occupancy while maintaining privacy.
            </p>
            <span>Python · AI · Sensors</span>
          </div>

          <div className="projectCard">
            <h3>Attendance Management System</h3>
            <p>
              Developed a web application to record and manage attendance using
              secure backend logic.
            </p>
            <span>Django · HTML · CSS · SQL</span>
          </div>

          <div className="projectCard">
            <h3>Personal Portfolio Website</h3>
            <p>
              Designed and developed a portfolio website to showcase projects
              and skills.
            </p>
            <span>React · Vite · CSS</span>
          </div>
        </div>
      </section>

      {/* ===== SKILLS (UNCHANGED – OVAL / PILL STYLE KEPT) ===== */}
      <section className="skills">
        <h2>Skills</h2>

        <div className="skillGroup">
          <h4>Programming</h4>
          <div className="skillPills">
            <span>Python</span>
            <span>JavaScript</span>
            <span>SQL</span>
          </div>
        </div>

        <div className="skillGroup">
          <h4>Web Technologies</h4>
          <div className="skillPills">
            <span>HTML</span>
            <span>CSS</span>
            <span>React</span>
          </div>
        </div>

        <div className="skillGroup">
          <h4>Tools & Frameworks</h4>
          <div className="skillPills">
            <span>Django</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
