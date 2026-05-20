import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleDot,
  Command,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import {
  experiences,
  heroSignals,
  pipelineSteps,
  projects,
} from "./content";
import type { Project } from "./content";

const navItems = [
  { label: "Overview", href: "#top" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Automation", href: "#automation" },
  { label: "Contact", href: "#contact" },
];

const commands = [
  { label: "Open project registry", href: "#projects" },
  { label: "View experience log", href: "#experience" },
  { label: "Inspect automation pipeline", href: "#automation" },
  { label: "Download resume", href: "/Neel_Bhansali_resume.pdf" },
  { label: "Email Neel", href: "mailto:neelbh99@gmail.com" },
  { label: "Open GitHub", href: "https://github.com/neel-bhan" },
  { label: "Open LinkedIn", href: "https://www.linkedin.com/in/neel-bhansali/" },
];

function App() {
  const [booted, setBooted] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const bootTimer = window.setTimeout(() => setBooted(true), 1350);
    return () => window.clearTimeout(bootTimer);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/" && !event.metaKey && !event.ctrlKey) {
        const target = event.target as HTMLElement | null;
        const isTyping =
          target?.tagName === "INPUT" ||
          target?.tagName === "TEXTAREA" ||
          target?.isContentEditable;

        if (!isTyping) {
          event.preventDefault();
          setCommandOpen(true);
        }
      }

      if (event.key === "Escape") {
        setCommandOpen(false);
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="site-shell">
      <motion.div className="scroll-progress" style={{ width: progressScale }} />
      <AmbientSystem />

      <AnimatePresence>{!booted && <BootSequence />}</AnimatePresence>

      <Header
        commandOpen={() => setCommandOpen(true)}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main>
        <Hero commandOpen={() => setCommandOpen(true)} />
        <ExperienceLog />
        <ProjectRegistry />
        <LeadershipNetwork />
        <AutomationPipeline />
        <ContactSection />
      </main>

      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />
    </div>
  );
}

function Header({
  commandOpen,
  mobileOpen,
  setMobileOpen,
}: {
  commandOpen: () => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}) {
  return (
    <header className="system-header">
      <a className="brand-mark" href="#top" aria-label="Living Portfolio System home">
        <span className="brand-orbit" />
        <span>
          <strong>Living Portfolio System</strong>
          <small>Neel Bhansali</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button className="icon-button" type="button" onClick={commandOpen} aria-label="Open command palette">
          <Command size={18} />
        </button>
        <a className="resume-button" href="/Neel_Bhansali_resume.pdf" target="_blank" rel="noreferrer">
          <FileText size={16} />
          Resume
        </a>
        <button
          className="icon-button mobile-menu"
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
                <ChevronRight size={16} />
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero({ commandOpen }: { commandOpen: () => void }) {
  return (
    <section id="top" className="hero-section section-grid">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.05 }}
      >
        <div className="system-pill">
          <span className="live-dot" />
          Auto-update pipeline in progress
        </div>
        <h1>
          A portfolio that behaves like a living system.
          <span> Built by Neel Bhansali.</span>
        </h1>
        <p>
          CS + Data Science student at UW-Madison building AI-assisted systems, full-stack products,
          ML prototypes, and technical communities. This site is designed as the interface for an
          evolving GitHub-aware portfolio manager.
        </p>

        <div className="hero-actions">
          <a className="primary-action" href="#projects">
            Enter project registry
            <ArrowRight size={18} />
          </a>
          <button className="secondary-action" type="button" onClick={commandOpen}>
            <Command size={17} />
            Command center
          </button>
        </div>
      </motion.div>

      <motion.div
        className="hero-system"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 1.25 }}
      >
        <div className="system-card">
          <div className="card-header">
            <span>Profile Index</span>
            <span className="mono">online</span>
          </div>
          <div className="neel-card">
            <img src="/profile_picture.jpg" alt="Neel Bhansali" />
            <div>
              <strong>Neel Bhansali</strong>
              <span>Full-stack + AI systems builder</span>
            </div>
          </div>
          <div className="profile-links" aria-label="Profile links">
            <a href="https://github.com/neel-bhan" target="_blank" rel="noreferrer">
              <Github size={16} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/neel-bhansali/" target="_blank" rel="noreferrer">
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a href="/Neel_Bhansali_resume.pdf" target="_blank" rel="noreferrer">
              <FileText size={16} />
              Resume
            </a>
          </div>

          <div className="signal-stack">
            {heroSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <motion.div
                  className="signal-row"
                  key={signal.label}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.45 + index * 0.1 }}
                >
                  <Icon size={18} />
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ProjectRegistry() {
  const featured = projects[0];
  const registry = projects.slice(1);

  return (
    <section id="projects" className="content-section">
      <SectionIntro
        eyebrow="Project registry"
        title="Curated builds with proof, context, and technical signal."
        body="Each project is treated as a record the future automation layer can update: metadata, screenshots, stack, impact, and highlights stay separate from the interface."
      />

      <Reveal>
        <article className={`featured-project accent-${featured.accent}`}>
          <div className="featured-copy">
            <div className="record-label">
              <CircleDot size={16} />
              featured record
            </div>
            <h3>{featured.title}</h3>
            <p>{featured.summary}</p>
            <div className="impact-line">
              <Sparkles size={18} />
              {featured.impact}
            </div>
            <TagList tags={featured.stack} />
          </div>
          <LivingPipelineVisual />
        </article>
      </Reveal>

      <div className="project-grid equal-card-grid">
        {registry.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.08} className="equal-card-shell">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <ProjectVisual project={project} compact />
      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.eyebrow}</span>
          <strong>{project.status}</strong>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul>
          {project.highlights.slice(0, 2).map((highlight) => (
            <li key={highlight}>
              <Check size={15} />
              {highlight}
            </li>
          ))}
        </ul>
        <TagList tags={project.stack.slice(0, 4)} />
      </div>
    </article>
  );
}

