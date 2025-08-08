import {
  Home as HomeIcon,
  LayoutDashboard,
  Bell,
  Search,
  User,
  Briefcase,
  FolderGit2,
  Building2, // org-style icon for AIFA
} from "lucide-react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import Squares from "./components/Squares/Squares";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiDotnet,
  SiDjango,
  SiMongodb,
  SiTensorflow,
  SiPytorch,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

function SidebarLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      className={`w-full flex items-center gap-2 rounded-md px-3 py-2 text-sm transition ${
        active ? "bg-white/15" : "hover:bg-white/10"
      }`}
    >
      {children}
    </Link>
  );
}

function App() {
  const navItems = [
    { label: "Home", to: "/", icon: HomeIcon },
    { label: "Projects", to: "/projects", icon: FolderGit2 },
    { label: "Experience", to: "/experience", icon: Briefcase },
    { label: "Organizations", to: "/organizations", icon: Building2 }, // changed icon
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      {/* Background (subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <Squares
          speed={0.2}
          squareSize={35}
          direction="diagonal"
          borderColor="#0f1899"
        />
      </div>

      {/* App Shell */}
      <div className="flex h-full min-h-screen">
        {/* Sidebar */}
        <aside className="md:flex w-60 flex-col m-2 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur p-4 h-[96vh] max-h-[900px]">
          <div className="text-lg font-semibold mb-6 flex items-center gap-2">
            <LayoutDashboard size={18} />
            <span>Neel Bhansali</span>
          </div>
          <nav className="space-y-1">
            {navItems.map(({ label, to, icon: Icon }) => (
              <SidebarLink key={label} to={to}>
                <Icon size={16} />
                <span>{label}</span>
              </SidebarLink>
            ))}
          </nav>
          <div className="mt-auto pt-4 text-xs opacity-80 space-y-1">
            <div>817-659-4024</div>
            <div>neelbh99@gmail.com</div>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/neel-bhansali-506a42265/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/neel-bhan"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://neelbhansali.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Website
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 h-full p-4 md:p-5 ml-0">
          {/* Top Bar */}
          <header className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur p-3">
            <div className="flex items-center gap-2 text-sm opacity-80">
              <LayoutDashboard size={18} />
              <span>Portfolio</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60"
                  size={16}
                />
                <input
                  placeholder="Search..."
                  className="h-9 w-56 md:w-72 bg-white/5 border border-white/10 rounded-md pl-9 pr-3 text-sm outline-none placeholder-white/50"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/5 border border-white/10 hover:bg-white/10"
              >
                <Bell size={16} />
              </Button>
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                <User size={16} />
              </div>
            </div>
          </header>

          <Routes>
            <Route
              path="/"
              element={
                <div>
                  {/* Home dashboard with previews */}
                  <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                    {/* Featured Project */}
                    <div className="backdrop-blur rounded-xl border border-white/10 bg-slate-900/30 p-4">
                      <h3 className="text-sm opacity-70 mb-2">
                        Featured Project
                      </h3>
                      <p className="text-lg font-semibold">
                        Agentic Study Planner (WIP)
                      </p>
                      <p className="text-sm opacity-80 mt-1">
                        Agent that parses syllabi, tracks grades, and adapts
                        study plans with Canvas/GPA feedback.
                      </p>
                      <ul className="text-sm opacity-80 mt-2 list-disc pl-5 space-y-1">
                        <li>Fetches syllabus PDFs and extracts deadlines</li>
                        <li>
                          Builds calendar + reminders; re-plans after grades are
                          posted
                        </li>
                        <li>
                          Integrates with Notion/Google Calendar (planned)
                        </li>
                      </ul>
                      <div className="mt-3 flex gap-3">
                        <Link
                          to="/projects"
                          className="text-emerald-300 hover:underline"
                        >
                          See projects →
                        </Link>
                      </div>
                    </div>

                    {/* Latest Experience */}
                    <div className="backdrop-blur rounded-xl border border-white/10 bg-slate-900/30 p-4">
                      <h3 className="text-sm opacity-70 mb-2">
                        Latest Experience
                      </h3>
                      <p className="text-lg font-semibold">
                        Software Engineer Intern · MiniOrange
                      </p>
                      <p className="text-sm opacity-80 mt-1">
                        Contributed across React frontend and .NET APIs,
                        building AD management UIs, MFA + SSPR flows, and
                        configurable security settings.
                      </p>
                      <ul className="text-sm opacity-80 mt-2 list-disc pl-5 space-y-1">
                        <li>Shipped custom forms and org-management modules</li>
                        <li>
                          Improved backend endpoints for dynamic workflows
                        </li>
                        <li>
                          Collaborated with designers to refine UX and
                          accessibility
                        </li>
                      </ul>
                      <div className="mt-3">
                        <Link
                          to="/experience"
                          className="text-emerald-300 hover:underline"
                        >
                          See experience →
                        </Link>
                      </div>
                    </div>

                    {/* Quick Links */}
                    <div className="backdrop-blur rounded-xl border border-white/10 bg-slate-900/30 p-4">
                      <h3 className="text-sm opacity-70 mb-2">Quick Links</h3>
                      <ul className="text-sm space-y-1 opacity-90">
                        <li>
                          <a className="hover:underline" href="#">
                            Resume (PDF)
                          </a>
                        </li>
                        <li>
                          <a
                            className="hover:underline"
                            href="mailto:neelbh99@gmail.com"
                          >
                            Email
                          </a>
                        </li>
                        <li>
                          <a className="hover:underline" href="#">
                            Calendly
                          </a>
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* Tech Stack */}
                  <section className="backdrop-blur mt-6 rounded-xl border border-white/10 bg-slate-900/30 p-4">
                    <h2 className="text-lg font-semibold mb-3">Tech Stack</h2>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {[
                        { label: "Java", Icon: FaJava },
                        { label: "Python", Icon: SiPython },
                        { label: "TensorFlow", Icon: SiTensorflow },
                        { label: "PyTorch", Icon: SiPytorch },
                        { label: "JavaScript", Icon: SiJavascript },
                        { label: "TypeScript", Icon: SiTypescript },
                        { label: "React", Icon: SiReact },
                        { label: "Node.js", Icon: SiNodedotjs },
                        { label: ".NET", Icon: SiDotnet },
                        { label: "Django", Icon: SiDjango },
                        { label: "MongoDB", Icon: SiMongodb },
                        { label: "JavaFX", Icon: FaJava },
                        { label: "Git", Icon: SiGit },
                      ].map(({ label, Icon }) => (
                        <div
                          key={label}
                          className="flex flex-col px-2 py-1 w-25 h-20 rounded border border-white/10 bg-white/5 inline-flex items-center gap-1.5"
                        >
                          <Icon className="opacity-90 p-1.5" size={40} />
                          {label}
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* About Me */}
                  <section className="backdrop-blur mt-6 rounded-xl border border-white/10 bg-slate-900/30 p-4">
                    <h2 className="text-lg font-semibold mb-3">About Me</h2>
                    <p className="text-sm opacity-90">
                      I'm Neel, a CS + Data Science student at UW–Madison (’27).
                      I enjoy building useful interfaces and AI-assisted
                      tools—from VR learning experiences to agentic planners.
                      I'm actively seeking SWE internships.
                    </p>
                  </section>
                </div>
              }
            />

            {/* Projects: vertical showcases */}
            <Route
              path="/projects"
              element={
                <div className="mt-4 space-y-4 backdrop-blur rounded-xl border border-white/10 bg-slate-900/30 p-4">
                  <h2 className="text-xl font-semibold">Projects</h2>
                  <div className="space-y-4">
                    <article className="rounded-xl border border-white/10 bg-slate-900/30 p-4">
                      <h3 className="font-medium">
                        Agentic Study Planner (WIP)
                      </h3>
                      <p className="text-sm opacity-80 mt-1">
                        Autonomous agents fetch syllabi, parse assignments, and
                        adapt plans with GPA feedback. Planned integrations:
                        Canvas API, Notion, GCal.
                      </p>
                    </article>
                    <article className="rounded-xl border border-white/10 bg-slate-900/30 p-4">
                      <h3 className="font-medium">
                        AI Sign Language Interpreter
                      </h3>
                      <p className="text-sm opacity-80 mt-1">
                        CNN-based classifier with React + Django for real-time
                        translation.
                      </p>
                    </article>
                    <article className="rounded-xl border border-white/10 bg-slate-900/30 p-4">
                      <h3 className="font-medium">AI Workout Generator</h3>
                      <p className="text-sm opacity-80 mt-1">
                        Decision-tree routine planner with progress
                        visualizations.
                      </p>
                    </article>
                    <article className="rounded-xl border border-white/10 bg-slate-900/30 p-4">
                      <h3 className="font-medium">Chef's Arena (JavaFX)</h3>
                      <p className="text-sm opacity-80 mt-1">
                        Kitchen simulation game with GUI built in Java/JavaFX.
                      </p>
                    </article>
                  </div>
                </div>
              }
            />

            {/* Experience: vertical showcases */}
            <Route
              path="/experience"
              element={
                <div className="mt-4 space-y-4 backdrop-blur rounded-xl border border-white/10 bg-slate-900/30 p-4">
                  <h2 className="text-xl font-semibold">Experience</h2>
                  <div className="space-y-4">
                    <section className="rounded-xl border border-white/10 bg-slate-900/30 p-4">
                      <h3 className="font-medium">
                        Software Engineer Intern · MiniOrange (Jun–Aug 2025)
                      </h3>
                      <ul className="text-sm opacity-90 list-disc pl-5 space-y-1 mt-1">
                        <li>
                          Shipped React features (custom forms, org mgmt,
                          captcha settings)
                        </li>
                        <li>
                          Maintained .NET APIs powering dynamic flows; improved
                          AD tooling
                        </li>
                        <li>
                          Enhanced UX with MFA and self-service password reset
                        </li>
                      </ul>
                    </section>
                    <section className="rounded-xl border border-white/10 bg-slate-900/30 p-4">
                      <h3 className="font-medium">
                        Software Engineering Intern · Represented Collective
                        (Mar–May 2025)
                      </h3>
                      <ul className="text-sm opacity-90 list-disc pl-5 space-y-1 mt-1">
                        <li>
                          Full-stack dev for VR chemistry game with AI-based
                          progressive learning
                        </li>
                        <li>
                          Hosted Node.js server on Render; chained OpenAI
                          responses
                        </li>
                        <li>Built and maintained React + MongoDB website</li>
                      </ul>
                    </section>
                    <section className="rounded-xl border border-white/10 bg-slate-900/30 p-4">
                      <h3 className="font-medium">
                        Research Assistant · UT Dallas (May–Jul 2022)
                      </h3>
                      <ul className="text-sm opacity-90 list-disc pl-5 space-y-1 mt-1">
                        <li>CNNs, LSTMs, SVMs, RL, decision trees</li>
                        <li>Implemented face recognition using ML</li>
                      </ul>
                    </section>
                  </div>
                </div>
              }
            />

            <Route
              path="/organizations"
              element={
                <div className="mt-4 space-y-4 backdrop-blur rounded-xl border border-white/10 bg-slate-900/30 p-4">
                  <h2 className="text-xl font-semibold">AI for All (AIFA)</h2>
                  <p className="text-sm opacity-80">
                    Non-profit work: curriculum, workshops, hackathons, and 30+
                    chapters.
                  </p>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
