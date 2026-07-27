
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import React, { useEffect, useState } from "react";
import "./styles.css";

const roles = [
  "Software Developer",
  "Application Support Specialist",
  "React Developer",
  "IT Support Engineer",
];

const projects = [
  {
    number: "01",
    title: "Enterprise IT Helpdesk",
    subtitle: "Incident Management Platform",
    description:
      "A complete enterprise helpdesk platform for managing tickets, agents, SLA deadlines, priorities, activity logs and support operations.",
    tech: ["React", "Node.js", "Express", "MySQL", "JWT"],
    featured: true,
  },
  {
    number: "02",
    title: "Pharmacy ERP",
    subtitle: "Billing & Stock Management",
    description:
      "ERP system for medicine inventory, billing, stock tracking, low-stock alerts and business management.",
    tech: ["React", "Node.js", "MySQL", "REST API"],
  },
  {
    number: "03",
    title: "Smart Map Platform",
    subtitle: "Navigation & Location System",
    description:
      "Interactive map application with location search, directions, markers and responsive navigation interfaces.",
    tech: ["JavaScript", "Leaflet", "Nominatim", "CSS"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);


  useEffect(() => {
    const currentRole = roles[roleIndex];
    let delay = deleting ? 45 : 90;

    if (!deleting && displayText === currentRole) {
      delay = 1200;
    }

    const timer = setTimeout(() => {
      if (!deleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, deleting, roleIndex]);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("show"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "-6% 0px -6% 0px",
      }
    );

    const rafId = requestAnimationFrame(() => {
      elements.forEach((el) => observer.observe(el));
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <div className="background-grid"></div>

      <div className="orb orb-one"></div>
      <div className="orb orb-two"></div>
      <div className="orb orb-three"></div>

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          N<span>.</span>
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>

        <a href="#contact" className="nav-contact">
          Let's Talk
        </a>

        <button
          className={`menu-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* HERO */}
      <main id="home" className="hero">
        <div className="hero-content reveal">
          <div className="available-badge">
            <span className="status-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="intro">HELLO, I'M</p>

          <h1 className="hero-name">
            NUR
            <br />
            <span>ALAM.</span>
          </h1>

          <div className="typing-wrapper">
            <span className="typing-prefix">I build as a </span>

            <span className="typing-text">
              {displayText}
              <span className="cursor">|</span>
            </span>
          </div>

          <p className="hero-description">
            I create modern web applications and practical software solutions
            focused on performance, usability and real-world business problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore Projects
              <span>↗</span>
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>03+</strong>
              <span>Strong Projects</span>
            </div>

            <div>
              <strong>Full</strong>
              <span>Stack Development</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Learning Mindset</span>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="terminal-card">
            <div className="terminal-top">
              <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <p>nur@portfolio</p>
            </div>

            <div className="terminal-body">
              <p>
                <span className="terminal-green">$</span> whoami
              </p>

              <p className="terminal-output">Nur Alam</p>

              <p>
                <span className="terminal-green">$</span> role
              </p>

              <p className="terminal-output">
                Software Developer / IT Support
              </p>

              <p>
                <span className="terminal-green">$</span> skills
              </p>

              <p className="terminal-output terminal-array">
                ["React", "Node.js", "MySQL", "JavaScript"]
              </p>

              <p>
                <span className="terminal-green">$</span> status
              </p>

              <p className="terminal-success">
                ✓ Ready to build something amazing
              </p>

              <p className="terminal-current">
                <span className="terminal-green">$</span>
                <span className="terminal-cursor"></span>
              </p>
            </div>
          </div>

          <div className="floating-tag tag-react">React</div>
          <div className="floating-tag tag-node">Node.js</div>
          <div className="floating-tag tag-mysql">MySQL</div>
        </div>

        <a href="#about" className="scroll-down">
          <span>SCROLL</span>
          <div className="scroll-line"></div>
        </a>
      </main>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="section-heading reveal">
          <p>01 / ABOUT</p>
          <h2>
            Building software that
            <br />
            <span>solves problems.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-large reveal">
            <p className="about-lead">
              I'm a technology enthusiast focused on software development,
              application support and creating reliable digital products.
            </p>

            <p>
              My approach combines development skills with troubleshooting and
              problem-solving. I enjoy taking an idea from concept to a working
              application with clean UI, structured backend systems and
              practical features.
            </p>

            <a href="#projects" className="text-link">
              SEE WHAT I'VE BUILT
              <span>→</span>
            </a>
          </div>

          <div className="about-card reveal">
            <p className="card-label">CURRENT FOCUS</p>

            <div className="focus-item">
              <span>01</span>
              <p>Full Stack Development</p>
            </div>

            <div className="focus-item">
              <span>02</span>
              <p>Application Support</p>
            </div>

            <div className="focus-item">
              <span>03</span>
              <p>Enterprise Systems</p>
            </div>

            <div className="focus-item">
              <span>04</span>
              <p>Modern UI / UX</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="section-heading reveal">
          <p>02 / SKILLS</p>

          <h2>
            My technology
            <br />
            <span>toolbox.</span>
          </h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card reveal">
            <div className="skill-number">01</div>

            <h3>Frontend</h3>

            <div className="skill-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Responsive Design</span>
            </div>
          </div>

          <div className="skill-card reveal">
            <div className="skill-number">02</div>

            <h3>Backend</h3>

            <div className="skill-tags">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST API</span>
              <span>JWT</span>
            </div>
          </div>

          <div className="skill-card reveal">
            <div className="skill-number">03</div>

            <h3>Database</h3>

            <div className="skill-tags">
              <span>MySQL</span>
              <span>SQL</span>
              <span>Database Design</span>
            </div>
          </div>

          <div className="skill-card reveal">
            <div className="skill-number">04</div>

            <h3>Tools</h3>

            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Thunder Client</span>
              <span>Vite</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <div className="section-heading reveal">
          <p>03 / SELECTED WORK</p>

          <h2>
            Projects that
            <br />
            <span>make an impact.</span>
          </h2>
        </div>

        <div className="projects-container">
          {projects.map((project) => (
            <article
              className={`project-card reveal ${project.featured ? "featured-project" : ""
                }`}
              key={project.number}
            >
              <div className="project-top">
                <span className="project-number">{project.number}</span>

                {project.featured && (
                  <span className="featured-label">FEATURED PROJECT</span>
                )}

                <span className="project-arrow">↗</span>
              </div>

              <div className="project-content">
                <p className="project-subtitle">{project.subtitle}</p>

                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section education-section">
        <div className="section-heading reveal">
          <p>04 / EDUCATION</p>

          <h2>
            Knowledge &
            <br />
            <span>continuous growth.</span>
          </h2>
        </div>

        <div className="education-card reveal">
          <div className="education-left">
            <span>POSTGRADUATE</span>
            <h3>Master of Science</h3>
          </div>

          <div className="education-right">
            <p>
              Academic foundation combined with continuous hands-on learning in
              modern software development and information technology.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-content reveal">
          <p className="contact-small">HAVE A PROJECT OR OPPORTUNITY?</p>

          <h2 className="contact-title" aria-label="Let's create something great.">
            <span className="contact-line contact-line-one">Let's create</span>
            <span className="contact-line contact-line-two">
              something <span className="great-text">great.</span>
            </span>
          </h2>

          <p className="contact-description">
            I'm interested in software development, application support and
            technology opportunities where I can build, learn and contribute.
          </p>

          <a href="mailto:nooralamb012@gmail.com" className="contact-button">
            <span>START A CONVERSATION</span>
            <strong>↗</strong>
          </a>

          <div className="social-links">
            <a
              href="https://github.com/Noorwithcode"
              target="_blank"
              rel="noreferrer"
              className="social-link github-link"
            >
              <span className="social-icon github-icon">
                <FaGithub />
              </span>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/nur-alam-744003241/"
              target="_blank"
              rel="noreferrer"
              className="social-link linkedin-link"
            >
              <span className="social-icon linkedin-icon">
                <FaLinkedinIn />
              </span>
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:nooralamb012@gmail.com"
              className="social-link gmail-link"
            >
              <span className="social-icon gmail-icon">
                <SiGmail />
              </span>
              <span>Email</span>
            </a>
          </div>

        </div>

        {/* ========= FOOTER SECTION ========== */}
        <footer>
          <p>© 2026 NUR ALAM</p>
          <p>DESIGNED & BUILT WITH REACT</p>
        </footer>
      </section>
    </div>
  );
}

export default App;