function LivingPipelineVisual() {
  const visualSteps = [
    { label: "GitHub", detail: "repo signal" },
    { label: "Context", detail: "metadata parse" },
    { label: "AI Draft", detail: "summary + tags" },
    { label: "Review", detail: "human pass" },
    { label: "PR", detail: "site change" },
    { label: "Deploy", detail: "live update" },
  ];
  const topPath =
    "M24 134 H32 V86 Q32 66 52 66 H148 Q168 66 168 86 V134 H182 V86 Q182 66 202 66 H298 Q318 66 318 86 V134 H332 V86 Q332 66 352 66 H448 Q468 66 468 86 V134 H482 V86 Q482 66 502 66 H598 Q618 66 618 86 V134 H632 V86 Q632 66 652 66 H748 Q768 66 768 86 V134 H782 V86 Q782 66 802 66 H898 Q918 66 918 86 V134 H928";
  const bottomPath =
    "M24 134 H32 V182 Q32 202 52 202 H148 Q168 202 168 182 V134 H182 V182 Q182 202 202 202 H298 Q318 202 318 182 V134 H332 V182 Q332 202 352 202 H448 Q468 202 468 182 V134 H482 V182 Q482 202 502 202 H598 Q618 202 618 182 V134 H632 V182 Q632 202 652 202 H748 Q768 202 768 182 V134 H782 V182 Q782 202 802 202 H898 Q918 202 918 182 V134 H928";

  return (
    <div className="living-pipeline-visual" aria-label="Animated GitHub to portfolio update pipeline">
      <div className="pipeline-hud">
        <span>automation pipeline</span>
        <span className="mono">live simulation</span>
      </div>
      <svg className="pipeline-map" viewBox="0 0 940 260" role="presentation">
        <defs>
          <linearGradient id="routeGlow" x1="0" x2="1">
            <stop offset="0%" stopColor="#4ade80" stopOpacity="0.15" />
            <stop offset="45%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
          <linearGradient id="routeGlowBlue" x1="0" x2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.15" />
            <stop offset="45%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path className="map-route map-route-base top" d={topPath} />
        <path className="map-route map-route-base bottom" d={bottomPath} />
        <path className="map-route map-route-hot green" d={topPath} />
        <path className="map-route map-route-hot blue" d={bottomPath} />

        {[0, 1, 2].map((packet) => (
          <rect className="map-packet green" key={`top-${packet}`} width="18" height="7" rx="3.5">
            <animateMotion dur="6s" begin={`${packet * 1.6}s`} repeatCount="indefinite" path={topPath} />
          </rect>
        ))}
        {[0, 1, 2].map((packet) => (
          <rect className="map-packet blue" key={`bottom-${packet}`} width="18" height="7" rx="3.5">
            <animateMotion dur="6s" begin={`${packet * 1.6}s`} repeatCount="indefinite" path={bottomPath} />
          </rect>
        ))}

        {visualSteps.map((step, index) => {
          const x = 40 + index * 150;
          const y = 74;
          return (
            <g className="map-stage" key={step.label} transform={`translate(${x} ${y})`}>
              <rect width="120" height="120" rx="18" />
              <text className="map-index" x="18" y="28">
                {String(index + 1).padStart(2, "0")}
              </text>
              <text className="map-label" x="18" y="66">
                {step.label}
              </text>
              <text className="map-detail" x="18" y="91">
                {step.detail}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="pipeline-console">
        <div className="console-row">
          <span className="mono">$ github.webhook.receive()</span>
          <strong>new project signal detected</strong>
        </div>
        <div className="console-row">
          <span className="mono">$ ai.summary.draft()</span>
          <strong>portfolio record generated</strong>
        </div>
        <div className="console-output">
          <span className="live-dot" />
          reviewed update ready for deploy
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={compact ? "project-visual compact" : "project-visual"}>
      {project.images.slice(0, 3).map((image, index) => (
        <motion.div
          className="visual-frame"
          key={image}
          style={{ zIndex: 4 - index }}
          whileHover={{ y: compact ? -4 : -8, rotate: index === 0 ? 0 : index % 2 ? -1.5 : 1.5 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
        >
          <img src={image} alt={`${project.title} screen ${index + 1}`} />
        </motion.div>
      ))}
    </div>
  );
}

function ExperienceLog() {
  return (
    <section id="experience" className="content-section">
      <SectionIntro
        eyebrow="Experience log"
        title="Backend, identity, AI education, and research signals."
        body="The experience layer keeps the same system language: each role is a logged event with context, technical surface area, and outcomes."
      />

      <div className="timeline">
        {experiences.map((experience, index) => (
          <Reveal key={experience.company} delay={index * 0.08}>
            <article className={`timeline-item accent-${experience.accent}`}>
              <div className="timeline-node" />
              <img src={experience.image} alt={experience.company} />
              <div className="timeline-copy">
                <div className="project-meta">
                  <span>{experience.date}</span>
                  <strong>{experience.location}</strong>
                </div>
                <h3>{experience.role}</h3>
                <h4>{experience.company}</h4>
                <p>{experience.summary}</p>
                <ul>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>
                      <Check size={15} />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <TagList tags={experience.stack} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function LeadershipNetwork() {
  return (
    <section className="content-section leadership-section">
      <SectionIntro
        eyebrow="Leadership network"
        title="AI for All connects the technical work to real people."
        body="AIFA is the community layer: workshops, curriculum, hackathons, and chapter growth that make AI education more accessible."
      />

      <Reveal>
        <div className="leadership-panel">
          <div className="leadership-copy">
            <img className="aifa-logo" src="/aifalogo.jpeg" alt="AI for All logo" />
            <h3>AI for All</h3>
            <p>
              Student-led non-profit expanding equitable access to modern AI education through
              hands-on workshops, project-based curricula, community events, and responsible AI
              learning.
            </p>
            <div className="metric-row">
              {[
                ["30+", "Chapters"],
                ["1,000+", "Students reached"],
                ["40+", "Workshops"],
                ["100+", "Hackathon participants"],
              ].map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="gallery-grid">
            <img src="/hackathonphoto.JPG" alt="AIFA hackathon session" />
            <img src="/grouppicture.JPG" alt="AIFA participant group" />
            <img src="/aifapresentation.JPG" alt="AIFA presentation" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function AutomationPipeline() {
  return (
    <section id="automation" className="content-section automation-section">
      <SectionIntro
        eyebrow="Automation layer"
        title="The portfolio is designed to update from GitHub signals."
        body="The public site is the interface. The next layer is a reviewed automation pipeline that turns new project work into structured portfolio updates."
      />

      <div className="pipeline-panel">
        {pipelineSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Reveal key={step.title} delay={index * 0.08}>
              <article className="pipeline-step">
                <div className="step-index">{String(index + 1).padStart(2, "0")}</div>
                <Icon size={23} />
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="content-section contact-section">
      <Reveal>
        <div className="contact-panel">
          <div>
            <span className="section-eyebrow">Contact protocol</span>
            <h2>Want to build something useful?</h2>
            <p>
              I am looking for software engineering opportunities where I can work on backend
              systems, AI-assisted tools, full-stack products, and automation-heavy workflows.
            </p>
          </div>
          <div className="contact-actions">
            <a className="primary-action" href="mailto:neelbh99@gmail.com">
              <Mail size={18} />
              Email me
            </a>
            <a className="secondary-action" href="/Neel_Bhansali_resume.pdf" target="_blank" rel="noreferrer">
              <FileText size={18} />
              Resume
            </a>
            <a className="secondary-action" href="https://github.com/neel-bhan" target="_blank" rel="noreferrer">
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const commandRows = useMemo(() => commands, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="command-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="command-palette"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="command-topline">
              <Command size={18} />
              <span>Command center</span>
              <button type="button" onClick={onClose} aria-label="Close command palette">
                <X size={18} />
              </button>
            </div>
            <div className="command-list">
              {commandRows.map((command) => (
                <a key={command.label} href={command.href} onClick={onClose}>
                  <span>{command.label}</span>
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SectionIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <Reveal>
      <div className="section-intro">
        <span className="section-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </Reveal>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function BootSequence() {
  const rows = ["indexing projects", "loading experience log", "arming GitHub sync", "system online"];

  return (
    <motion.div className="boot-screen" exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
      <div className="boot-card">
        <div className="boot-logo">
          <Sparkles size={22} />
        </div>
        {rows.map((row, index) => (
          <motion.div
            className="boot-row"
            key={row}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.22 }}
          >
            <span>{row}</span>
            <Check size={15} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function AmbientSystem() {
  return (
    <div className="ambient-system" aria-hidden="true">
      <div className="matte-field" />
    </div>
  );
}

export default App;
