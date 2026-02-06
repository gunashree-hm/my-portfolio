import React from 'react';
import './App.css';

const RESUME_DATA = {
  name: "Gunashree HM",
  role: "Gesix GeoAI Intern", // MANDATORY ROLE [cite: 17]
  about: "I am a final-year Information Science student at Global Academy of Technology with a CGPA of 8.15. Specialized in Agri-Tech AI and web development.",
  skills: {
    proficient: ["Python", "SQL", "HTML5", "CSS3", "JavaScript"],
    familiar: ["React.js", "Data Structures", "Deep Learning", "Vite"]
  },
  projects: [
    {
      title: "Agri-Tech: Brinjal Disease Classification",
      problem: "Farmers lose significant yield due to late-stage disease identification; I developed a CNN model to classify diseases early via leaf images.", // MANDATORY 2-LINE PROBLEM [cite: 24]
      link: "https://github.com/gunashree-hm/brinjal-disease-detection" // MANDATORY LINK [cite: 23]
    },
    {
      title: "Containerised Chronicles",
      problem: "Standard blogging platforms lack secure role-based access; I built a scalable platform with secure authentication to manage user permissions.",
      link: "https://github.com/gunashree-hm/Containerized-Chronicles-An-authenticated-blogging-platform"
    }
  ],
  contacts: {
    email: "your.email@example.com",
    github: "https://github.com/gunashree-hm",
    linkedin: "https://linkedin.com/in/yourusername"
  }
};

function App() {
  return (
    <div className="portfolio">
      <header className="hero">
        <div className="container">
          {/* SPRINT BADGE REMOVED HERE */}
          <h1>{RESUME_DATA.name}</h1>
          <p className="role">{RESUME_DATA.role}</p>
          <p className="about-text">{RESUME_DATA.about}</p>
        </div>
      </header>

      <section className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Proficient</h3>
            <div className="tags">
              {RESUME_DATA.skills.proficient.map(s => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
          <div className="skill-card">
            <h3>Familiar</h3>
            <div className="tags">
              {RESUME_DATA.skills.familiar.map(s => <span key={s} className="tag familiar">{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">Project Showcase</h2>
        <div className="project-grid">
          {RESUME_DATA.projects.map((p, i) => (
            <div key={i} className="project-card">
              <h3>{p.title}</h3>
              <p className="problem-text">{p.problem}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.title} repository`}>
                Source Code &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="socials">
            {/* Added aria-labels for 90+ Accessibility Score */}
            <a href={RESUME_DATA.contacts.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">GitHub</a>
            <a href={RESUME_DATA.contacts.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">LinkedIn</a>
            <a href={`mailto:${RESUME_DATA.contacts.email}`} aria-label="Send Email">Email</a>
          </div>
          <p className="copyright">© 2026 {RESUME_DATA.name} | Gesix GeoAI Submission</p>
        </div>
      </footer>
    </div>
  );
}

export default App;