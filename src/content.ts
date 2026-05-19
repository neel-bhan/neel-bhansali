import {
  Activity,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  eyebrow: string;
  status: string;
  type: string;
  summary: string;
  impact: string;
  images: string[];
  stack: string[];
  highlights: string[];
  accent: string;
};

export type Experience = {
  company: string;
  role: string;
  date: string;
  location: string;
  image: string;
  summary: string;
  highlights: string[];
  stack: string[];
  accent: string;
};

export type Signal = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export const heroSignals: Signal[] = [
  { label: "Focus", value: "AI systems, full-stack products, ML", icon: BrainCircuit },
  { label: "Status", value: "Seeking SWE internships", icon: Activity },
  { label: "Base", value: "CS + Data Science @ UW-Madison", icon: GraduationCap },
  { label: "Current build", value: "Auto-updating portfolio engine", icon: WandSparkles },
];

export const projects: Project[] = [
  {
    id: "living-portfolio-system",
    title: "Living Portfolio System",
    eyebrow: "Portfolio infrastructure",
    status: "In progress",
    type: "AI automation",
    summary:
      "A GitHub-aware portfolio manager designed to detect new technical work, draft structured project updates with AI, and prepare reviewed website changes.",
    impact:
      "Turns the portfolio itself into a product: a curated interface that can keep pace with what I build.",
    images: ["/password-rotation-agent.png", "/campus-resale-dashboard.png"],
    stack: ["React", "TypeScript", "GitHub API", "OpenAI API", "GitHub Actions"],
    highlights: [
      "Designed around a GitHub to AI summary to review to deploy pipeline",
      "Uses structured project records so automation can update content safely",
      "Keeps a human review layer before publishing anything public",
    ],
    accent: "cyan",
  },
  {
    id: "college-resale-platform",
    title: "College Resale Platform",
    eyebrow: "Featured build",
    status: "Built",
    type: "Full-stack marketplace",
    summary:
      "University-exclusive marketplace connecting students for textbooks and sports tickets with campus verification, geolocation search, live chat, and event scraping.",
    impact:
      "Built the core product loop for trusted student-to-student buying, selling, and ticket discovery.",
    images: ["/campus-resale-home.png", "/campus-resale-dashboard.png", "/campus-resale-login.png"],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSockets"],
    highlights: [
      "Automated school email verification for campus-only access",
      "Implemented real-time chat and notification flows through WebSockets",
      "Added geolocation search and scraping for live sporting events",
    ],
    accent: "emerald",
  },
  {
    id: "sign-language-interpreter",
    title: "AI Sign Language Interpreter",
    eyebrow: "Computer vision",
    status: "Prototype",
    type: "ML accessibility tool",
    summary:
      "Real-time sign language translator using computer vision and CNN-based gesture recognition with a React-facing interface.",
    impact:
      "Explored accessibility-focused ML by turning hand gestures into an interactive translation workflow.",
    images: ["/sign_language.png"],
    stack: ["Python", "TensorFlow", "OpenCV", "Django", "React"],
    highlights: [
      "Built a CNN gesture-recognition pipeline for real-time classification",
      "Integrated model output into a web experience for immediate feedback",
      "Focused the interface on fast interpretation and accessibility",
    ],
    accent: "lime",
  },
  {
    id: "ai-workout-generator",
    title: "AI Workout Generator",
    eyebrow: "Personalization engine",
    status: "Built",
    type: "Fitness planning app",
    summary:
      "Intelligent fitness companion that uses ML-style planning logic to generate personalized routines and adapt difficulty from user performance signals.",
    impact:
      "Experimented with adaptive recommendations and progress-aware workout planning.",
    images: ["/workout1.png", "/workout2.png", "/workout3.png"],
    stack: ["Python", "Machine Learning", "Data Analytics", "Planning Logic"],
    highlights: [
      "Generated routines from goals, constraints, and performance feedback",
      "Used decision-tree style logic for adaptive difficulty scaling",
      "Designed simple progress views for workout tracking",
    ],
    accent: "orange",
  },
  {
    id: "chefs-arena",
    title: "Chef's Arena",
    eyebrow: "Game systems",
    status: "Built",
    type: "JavaFX simulation",
    summary:
      "Kitchen simulation game with real-time mechanics, recipe systems, and object-oriented JavaFX architecture.",
    impact:
      "Built an interactive game loop while practicing production-style OOP design and UI state management.",
    images: ["/chef1.png", "/chef2.png", "/chef3.png"],
    stack: ["Java", "JavaFX", "OOP Design", "Game Dev"],
    highlights: [
      "Built a 60 FPS multi-threaded style gameplay loop",
      "Modeled 50+ recipe interactions and kitchen actions",
      "Structured game entities around reusable OOP patterns",
    ],
    accent: "amber",
  },
];

