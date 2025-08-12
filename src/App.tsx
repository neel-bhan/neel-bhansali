import { Download, Mail } from "lucide-react";
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

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg font-medium transition-all ${
        active
          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
          : "text-white/80 hover:text-white hover:bg-white/10"
      }`}
    >
      {children}
    </Link>
  );
}

function App() {
  return (
    <div className="relative w-full min-h-screen text-white bg-slate-900">
      {/* Background Animation */}
      <div className="fixed inset-0 pointer-events-none">
        <Squares
          speed={0.2}
          squareSize={35}
          direction="diagonal"
          borderColor="#0f1899"
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-white/10 bg-slate-900/80 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <Link to="/" className="text-xl font-bold text-white">
              Neel Bhansali
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-2">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/experience">Experience</NavLink>
              <NavLink to="/organizations">Organizations</NavLink>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex items-center gap-2 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10"
              >
                <Download size={16} />
                Resume
              </Button>
              <Button
                size="sm"
                className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium"
              >
                <Mail size={16} className="mr-2" />
                Contact
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden mt-4 flex justify-center gap-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/organizations">Orgs</NavLink>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {/* Home dashboard with previews */}

                {/* About Me */}
                <section className="flex flex-row backdrop-blur mt-4 rounded-xl border border-white/10 bg-slate-900/30 p-4">
                  <div>
                    <h2 className="text-lg font-semibold mb-3">About Me</h2>
                    <p className="text-sm opacity-90">
                      I'm Neel, a CS + Data Science student at UW–Madison (’27).
                      I enjoy building useful interfaces and AI-assisted
                      tools—from VR learning experiences to agentic planners.
                      I'm actively seeking SWE internships.
                    </p>
                  </div>
                  <div>
                    <img
                      className="max-w-30 rounded-2xl border-2 border-white/10 shadow-lg shadow-white/10 ml-10"
                      src="/profile_picture.jpg"
                      alt="Profile"
                    ></img>
                  </div>
                </section>
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
                      Agent that parses syllabi, tracks grades, and adapts study
                      plans with Canvas/GPA feedback.
                    </p>
                    <ul className="text-sm opacity-80 mt-2 list-disc pl-5 space-y-1">
                      <li>Fetches syllabus PDFs and extracts deadlines</li>
                      <li>
                        Builds calendar + reminders; re-plans after grades are
                        posted
                      </li>
                      <li>Integrates with Notion/Google Calendar (planned)</li>
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
                      Contributed across React frontend and .NET APIs, building
                      AD management UIs, MFA + SSPR flows, and configurable
                      security settings.
                    </p>
                    <ul className="text-sm opacity-80 mt-2 list-disc pl-5 space-y-1">
                      <li>Shipped custom forms and org-management modules</li>
                      <li>Improved backend endpoints for dynamic workflows</li>
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
                        className="flex flex-col px-2 py-1 w-25 h-20 rounded border border-white/10 bg-white/5 items-center gap-1.5"
                      >
                        <Icon className="opacity-90 p-1.5" size={40} />
                        {label}
                      </div>
                    ))}
                  </div>
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
                <div className="flex flex-col space-y-8">
                  <article className="rounded-xl border border-white/10 bg-slate-900/30 p-6 text-center">
                    <img
                      className="w-full max-w-md mx-auto mb-6 rounded-2xl border-4 border-white/10 shadow-lg shadow-white/10"
                      src="/sign_language.png"
                      alt="AI Sign Language Interpreter"
                    />
                    <h3 className="text-3xl font-bold mb-4">
                      AI Sign Language Interpreter
                    </h3>
                    <p className="text-lg opacity-90 mb-4">
                      Revolutionary real-time AI translator using advanced CNN
                      architecture and computer vision to bridge communication
                      gaps with high-precision gesture recognition and seamless
                      React frontend integration.
                      <br />
                      <br />
                      Developed with TensorFlow for deep learning capabilities,
                      featuring real-time video processing and gesture
                      classification. The system processes hand movements
                      through OpenCV and delivers instant translations with
                      Django REST API backend architecture.
                    </p>
                    <div className="flex justify-center gap-4 mt-6">
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                        Machine Learning
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        Real-time
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        Accessibility
                      </span>
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">
                        Computer Vision
                      </span>
                      <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">
                        TensorFlow
                      </span>
                      <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                        Django
                      </span>
                    </div>
                  </article>

                  <article className="rounded-xl border border-white/10 bg-slate-900/30 p-6 text-center">
                    <div className="flex flex-row justify-center gap-4 mb-6">
                      <img
                        className="w-full  invert max-w-5/16 mb-6 rounded-2xl border-4 border-white/10 shadow-lg"
                        src="/workout1.png"
                        alt="AI Workout Generator"
                      />
                      <img
                        className="w-full invert max-w-5/16 mb-6 rounded-2xl border-4 border-white/10 shadow-lg"
                        src="/workout2.png"
                        alt="AI Workout Generator"
                      />
                      <img
                        className="w-full invert max-w-5/16 mb-6 rounded-2xl border-4 border-white/10 shadow-lg"
                        src="/workout3.png"
                        alt="AI Workout Generator"
                      />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">
                      AI Workout Generator
                    </h3>
                    <p className="text-lg opacity-90 mb-4">
                      Intelligent fitness companion leveraging machine learning
                      algorithms to create personalized workout routines with
                      dynamic progress tracking and adaptive difficulty scaling
                      based on user performance metrics.
                      <br />
                      <br />
                      Features advanced decision tree algorithms that analyze
                      user fitness levels, goals, and equipment availability to
                      generate optimal exercise combinations. Built with Python
                      and scikit-learn for smart routine generation, integrated
                      with interactive dashboards for comprehensive fitness
                      analytics and progress visualization.
                    </p>
                    <div className="flex justify-center gap-4 mt-6">
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                        AI Planning
                      </span>
                      <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">
                        Health & Fitness
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        Python
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                        Machine Learning
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        Data Analytics
                      </span>
                    </div>
                  </article>

                  <article className="rounded-xl border border-white/10 bg-slate-900/30 p-6 text-center">
                    <div className="flex flex-row justify-center gap-4 mb-6">
                      <img
                        className="w-full  max-w-5/16 mb-6 rounded-2xl border-4 border-white/10 shadow-lg shadow-white/10"
                        src="/chef1.png"
                        alt="Chef's Arena"
                      />
                      <img
                        className="w-full max-w-5/16 mb-6 rounded-2xl border-4 border-white/10 shadow-lg shadow-white/10"
                        src="/chef2.png"
                        alt="Chef's Arena"
                      />
                      <img
                        className="w-full  max-w-5/16 mb-6 rounded-2xl border-4 border-white/10 shadow-lg shadow-white/10"
                        src="/chef3.png"
                        alt="Chef's Arena"
                      />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">
                      Chef's Arena - Kitchen Simulation Game
                    </h3>
                    <p className="text-lg opacity-90 mb-">
                      Immersive culinary simulation featuring advanced game
                      mechanics, realistic physics, and stunning 2D graphics
                      built with JavaFX and comprehensive object-oriented design
                      patterns.
                      <br />
                      <br />
                      Includes dynamic recipe management system with 50+
                      realistic cooking procedures, multi-threaded game engine
                      for smooth 60 FPS gameplay, and sophisticated scoring
                      algorithms. Features custom GUI components, particle
                      effects, and save/load functionality with JSON
                      serialization for persistent game progress.
                    </p>
                    <div className="flex justify-center gap-4 mt-6">
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">
                        Game Dev
                      </span>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                        JavaFX
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        Java
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        OOP Design
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                        GUI Development
                      </span>
                    </div>
                  </article>
                </div>
              </div>
            }
          />

          {/* Experience: vertical showcases */}
          <Route
            path="/experience"
            element={
              <div className="mt-4 space-y-8 backdrop-blur rounded-xl border border-white/10 bg-slate-900/30 p-6">
                <h2 className="text-xl font-semibold">Experience</h2>
                <div className="space-y-10">
                  {/* MiniOrange */}
                  <section className="grid md:grid-cols-[180px_1fr] gap-6 items-start rounded-xl border border-white/10 bg-white/5 p-5">
                    <div className="flex flex-col items-center gap-3">
                      <img
                        src="/miniOrange.jpeg"
                        alt="MiniOrange"
                        className="w-36 h-36 object-cover rounded-xl border border-white/10 shadow"
                      />
                      <a
                        href="https://www.miniorange.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs px-3 py-1 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25 transition"
                      >
                        Website →
                      </a>
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-lg">
                          Software Engineer Intern · MiniOrange
                        </h3>
                        <span className="text-xs opacity-70">Jun–Aug 2025</span>
                      </div>
                      <p className="text-sm opacity-80 leading-relaxed">
                        Identity & security platform internship focused on
                        directory tooling, MFA flows, and admin UX improvements
                        across React + .NET surfaces.
                      </p>
                      <ul className="text-sm opacity-85 space-y-1 list-disc pl-5">
                        <li>
                          Implemented Active Directory management UI (user
                          provisioning, group sync, policy toggles)
                        </li>
                        <li>
                          Extended .NET API endpoints to support dynamic MFA +
                          SSPR enrollment workflows
                        </li>
                        <li>
                          Optimized form rendering components reducing
                          validation latency & improving accessibility
                        </li>
                        <li>
                          Shipped configurable security settings panel (captcha,
                          session, lockout thresholds)
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {[
                          "React",
                          "TypeScript",
                          ".NET",
                          "MFA",
                          "Directory Services",
                          "API Design",
                        ].map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs border border-emerald-500/30"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Represented Collective */}
                  <section className="grid md:grid-cols-[180px_1fr] gap-6 items-start rounded-xl border border-white/10 bg-white/5 p-5">
                    <div className="flex flex-col items-center gap-3">
                      <img
                        src="/representedCollective.jpeg"
                        alt="Represented Collective"
                        className="w-36 h-36 object-cover rounded-xl border border-white/10 shadow"
                      />
                      <a
                        href="https://www.linkedin.com/company/representedcollective/posts/?feedView=all"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs px-3 py-1 rounded-md bg-blue-500/15 text-blue-300 border border-blue-500/30 hover:bg-blue-500/25 transition"
                      >
                        Updates →
                      </a>
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-lg">
                          Software Engineering Intern · Represented Collective
                        </h3>
                        <span className="text-xs opacity-70">Mar–May 2025</span>
                      </div>
                      <p className="text-sm opacity-80 leading-relaxed">
                        Early-stage team building immersive STEM learning
                        through VR chemistry experiences plus AI-guided
                        progressive tutoring.
                      </p>
                      <ul className="text-sm opacity-85 space-y-1 list-disc pl-5">
                        <li>
                          Built VR game progression logic integrating
                          AI-generated hints & scaffolded challenge levels
                        </li>
                        <li>
                          Hosted Node.js service (Render) aggregating OpenAI
                          responses & session persistence
                        </li>
                        <li>
                          Delivered full-stack web portal (React + MongoDB) for
                          user content & experiment logs
                        </li>
                        <li>
                          Iterated UX flows after analytics review to improve
                          engagement and retention
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {[
                          "React",
                          "Node.js",
                          "MongoDB",
                          "OpenAI",
                          "VR",
                          "Education Tech",
                        ].map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 text-xs border border-blue-500/30"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* UT Dallas Research */}
                  <section className="grid md:grid-cols-[180px_1fr] gap-6 items-start rounded-xl border border-white/10 bg-white/5 p-5">
                    <div className="flex flex-col items-center gap-3">
                      <img
                        src="/utd.jpeg"
                        alt="UT Dallas"
                        className="w-36 h-36 object-cover rounded-xl border border-white/10 shadow"
                      />
                      <a
                        href="https://www.linkedin.com/school/university-of-texas-at-dallas/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs px-3 py-1 rounded-md bg-orange-500/15 text-orange-300 border border-orange-500/30 hover:bg-orange-500/25 transition"
                      >
                        University →
                      </a>
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-lg">
                          Research Assistant · UT Dallas
                        </h3>
                        <span className="text-xs opacity-70">May–Jul 2022</span>
                      </div>
                      <p className="text-sm opacity-80 leading-relaxed">
                        Explored classical + deep learning approaches for
                        pattern recognition and biometric classification.
                      </p>
                      <ul className="text-sm opacity-85 space-y-1 list-disc pl-5">
                        <li>
                          Implemented comparative experiments: CNNs, LSTMs,
                          SVMs, RL agents, decision trees
                        </li>
                        <li>
                          Developed facial recognition prototype improving
                          identification accuracy over baseline
                        </li>
                        <li>
                          Preprocessed image datasets (augmentation,
                          normalization) to enhance generalization
                        </li>
                        <li>
                          Documented evaluation metrics & reproducible training
                          scripts
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {[
                          "Python",
                          "TensorFlow",
                          "Computer Vision",
                          "Model Evaluation",
                          "Data Prep",
                          "Research",
                        ].map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs border border-orange-500/30"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            }
          />

          <Route
            path="/organizations"
            element={
              <div className="mt-4 space-y-6 backdrop-blur rounded-xl border border-white/10 bg-slate-900/30 p-6">
                <h2 className="text-xl font-semibold">Organizations</h2>

                {/* AIFA Section */}
                <section className="space-y-10">
                  {/* Hero / Header */}
                  <div className="flex flex-col md:flex-row gap-8 md:items-center">
                    <div className="flex flex-col items-center md:items-start shrink-0">
                      <img
                        src="/aifalogo.jpeg"
                        alt="AI For All Logo"
                        className="w-40 h-40 object-contain rounded-xl border border-white/10 shadow-lg shadow-green-500/10 bg-black/40 p-3"
                      />
                      <a
                        href="https://www.linkedin.com/company/aifa-ai-for-all/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 text-xs px-3 py-1 rounded-md bg-green-500/20 hover:bg-green-500/30 text-green-300 border border-green-400/30 transition"
                      >
                        LinkedIn Page →
                      </a>
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-3xl font-bold">AI for All (AIFA)</h3>
                      <p className="text-lg opacity-90 leading-relaxed">
                        Student-led non-profit expanding equitable access to
                        modern AI education through hands-on workshops,
                        project-based curricula, and community-driven events. We
                        empower emerging technologists to explore machine
                        learning responsibly and creatively.
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {[
                          "AI Education",
                          "Curriculum Design",
                          "Community Outreach",
                          "Event Ops",
                          "Leadership",
                          "Ethical AI",
                        ].map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-green-500/15 text-green-300 text-xs border border-green-400/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Chapters", value: "30+" },
                      { label: "Students Reached", value: "1,000+" },
                      { label: "Workshops Run", value: "40+" },
                      { label: "Hackathon Participants", value: "100+" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl border border-white/10 bg-white/5 p-4 text-center flex flex-col gap-1"
                      >
                        <div className="text-2xl font-semibold text-green-300">
                          {s.value}
                        </div>
                        <div className="text-xs opacity-70 tracking-wide uppercase">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Image Gallery */}
                  <div>
                    <h4 className="text-sm font-semibold opacity-80 mb-3">
                      Gallery
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="relative group">
                        <img
                          src="/hackathonphoto.JPG"
                          alt="AIFA hackathon event"
                          className="w-full h-56 object-cover rounded-xl border border-white/10 shadow-lg shadow-green-500/10 group-hover:shadow-green-400/20 transition"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-3 text-xs tracking-wide">
                          Hackathon Session
                        </div>
                      </div>
                      <div className="relative group">
                        <img
                          src="/grouppicture.JPG"
                          alt="AIFA participant group"
                          className="w-full h-56 object-cover rounded-xl border border-white/10 shadow-lg shadow-green-500/10 group-hover:shadow-green-400/20 transition"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-3 text-xs tracking-wide">
                          Community Impact
                        </div>
                      </div>
                      <div className="relative group">
                        <img
                          src="/aifapresentation.JPG"
                          alt="AIFA branding"
                          className="w-full h-56 object-cover rounded-xl border border-white/10 shadow-lg shadow-green-500/10 group-hover:shadow-green-400/20 transition"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-3 text-xs tracking-wide">
                          Brand Identity
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Impact / Activities */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold opacity-80">
                        Key Initiatives
                      </h4>
                      <ul className="text-sm opacity-85 space-y-2 list-disc pl-5">
                        <li>
                          Modular ML curriculum: fundamentals → model deployment
                        </li>
                        <li>
                          Beginner-friendly labs on vision, NLP, and ethics
                        </li>
                        <li>
                          Annual hackathon fostering rapid prototyping &
                          collaboration
                        </li>
                        <li>
                          Mentorship pairing newer learners with experienced
                          contributors
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold opacity-80">
                        My Contributions
                      </h4>
                      <ul className="text-sm opacity-85 space-y-2 list-disc pl-5">
                        <li>
                          Co-authored workshop decks & hands-on project guides
                        </li>
                        <li>
                          Structured chapter launch playbook & onboarding
                          process
                        </li>
                        <li>Coordinated speaker outreach & event logistics</li>
                        <li>
                          Iterated feedback loop to improve session engagement
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Call To Action */}
                  <div className="mt-2 flex flex-col md:flex-row gap-4 md:items-center md:justify-between rounded-xl border border-green-500/20 bg-green-500/5 p-5">
                    <div className="text-sm opacity-85 max-w-xl">
                      Always looking to partner with schools & organizations
                      interested in launching new chapters or co-hosting
                      workshops.
                    </div>
                    <a
                      href="https://www.linkedin.com/company/aifa-ai-for-all/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-gradient-to-r from-green-400 to-emerald-500 text-sm font-medium text-black shadow hover:brightness-110 transition"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </section>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
