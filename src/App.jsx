import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdLanguage } from "react-icons/md";
import React, { useEffect, useState } from "react";
import "./styles.css";

const content = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
      talk: "Let's Talk",
    },
    roles: [
      "Software Developer",
      "Application Support Specialist",
      "React Developer",
      "IT Support Engineer",
    ],
    hero: {
      availability: "AVAILABLE FOR OPPORTUNITIES",
      intro: "HELLO, I'M",
      typingPrefix: "I build as a ",
      description:
        "I create modern web applications and practical software solutions focused on performance, usability and real-world business problems.",
      explore: "Explore Projects",
      contact: "Contact Me",
      statProjects: "Portfolio Projects",
      statStack: "Stack Development",
      statLearning: "Learning Mindset",
      scroll: "SCROLL",
    },
    terminal: {
      role: "Software Developer / IT Support",
      status: "✓ Ready to build something amazing",
    },
    about: {
      eyebrow: "01 / ABOUT",
      title1: "Building software that",
      title2: "solves problems.",
      lead:
        "I'm a technology enthusiast focused on software development, application support and creating reliable digital products.",
      body:
        "My approach combines development skills with troubleshooting and problem-solving. I enjoy taking an idea from concept to a working application with clean UI, structured backend systems and practical features.",
      link: "SEE WHAT I'VE BUILT",
      focus: "CURRENT FOCUS",
      focusItems: [
        "Full Stack Development",
        "Application Support",
        "Enterprise Systems",
        "Modern UI / UX",
      ],
    },
    skills: {
      eyebrow: "02 / SKILLS",
      title1: "My technology",
      title2: "toolbox.",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      tools: "Tools",
      responsive: "Responsive Design",
      databaseDesign: "Database Design",
    },
    projects: {
      eyebrow: "03 / SELECTED WORK",
      title1: "Projects that",
      title2: "make an impact.",
      featured: "FEATURED PROJECT",
      live: "Live Demo",
      comingSoon: "COMING SOON",
      github: "GitHub",
      items: [
        {
          number: "01",
          title: "Enterprise IT Helpdesk",
          subtitle: "Incident Management Platform",
          description:
            "A complete enterprise helpdesk platform for managing tickets, agents, SLA deadlines, priorities, activity logs and support operations.",
          tech: ["React", "Node.js", "Express", "MySQL", "JWT"],
          githubUrl: "https://github.com/Noorwithcode/enterprise-it-helpdesk",
          liveUrl: null,
          featured: true,
        },
        {
          number: "02",
          title: "PharmaERP",
          subtitle: "Medicine Billing & Inventory Management",
          description:
            "A pharmacy ERP system for medicine billing, batch-wise inventory, stock tracking, purchases, sales, returns, adjustments and business reporting.",
          tech: ["React", "Node.js", "Express", "MySQL", "REST API"],
          githubUrl: "https://github.com/Noorwithcode/PharmaERP",
          liveUrl: "https://pharma-erp-opal.vercel.app/dashboard",
        },
        {
          number: "03",
          title: "PulseOps",
          subtitle: "Server Monitoring & Incident Operations",
          description:
            "An operations platform for server health monitoring, heartbeat tracking, automatic incident flows, acknowledgement, investigation and audit history.",
          tech: ["Node.js", "Express", "MySQL", "JWT", "REST API"],
          githubUrl: "https://github.com/Noorwithcode/PulseOps",
          liveUrl: null,
        },
      ],
    },
    education: {
      eyebrow: "04 / EDUCATION",
      title1: "Knowledge &",
      title2: "continuous growth.",
      level: "POSTGRADUATE",
      degree: "Master of Science",
      description:
        "Academic foundation combined with continuous hands-on learning in modern software development and information technology.",
    },
    contact: {
      eyebrow: "HAVE A PROJECT OR OPPORTUNITY?",
      title1: "Let's create",
      title2a: "something ",
      title2b: "great.",
      aria: "Let's create something great.",
      description:
        "I'm interested in software development, application support and technology opportunities where I can build, learn and contribute.",
      button: "START A CONVERSATION",
      email: "Email",
    },
    footer: "DESIGNED & BUILT WITH REACT",
  },

  de: {
    nav: {
      home: "Start",
      about: "Über mich",
      skills: "Kenntnisse",
      projects: "Projekte",
      education: "Ausbildung",
      contact: "Kontakt",
      talk: "Kontakt",
    },
    roles: [
      "Softwareentwickler",
      "Application-Support-Spezialist",
      "React-Entwickler",
      "IT-Support-Engineer",
    ],
    hero: {
      availability: "OFFEN FÜR BERUFLICHE MÖGLICHKEITEN",
      intro: "HALLO, ICH BIN",
      typingPrefix: "Ich arbeite als ",
      description:
        "Ich entwickle moderne Webanwendungen und praxisnahe Softwarelösungen mit Fokus auf Performance, Benutzerfreundlichkeit und reale Geschäftsanforderungen.",
      explore: "Projekte ansehen",
      contact: "Kontakt aufnehmen",
      statProjects: "Portfolio-Projekte",
      statStack: "Stack-Entwicklung",
      statLearning: "Lernbereitschaft",
      scroll: "SCROLLEN",
    },
    terminal: {
      role: "Softwareentwickler / IT-Support",
      status: "✓ Bereit, etwas Großartiges zu entwickeln",
    },
    about: {
      eyebrow: "01 / ÜBER MICH",
      title1: "Software entwickeln, die",
      title2: "Probleme löst.",
      lead:
        "Ich bin technikbegeistert und konzentriere mich auf Softwareentwicklung, Application Support und die Entwicklung zuverlässiger digitaler Produkte.",
      body:
        "Mein Ansatz verbindet Entwicklungskompetenz mit Troubleshooting und strukturiertem Problemlösen. Ich setze Ideen gerne von der Konzeption bis zu einer funktionierenden Anwendung mit sauberer Benutzeroberfläche, strukturiertem Backend und praxisnahen Funktionen um.",
      link: "MEINE PROJEKTE ANSEHEN",
      focus: "AKTUELLER FOKUS",
      focusItems: [
        "Full-Stack-Entwicklung",
        "Application Support",
        "Enterprise-Systeme",
        "Modernes UI / UX",
      ],
    },
    skills: {
      eyebrow: "02 / KENNTNISSE",
      title1: "Mein Technologie-",
      title2: "Werkzeugkasten.",
      frontend: "Frontend",
      backend: "Backend",
      database: "Datenbank",
      tools: "Tools",
      responsive: "Responsives Design",
      databaseDesign: "Datenbankdesign",
    },
    projects: {
      eyebrow: "03 / AUSGEWÄHLTE PROJEKTE",
      title1: "Projekte mit",
      title2: "praktischem Mehrwert.",
      featured: "HIGHLIGHT-PROJEKT",
      live: "Live-Demo",
      comingSoon: "BALD VERFÜGBAR",
      github: "GitHub",
      items: [
        {
          number: "01",
          title: "Enterprise IT Helpdesk",
          subtitle: "Incident-Management-Plattform",
          description:
            "Eine vollständige Enterprise-Helpdesk-Plattform zur Verwaltung von Tickets, Agents, SLA-Fristen, Prioritäten, Aktivitätsprotokollen und Support-Prozessen.",
          tech: ["React", "Node.js", "Express", "MySQL", "JWT"],
          githubUrl: "https://github.com/Noorwithcode/enterprise-it-helpdesk",
          liveUrl: null,
          featured: true,
        },
        {
          number: "02",
          title: "PharmaERP",
          subtitle: "Abrechnung & Bestandsverwaltung für Apotheken",
          description:
            "Ein ERP-System für Apotheken mit Medikamentenabrechnung, chargenbezogener Lagerverwaltung, Einkauf, Verkauf, Retouren, Bestandsanpassungen und Geschäftsberichten.",
          tech: ["React", "Node.js", "Express", "MySQL", "REST API"],
          githubUrl: "https://github.com/Noorwithcode/PharmaERP",
          liveUrl: "https://pharma-erp-opal.vercel.app/login",
        },
        {
          number: "03",
          title: "PulseOps",
          subtitle: "Server-Monitoring & Incident Operations",
          description:
            "Eine Operations-Plattform für Server-Monitoring, Heartbeat-Tracking, automatische Incident-Abläufe, Bestätigung, Untersuchung und Audit-Historie.",
          tech: ["Node.js", "Express", "MySQL", "JWT", "REST API"],
          githubUrl: "https://github.com/Noorwithcode/PulseOps",
          liveUrl: null,
        },
      ],
    },
    education: {
      eyebrow: "04 / AUSBILDUNG",
      title1: "Wissen &",
      title2: "kontinuierliche Entwicklung.",
      level: "MASTERABSCHLUSS",
      degree: "Master of Science",
      description:
        "Akademische Grundlage kombiniert mit kontinuierlichem praxisorientiertem Lernen in moderner Softwareentwicklung und Informationstechnologie.",
    },
    contact: {
      eyebrow: "HABEN SIE EIN PROJEKT ODER EINE MÖGLICHKEIT?",
      title1: "Lassen Sie uns",
      title2a: "etwas ",
      title2b: "Großartiges schaffen.",
      aria: "Lassen Sie uns etwas Großartiges schaffen.",
      description:
        "Ich interessiere mich für Möglichkeiten in Softwareentwicklung, Application Support und Technologie, bei denen ich entwickeln, lernen und einen Beitrag leisten kann.",
      button: "KONTAKT AUFNEHMEN",
      email: "E-Mail",
    },
    footer: "DESIGNT & ENTWICKELT MIT REACT",
  },
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("portfolio_language") || "en";
  });
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const t = content[language];
  const roles = t.roles;
  const projects = t.projects.items;

  useEffect(() => {
    localStorage.setItem("portfolio_language", language);
    document.documentElement.lang = language;
    setRoleIndex(0);
    setDisplayText("");
    setDeleting(false);
  }, [language]);

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
      } else if (displayText.length > 0) {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, deleting, roleIndex, language, roles]);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("show"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio;

          // Hysteresis:
          // enter only after the element is clearly visible,
          // reset only when it is almost completely outside.
          if (ratio >= 0.15) {
            entry.target.classList.add("show");
          } else if (ratio <= 0.01) {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: [0, 0.01, 0.15],
        rootMargin: "0px 0px -4% 0px",
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
          <a href="#home" onClick={closeMenu}>{t.nav.home}</a>
          <a href="#about" onClick={closeMenu}>{t.nav.about}</a>
          <a href="#skills" onClick={closeMenu}>{t.nav.skills}</a>
          <a href="#projects" onClick={closeMenu}>{t.nav.projects}</a>
          <a href="#education" onClick={closeMenu}>{t.nav.education}</a>
          <a href="#contact" onClick={closeMenu}>{t.nav.contact}</a>
        </div>

        <div className="nav-actions">
          <label className="language-selector" aria-label="Select portfolio language">
            <MdLanguage className="language-icon" />
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              aria-label="Language"
            >
              <option value="en">EN</option>
              <option value="de">DE</option>
            </select>
          </label>

          <a href="#contact" className="nav-contact">
            {t.nav.talk}
          </a>

          <button
            className={`menu-btn ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <main id="home" className="hero">
        <div className="hero-content reveal">
          <div className="available-badge">
            <span className="status-dot"></span>
            {t.hero.availability}
          </div>

          <p className="intro">{t.hero.intro}</p>

          <h1 className="hero-name">
            NUR
            <br />
            <span>ALAM.</span>
          </h1>

          <div className="typing-wrapper">
            <span className="typing-prefix">{t.hero.typingPrefix}</span>

            <span className="typing-text">
              {displayText}
              <span className="cursor">|</span>
            </span>
          </div>

          <p className="hero-description">{t.hero.description}</p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              {t.hero.explore}
              <span>↗</span>
            </a>

            <a href="#contact" className="secondary-btn">
              {t.hero.contact}
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>03</strong>
              <span>{t.hero.statProjects}</span>
            </div>

            <div>
              <strong>Full</strong>
              <span>{t.hero.statStack}</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>{t.hero.statLearning}</span>
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
              <p><span className="terminal-green">$</span> whoami</p>
              <p className="terminal-output">Nur Alam</p>

              <p><span className="terminal-green">$</span> role</p>
              <p className="terminal-output">{t.terminal.role}</p>

              <p><span className="terminal-green">$</span> skills</p>
              <p className="terminal-output terminal-array">
                ["React", "Node.js", "MySQL", "JavaScript"]
              </p>

              <p><span className="terminal-green">$</span> status</p>
              <p className="terminal-success">{t.terminal.status}</p>

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
          <span>{t.hero.scroll}</span>
          <div className="scroll-line"></div>
        </a>
      </main>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="section-heading reveal">
          <p>{t.about.eyebrow}</p>
          <h2>
            {t.about.title1}
            <br />
            <span>{t.about.title2}</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-large reveal">
            <p className="about-lead">{t.about.lead}</p>
            <p>{t.about.body}</p>

            <a href="#projects" className="text-link">
              {t.about.link}
              <span>→</span>
            </a>
          </div>

          <div className="about-card reveal">
            <p className="card-label">{t.about.focus}</p>

            {t.about.focusItems.map((item, index) => (
              <div className="focus-item" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="section-heading reveal">
          <p>{t.skills.eyebrow}</p>

          <h2>
            {t.skills.title1}
            <br />
            <span>{t.skills.title2}</span>
          </h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card reveal">
            <div className="skill-number">01</div>
            <h3>{t.skills.frontend}</h3>

            <div className="skill-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>{t.skills.responsive}</span>
            </div>
          </div>

          <div className="skill-card reveal">
            <div className="skill-number">02</div>
            <h3>{t.skills.backend}</h3>

            <div className="skill-tags">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST API</span>
              <span>JWT</span>
            </div>
          </div>

          <div className="skill-card reveal">
            <div className="skill-number">03</div>
            <h3>{t.skills.database}</h3>

            <div className="skill-tags">
              <span>MySQL</span>
              <span>SQL</span>
              <span>{t.skills.databaseDesign}</span>
            </div>
          </div>

          <div className="skill-card reveal">
            <div className="skill-number">04</div>
            <h3>{t.skills.tools}</h3>

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
          <p>{t.projects.eyebrow}</p>

          <h2>
            {t.projects.title1}
            <br />
            <span>{t.projects.title2}</span>
          </h2>
        </div>

        <div className="projects-container">
          {projects.map((project) => (
            <article
              className={`project-card reveal ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.number}
            >
              <div className="project-top">
                <span className="project-number">{project.number}</span>

                {project.featured && (
                  <span className="featured-label">{t.projects.featured}</span>
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

                <div className="project-actions">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link project-link-live"
                    >
                      <span>{t.projects.live}</span>
                      <strong>↗</strong>
                    </a>
                  ) : (
                    <span
                      className="project-link project-link-live project-link-disabled"
                      aria-label={`${project.title} ${t.projects.comingSoon}`}
                    >
                      <span>{t.projects.live}</span>
                      <small>{t.projects.comingSoon}</small>
                    </span>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link project-link-github"
                  >
                    <FaGithub />
                    <span>{t.projects.github}</span>
                    <strong>↗</strong>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section education-section">
        <div className="section-heading reveal">
          <p>{t.education.eyebrow}</p>

          <h2>
            {t.education.title1}
            <br />
            <span>{t.education.title2}</span>
          </h2>
        </div>

        <div className="education-card reveal">
          <div className="education-left">
            <span>{t.education.level}</span>
            <h3>{t.education.degree}</h3>
          </div>

          <div className="education-right">
            <p>{t.education.description}</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-content reveal">
          <p className="contact-small">{t.contact.eyebrow}</p>

          <h2 className="contact-title" aria-label={t.contact.aria}>
            <span className="contact-line contact-line-one">
              {t.contact.title1}
            </span>

            <span className="contact-line contact-line-two">
              {t.contact.title2a}
              <span className="great-text">{t.contact.title2b}</span>
            </span>
          </h2>

          <p className="contact-description">{t.contact.description}</p>

          <a href="mailto:nooralamb012@gmail.com" className="contact-button">
            <span>{t.contact.button}</span>
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
              <span>{t.contact.email}</span>
            </a>
          </div>
        </div>

        <footer>
          <p>© 2026 NUR ALAM</p>
          <p>{t.footer}</p>
        </footer>
      </section>
    </div>
  );
}

export default App;