export const experiences: Experience[] = [
  {
    company: "DraftKings",
    role: "Software Engineer Intern, Backend",
    date: "Jun 2026 - Aug 2026",
    location: "Boston, MA",
    image: "/draft_kings.jpg",
    summary:
      "Incoming backend engineering intern on the Online Sportsbook team, working with C# and .NET systems.",
    highlights: [
      "Joining the Online Sportsbook backend engineering team",
      "Expected focus on C#/.NET services and production backend workflows",
    ],
    stack: ["C#", ".NET", "Backend Engineering", "Sportsbook"],
    accent: "lime",
  },
  {
    company: "MiniOrange",
    role: "Software Engineer Intern",
    date: "Jun 2025 - Aug 2025",
    location: "Remote / India",
    image: "/miniOrange.jpeg",
    summary:
      "Identity and security platform internship focused on directory tooling, MFA flows, admin UX, React surfaces, and .NET APIs.",
    highlights: [
      "Implemented Active Directory management UI for provisioning, group sync, and policy toggles",
      "Extended .NET API endpoints for dynamic MFA and SSPR enrollment workflows",
      "Shipped configurable security settings for captcha, sessions, and lockout thresholds",
    ],
    stack: ["React", "TypeScript", ".NET", "MFA", "Directory Services"],
    accent: "emerald",
  },
  {
    company: "Represented Collective",
    role: "Software Engineering Intern",
    date: "Mar 2025 - May 2025",
    location: "Remote",
    image: "/representedCollective.jpeg",
    summary:
      "Built immersive STEM learning experiences through VR chemistry interactions and AI-guided progressive tutoring.",
    highlights: [
      "Built VR game progression logic with AI-generated hints and scaffolded challenge levels",
      "Hosted a Node.js service aggregating OpenAI responses and session persistence",
      "Delivered a React and MongoDB portal for user content and experiment logs",
    ],
    stack: ["React", "Node.js", "MongoDB", "OpenAI", "VR"],
    accent: "blue",
  },
  {
    company: "UT Dallas",
    role: "Research Assistant",
    date: "May 2022 - Jul 2022",
    location: "Richardson, TX",
    image: "/utd.jpeg",
    summary:
      "Explored classical and deep learning approaches for pattern recognition, biometric classification, and facial recognition prototypes.",
    highlights: [
      "Implemented comparative experiments across CNNs, LSTMs, SVMs, RL agents, and decision trees",
      "Preprocessed image datasets with augmentation and normalization",
      "Documented evaluation metrics and reproducible training scripts",
    ],
    stack: ["Python", "TensorFlow", "Computer Vision", "Research"],
    accent: "orange",
  },
];

export const capabilities: Signal[] = [
  { label: "Ship products", value: "Full-stack apps with real user flows", icon: Rocket },
  { label: "Design systems", value: "APIs, data models, and automation paths", icon: Network },
  { label: "Build securely", value: "Identity, MFA, backend workflow thinking", icon: ShieldCheck },
  { label: "Work with data", value: "ML prototypes, analysis, and model evaluation", icon: Database },
  { label: "Lead communities", value: "Curriculum, workshops, and AI access", icon: Users },
  { label: "Prototype fast", value: "Turning rough ideas into usable tools", icon: Code2 },
];

export const pipelineSteps = [
  {
    title: "Watch GitHub",
    detail: "New repos, README updates, topics, languages, and meaningful commits are treated as project signals.",
    icon: Network,
  },
  {
    title: "Extract Context",
    detail: "The system collects repo metadata and separates portfolio-worthy work from experiments.",
    icon: Database,
  },
  {
    title: "Draft With AI",
    detail: "AI converts raw technical details into concise summaries, stack tags, and highlight bullets.",
    icon: Sparkles,
  },
  {
    title: "Review Before Publish",
    detail: "A pull request keeps the final portfolio curated instead of auto-posting every repo.",
    icon: ShieldCheck,
  },
  {
    title: "Deploy The Update",
    detail: "Approved project records rebuild the site and keep the public portfolio fresh.",
    icon: BriefcaseBusiness,
  },
];
