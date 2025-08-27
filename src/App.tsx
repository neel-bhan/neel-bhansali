import { Download, Mail } from "lucide-react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";

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
import Aurora from "./components/Aurora/Aurora";

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
        {/* <Squares
          speed={0.2}
          squareSize={35}
          direction="diagonal"
          borderColor="#0f1899"
        /> */}
        <Aurora
          colorStops={["#10b981", "#3b82f6", "#059669"]}
          blend={0.3}
          amplitude={0.8}
          speed={0.3}
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
              <a
                href="/Neel Bhansali Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium"
                >
                  <Download size={16} />
                  Resume
                </Button>
              </a>
              <Button
                size="sm"
                className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium"
                onClick={() =>
                  window.open(
                    "mailto:neelbh99@gmail.com?subject=Let's Connect!&body=Hi Neel,%0D%0A%0D%0AI saw your portfolio and would like to connect.%0D%0A%0D%0APhone: 817-659-4024",
                    "_blank"
                  )
                }
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
                        <a
                          className="hover:underline"
                          href="/Neel Bhansali Resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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

          {/* Projects: Enhanced visual showcase */}
          <Route
            path="/projects"
            element={
              <div className="mt-4 space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-4">
                    Featured Projects
                  </h2>
                  <p className="text-lg text-white/70 max-w-2xl mx-auto">
                    Discover my latest work in software engineering, AI, and web development
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* College Resale Platform - Featured */}
                  <article className="lg:col-span-2 group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Hero Image */}
                    <div className="relative h-64 lg:h-80 overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src="/campus-resale-home.png"
                        alt="Campus Resale Platform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-emerald-500/90 text-white text-sm font-medium rounded-full backdrop-blur">
                          ⭐ Featured Project
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          College Resale Platform
                        </h3>
                        <div className="flex gap-2">
                          <img
                            className="w-16 h-16 rounded-lg border-2 border-white/20 hover:border-emerald-500/50 transition-all cursor-pointer transform hover:scale-110"
                            src="/campus-resale-dashboard.png"
                            alt="Dashboard"
                          />
                          <img
                            className="w-16 h-16 rounded-lg border-2 border-white/20 hover:border-emerald-500/50 transition-all cursor-pointer transform hover:scale-110"
                            src="/campus-resale-login.png"
                            alt="Login"
                          />
                        </div>
                      </div>
                      
                      <p className="text-lg text-white/80 leading-relaxed mb-6">
                        University-exclusive marketplace connecting students for textbooks and sports tickets. 
                        Features automated email verification, geolocation search, real-time chat, and WebSocket 
                        notifications with web scraping for live sporting events.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                          <h4 className="font-semibold text-emerald-400 mb-2">🔐 Security</h4>
                          <p className="text-sm text-white/70">Email verification & campus-only access</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                          <h4 className="font-semibold text-blue-400 mb-2">⚡ Real-time</h4>
                          <p className="text-sm text-white/70">WebSocket chat & live notifications</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                          <h4 className="font-semibold text-purple-400 mb-2">🌐 Full-stack</h4>
                          <p className="text-sm text-white/70">React + Node.js + PostgreSQL</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                          React
                        </span>
                        <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium border border-indigo-500/30">
                          TypeScript
                        </span>
                        <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                          Node.js
                        </span>
                        <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                          PostgreSQL
                        </span>
                        <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30">
                          WebSockets
                        </span>
                      </div>
                    </div>
                  </article>

                  {/* AI Portfolio Updater */}
                  <article className="group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative h-48 overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src="/password-rotation-agent.png"
                        alt="AI Portfolio Updater"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-purple-500/90 text-white text-sm font-medium rounded-full backdrop-blur">
                          🤖 AI Powered
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors mb-4">
                        Agentic Portfolio Updater
                      </h3>
                      
                      <p className="text-white/80 leading-relaxed mb-6">
                        AI-powered automation that detects GitHub repos via webhooks, generates summaries with OpenAI, 
                        and creates portfolio PRs with AWS infrastructure and CI/CD validation.
                      </p>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <h4 className="font-semibold text-purple-400 mb-1 text-sm">🔄 Automation</h4>
                          <p className="text-xs text-white/70">GitHub webhooks + AI summaries</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <h4 className="font-semibold text-orange-400 mb-1 text-sm">☁️ AWS Stack</h4>
                          <p className="text-xs text-white/70">Lambda, SQS, S3 integration</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-medium border border-emerald-500/30">
                          AI Agent
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">
                          Next.js
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
                          OpenAI API
                        </span>
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-medium border border-orange-500/30">
                          AWS Lambda
                        </span>
                      </div>
                    </div>
                  </article>

                  {/* Sign Language Interpreter */}
                  <article className="group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative h-48 overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src="/sign_language.png"
                        alt="AI Sign Language Interpreter"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-green-500/90 text-white text-sm font-medium rounded-full backdrop-blur">
                          🎯 Real-time AI
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors mb-4">
                        AI Sign Language Interpreter
                      </h3>
                      
                      <p className="text-white/80 leading-relaxed mb-6">
                        Revolutionary real-time translator using CNN architecture and computer vision 
                        for high-precision gesture recognition with seamless React integration.
                      </p>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <h4 className="font-semibold text-green-400 mb-1 text-sm">👁️ Computer Vision</h4>
                          <p className="text-xs text-white/70">OpenCV + TensorFlow CNN</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <h4 className="font-semibold text-blue-400 mb-1 text-sm">♿ Accessibility</h4>
                          <p className="text-xs text-white/70">Real-time translation</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-medium border border-emerald-500/30">
                          Machine Learning
                        </span>
                        <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs font-medium border border-red-500/30">
                          TensorFlow
                        </span>
                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium border border-indigo-500/30">
                          Django
                        </span>
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-medium border border-yellow-500/30">
                          Computer Vision
                        </span>
                      </div>
                    </div>
                  </article>

                  {/* AI Workout Generator */}
                  <article className="group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative h-48 overflow-hidden">
                      <div className="grid grid-cols-3 h-full">
                        <img
                          className="w-full h-full object-cover invert transition-transform duration-700 group-hover:scale-105"
                          src="/workout1.png"
                          alt="AI Workout Generator"
                        />
                        <img
                          className="w-full h-full object-cover invert transition-transform duration-700 group-hover:scale-105"
                          src="/workout2.png"
                          alt="AI Workout Generator"
                        />
                        <img
                          className="w-full h-full object-cover invert transition-transform duration-700 group-hover:scale-105"
                          src="/workout3.png"
                          alt="AI Workout Generator"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-orange-500/90 text-white text-sm font-medium rounded-full backdrop-blur">
                          🏋️ Fitness AI
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors mb-4">
                        AI Workout Generator
                      </h3>
                      
                      <p className="text-white/80 leading-relaxed mb-6">
                        Intelligent fitness companion using ML algorithms for personalized routines 
                        with adaptive difficulty scaling based on user performance metrics.
                      </p>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <h4 className="font-semibold text-orange-400 mb-1 text-sm">🧠 Smart Planning</h4>
                          <p className="text-xs text-white/70">Decision tree algorithms</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <h4 className="font-semibold text-purple-400 mb-1 text-sm">📊 Analytics</h4>
                          <p className="text-xs text-white/70">Progress visualization</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-medium border border-orange-500/30">
                          AI Planning
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">
                          Python
                        </span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium border border-green-500/30">
                          Machine Learning
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
                          Data Analytics
                        </span>
                      </div>
                    </div>
                  </article>

                  {/* Chef's Arena Game */}
                  <article className="group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl hover:border-yellow-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative h-48 overflow-hidden">
                      <div className="grid grid-cols-3 h-full">
                        <img
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          src="/chef1.png"
                          alt="Chef's Arena"
                        />
                        <img
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          src="/chef2.png"
                          alt="Chef's Arena"
                        />
                        <img
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          src="/chef3.png"
                          alt="Chef's Arena"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-yellow-500/90 text-black text-sm font-medium rounded-full backdrop-blur">
                          🎮 Game Dev
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-4">
                        Chef's Arena - Kitchen Simulation
                      </h3>
                      
                      <p className="text-white/80 leading-relaxed mb-4">
                        Immersive culinary simulation with advanced game mechanics, realistic physics, 
                        and stunning 2D graphics built with JavaFX and OOP design patterns.
                      </p>

                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-6">
                        <p className="text-yellow-300 text-sm italic">
                          "Aaron liked my project btw" 😊
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <h4 className="font-semibold text-yellow-400 mb-1 text-sm">🎯 Performance</h4>
                          <p className="text-xs text-white/70">60 FPS multi-threaded engine</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <h4 className="font-semibold text-orange-400 mb-1 text-sm">🍳 Content</h4>
                          <p className="text-xs text-white/70">50+ realistic recipes</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-medium border border-yellow-500/30">
                          Game Dev
                        </span>
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-medium border border-orange-500/30">
                          JavaFX
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">
                          Java
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
                          OOP Design
                        </span>
                      </div>
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
