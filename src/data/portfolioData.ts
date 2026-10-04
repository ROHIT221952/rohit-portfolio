import { Project, ExperienceItem, EducationItem, CertificationItem, SkillItem, StatItem, WorkflowStep } from '../types';

export const PERSONAL_INFO = {
  name: "Rohit Kumar",
  title: "MERN Stack Foundations | Full Stack Developer",
  shortTitle: "Full-Stack Dev · WordPress · SEO",
  primaryRole: "MERN Stack Foundations | Full Stack Developer",
  secondaryRole: "Digital Marketing & SEO Executive | WordPress Website Management",
  heroBio: "I build responsive web applications, solve real-world problems, and create performance-focused digital experiences using modern web technologies. I also work with WordPress, SEO, analytics, and digital marketing to improve website visibility and user experience.",
  aboutHeadline: "PROFESSIONAL SUMMARY",
  availability: "Available for Immediate Hiring",
  location: "Kanpur, India",
  email: "rohitkumar10eng@gmail.com",
  phone: "+91 7392030573",
  whatsappNumber: "+91 7392030573",
  whatsapp: "https://wa.me/917392030573?text=Hi%20Rohit,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!",
  github: "https://github.com/rohit221952",
  githubUsername: "rohit221952",
  linkedin: "https://www.linkedin.com/in/rohitkumar88966/",
  vpnSite: "https://vpnexpertguide.com",
  resumePath: "./rohit_kumar_resume.pdf",
  profileImage: "./assets/rohit-kumar.jpg"
};

export const QUICK_CONTACT_SUBJECTS = [
  "💼 Full Stack Development",
  "⚡ Frontend Development",
  "🐍 Python Development",
  "🚀 WordPress Development",
  "📈 SEO & Organic Growth",
  "🎯 Digital Marketing"
];

export const MARQUEE_TECH = [
  "FULL STACK DEVELOPMENT",
  "REACT.JS",
  "NEXT.JS",
  "NODE.JS",
  "EXPRESS.JS",
  "MONGODB",
  "PYTHON",
  "JAVASCRIPT (ES6+)",
  "TAILWIND CSS",
  "REST APIs",
  "JWT AUTH",
  "GIT",
  "GITHUB",
  "WORDPRESS",
  "TECHNICAL SEO",
  "DIGITAL MARKETING"
];

export const STATS: StatItem[] = [
  {
    value: "3+",
    numericValue: 3,
    suffix: "+",
    label: "Production-Ready Projects",
    description: "Full-stack apps & live web platforms",
    iconName: "Layers"
  },
  {
    value: "10+",
    numericValue: 10,
    suffix: "+",
    label: "RESTful Endpoints Built",
    description: "Secure, tested & documented APIs",
    iconName: "Server"
  },
  {
    value: "90+",
    numericValue: 90,
    suffix: "+",
    label: "Lighthouse Performance",
    description: "Optimized speed, SEO & accessibility",
    iconName: "Zap"
  },
  {
    value: "MERN",
    label: "Full-Stack Development",
    description: "MongoDB, Express, React, Node.js",
    iconName: "Code2"
  }
];

export const SKILL_CATEGORIES = [
  { id: "all", name: "All Skills" },
  { id: "development", name: "Development" },
  { id: "cms_seo", name: "WordPress & SEO" },
  { id: "digital_marketing", name: "Digital Marketing" },
  { id: "tools_analytics", name: "Tools & Analytics" }
];

export const SKILLS: SkillItem[] = [
  // ─── 1. DEVELOPMENT & ENGINEERING ───
  // FRONTEND
  { name: "HTML5", category: "development", subgroup: "frontend", level: "Advanced", iconName: "FileCode", glowColor: "#E34F26" },
  { name: "CSS3", category: "development", subgroup: "frontend", level: "Advanced", iconName: "Palette", glowColor: "#1572B6" },
  { name: "JavaScript (ES6+)", category: "development", subgroup: "frontend", level: "Advanced", iconName: "Code", glowColor: "#F7DF1E" },
  { name: "React.js", category: "development", subgroup: "frontend", level: "Advanced", iconName: "Atom", glowColor: "#25D9FF" },
  { name: "Next.js", category: "development", subgroup: "frontend", level: "Intermediate", iconName: "Layers", glowColor: "#FFFFFF" },
  { name: "Tailwind CSS", category: "development", subgroup: "frontend", level: "Advanced", iconName: "Wind", glowColor: "#38BDF8" },
  { name: "Bootstrap", category: "development", subgroup: "frontend", level: "Proficient", iconName: "LayoutGrid", glowColor: "#7952B3" },
  { name: "Redux Toolkit", category: "development", subgroup: "frontend", level: "Proficient", iconName: "Workflow", glowColor: "#764ABC" },

  // BACKEND
  { name: "Node.js", category: "development", subgroup: "backend", level: "Advanced", iconName: "Server", glowColor: "#68A063" },
  { name: "Express.js", category: "development", subgroup: "backend", level: "Advanced", iconName: "Cpu", glowColor: "#99A4BB" },
  { name: "REST API Design", category: "development", subgroup: "backend", level: "Advanced", iconName: "Network", glowColor: "#3877FF" },
  { name: "JWT Authentication", category: "development", subgroup: "backend", level: "Proficient", iconName: "KeyRound", glowColor: "#FB015B" },
  { name: "bcrypt", category: "development", subgroup: "backend", level: "Proficient", iconName: "Shield", glowColor: "#25D9FF" },

  // DATABASE
  { name: "MongoDB", category: "development", subgroup: "database", level: "Advanced", iconName: "Database", glowColor: "#47A248" },
  { name: "Mongoose", category: "development", subgroup: "database", level: "Advanced", iconName: "Binary", glowColor: "#880000" },
  { name: "MySQL", category: "development", subgroup: "database", level: "Intermediate", iconName: "Table", glowColor: "#00758F" },

  // PROGRAMMING
  { name: "Python", category: "development", subgroup: "programming", level: "Proficient", iconName: "Terminal", glowColor: "#3776AB" },

  // TOOLS / DEVELOPMENT
  { name: "Git", category: "development", subgroup: "tools", level: "Advanced", iconName: "GitBranch", glowColor: "#F05032", isToolOrAnalytics: true },
  { name: "GitHub", category: "development", subgroup: "tools", level: "Advanced", iconName: "Github", glowColor: "#FFFFFF", isToolOrAnalytics: true },
  { name: "Postman", category: "development", subgroup: "tools", level: "Advanced", iconName: "Send", glowColor: "#FF6C37", isToolOrAnalytics: true },
  { name: "VS Code", category: "development", subgroup: "tools", level: "Advanced", iconName: "Code2", glowColor: "#007ACC", isToolOrAnalytics: true },
  { name: "Figma-to-UI", category: "development", subgroup: "tools", level: "Proficient", iconName: "Figma", glowColor: "#F24E1E", isToolOrAnalytics: true },
  { name: "Vercel", category: "development", subgroup: "tools", level: "Proficient", iconName: "Triangle", glowColor: "#FFFFFF", isToolOrAnalytics: true },
  { name: "Netlify", category: "development", subgroup: "tools", level: "Proficient", iconName: "Globe", glowColor: "#00C7B7", isToolOrAnalytics: true },

  // ─── 2. WORDPRESS & SEO ───
  { name: "WordPress", category: "cms_seo", subgroup: "cms_seo", level: "Advanced", iconName: "Compass", glowColor: "#21759B" },
  { name: "Elementor", category: "cms_seo", subgroup: "cms_seo", level: "Advanced", iconName: "Sliders", glowColor: "#92003B" },
  { name: "Astra", category: "cms_seo", subgroup: "cms_seo", level: "Advanced", iconName: "Sparkles", glowColor: "#8A3BEE" },
  { name: "Custom CSS", category: "cms_seo", subgroup: "cms_seo", level: "Advanced", iconName: "Palette", glowColor: "#1572B6" },
  { name: "On-Page SEO", category: "cms_seo", subgroup: "cms_seo", level: "Advanced", iconName: "FileCheck", glowColor: "#25D9FF" },
  { name: "Technical SEO", category: "cms_seo", subgroup: "cms_seo", level: "Advanced", iconName: "Search", glowColor: "#3877FF" },
  { name: "Keyword Research", category: "cms_seo", subgroup: "cms_seo", level: "Proficient", iconName: "Target", glowColor: "#985CFF" },
  { name: "Internal Linking", category: "cms_seo", subgroup: "cms_seo", level: "Advanced", iconName: "Network", glowColor: "#38BDF8" },
  { name: "Google Search Console", category: "cms_seo", subgroup: "cms_seo", level: "Proficient", iconName: "LineChart", glowColor: "#4285F4", isToolOrAnalytics: true },
  { name: "Google Analytics", category: "cms_seo", subgroup: "cms_seo", level: "Proficient", iconName: "BarChart3", glowColor: "#E37400", isToolOrAnalytics: true },

  // ─── 3. DIGITAL MARKETING ───
  { name: "SEM / PPC", category: "digital_marketing", subgroup: "digital_marketing", level: "Proficient", iconName: "Target", glowColor: "#E37400" },
  { name: "Content Writing & Copywriting", category: "digital_marketing", subgroup: "digital_marketing", level: "Advanced", iconName: "FileText", glowColor: "#38BDF8" },
  { name: "Social Media Marketing", category: "digital_marketing", subgroup: "digital_marketing", level: "Proficient", iconName: "Share2", glowColor: "#E1306C" },
  { name: "Email Marketing", category: "digital_marketing", subgroup: "digital_marketing", level: "Proficient", iconName: "Mail", glowColor: "#FFB300" },
  { name: "AI & Marketing Automation", category: "digital_marketing", subgroup: "digital_marketing", level: "Intermediate", iconName: "Sparkles", glowColor: "#985CFF" },
  { name: "Video Marketing", category: "digital_marketing", subgroup: "digital_marketing", level: "Intermediate", iconName: "Video", glowColor: "#FF0000" },
  { name: "Conversion Rate Optimization (CRO)", category: "digital_marketing", subgroup: "digital_marketing", level: "Proficient", iconName: "TrendingUp", glowColor: "#00C7B7" },
  { name: "Analytics & Reporting", category: "digital_marketing", subgroup: "digital_marketing", level: "Proficient", iconName: "BarChart3", glowColor: "#25D9FF", isToolOrAnalytics: true }
];

export const PROJECTS: Project[] = [
  {
    id: "vpn-expert-guide",
    title: "VPN Affiliate & Blog Website",
    subtitle: "High-Authority WordPress Publishing & Technical SEO",
    category: "WordPress & SEO",
    featured: true,
    badge: "01 · LIVE WEB PLATFORM",
    description: "Professional WordPress publishing platform built with Astra and Elementor, featuring custom CSS styling, internal linking architecture, Google Search Console & Analytics telemetry.",
    longDescription: "Real-world CMS engineering and search engine optimization case study. Features custom mega menus, rich visual assets, performance tuning, and structured internal linking driving organic visibility.",
    points: [
      "Engineered custom responsive layouts, mega menus, headers, and footers using Astra and Elementor with custom CSS.",
      "Executed end-to-end technical & on-page SEO: schema markup, internal linking, and Core Web Vitals speed optimization.",
      "Monitored query rankings and organic growth telemetry via Google Search Console and Google Analytics 4."
    ],
    techStack: ["WordPress", "Astra", "Elementor", "Custom CSS", "SEO", "Google Analytics", "Google Search Console"],
    liveUrl: "https://vpnexpertguide.com",
    previewType: "vpn-guide"
  },
  {
    id: "ai-story-generator",
    title: "AI Story Generator",
    subtitle: "Interactive Full-Stack AI Narrative Platform",
    category: "Full-Stack Development",
    featured: true,
    badge: "02 · FULL-STACK WEB APPLICATION",
    description: "Full-stack AI storytelling application built with React, Vite, and Node.js. Integrates OpenAI and Google Gemini APIs with Clerk Auth and JWT-protected Express routes.",
    longDescription: "Production-grade AI platform integrating multi-model LLMs. Features seamless story prompts, custom illustration synthesis, user credit tracking, and responsive Tailwind UI.",
    points: [
      "Integrated OpenAI and Google Gemini APIs for responsive text storytelling and visual prompt synthesis.",
      "Engineered Node.js/Express backend with Clerk authentication and custom JWT route protection.",
      "Structured MongoDB database models to manage user sessions, prompts, and credit balances."
    ],
    techStack: ["React.js", "Vite", "Tailwind CSS", "OpenAI API", "Gemini AI", "Clerk Auth", "JWT", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://ai-story-generator.netlify.app/",
    githubUrl: "https://github.com/rohit221952/ai-story-generator",
    previewType: "ai-story"
  },
  {
    id: "sporting-goods-ecommerce",
    title: "E-Commerce Store - Sporting Goods",
    subtitle: "Full-Stack MERN Architecture with Order Management",
    category: "Full-Stack Development",
    featured: true,
    badge: "03 · MERN STACK PLATFORM",
    description: "Production-ready MERN retail platform featuring responsive product catalogs, dynamic cart state management with Redux Toolkit, and secure Express/MongoDB REST APIs.",
    longDescription: "A complete online store built from scratch with MERN stack architecture. Incorporates Redux Toolkit for global shopping cart state, JWT-secured backend routes with role-based access control, and order history tracking.",
    points: [
      "Built 10+ RESTful API endpoints in Express and Mongoose for product catalogs, cart math, and user orders.",
      "Implemented Redux Toolkit global state management for instant filtering, search, and synchronized cart items.",
      "Secured authentication and checkout workflows using JWT tokens and role-based route middleware."
    ],
    techStack: ["React.js", "Redux Toolkit", "Axios", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    liveUrl: "https://sporting-goods.netlify.app/",
    githubUrl: "https://github.com/rohit221952/sporting-goods-ecommerce",
    previewType: "ecommerce"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "true-tech",
    role: "WordPress Developer & SEO Executive",
    company: "True Technologies",
    location: "Kanpur / Remote",
    period: "April 2026 – Present",
    badge: "Active Professional Role",
    isCurrent: true,
    description: "WordPress website management, Astra, Elementor, custom CSS, responsive layouts, SEO, internal linking, website performance, Google Analytics, Google Search Console.",
    points: [
      "Manage and maintain WordPress websites using the Astra theme, Elementor, and custom CSS with fully responsive layouts.",
      "Execute on-page and technical SEO: keyword research, internal linking, content hierarchy, and website performance optimization.",
      "Monitor site telemetry, indexation, and user traffic flows via Google Analytics 4 and Google Search Console."
    ],
    tags: ["WordPress", "Astra", "Elementor", "Custom CSS", "Technical SEO", "Internal Linking", "Google Analytics", "Google Search Console"]
  },
  {
    id: "qspiders",
    role: "MERN Stack Developer Trainee",
    company: "QSpiders, Noida",
    location: "Noida, India",
    period: "August 2025 – May 2026",
    badge: "Full-Stack Training",
    isCurrent: false,
    description: "MongoDB, Express.js, React.js, Node.js, REST APIs, JWT authentication, protected routes, Redux Toolkit.",
    points: [
      "Completed intensive project-based training across MongoDB, Express.js, React.js, and Node.js.",
      "Architected secure RESTful APIs with JWT authentication, protected route middleware, and MongoDB/Mongoose data models.",
      "Implemented Redux Toolkit state architecture, client-side routing, and error boundaries across modular full-stack projects."
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JWT Auth", "Protected Routes", "Redux Toolkit"]
  },
  {
    id: "independent",
    role: "Frontend Developer – Independent Projects",
    company: "Self-Initiated",
    location: "Remote",
    period: "March 2025 – Present",
    badge: "Software Engineering",
    isCurrent: true,
    description: "Responsive React applications, Figma-style UI implementation, Netlify / Vercel, OpenAI, Gemini, Clerk Auth, lazy loading, code splitting, image optimization.",
    points: [
      "Built responsive React applications translating Figma-style UI specifications into modular, accessible components.",
      "Integrated OpenAI and Google Gemini APIs alongside Clerk Auth to power production AI-driven workflows.",
      "Achieved high performance via lazy loading, code splitting, and asset optimization, deployed through automated Netlify & Vercel CI/CD."
    ],
    tags: ["React.js", "Figma-to-UI", "Vercel", "Netlify", "OpenAI API", "Gemini AI", "Clerk Auth", "Code Splitting"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "kit-btech",
    degree: "B.Tech – Computer Science & Engineering",
    institution: "Kanpur Institute of Technology (KIT), Kanpur, India",
    location: "Kanpur, India",
    period: "Graduated: June 2025",
    description: "Four-year engineering degree with solid grounding in Computer Science fundamentals, Object-Oriented Programming, Data Structures & Algorithms, Database Management Systems, and Web Application Engineering.",
    highlights: [
      "Core Courses: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering",
      "Hands-on practical development of scalable web applications and algorithmic problem solving",
      "B.Tech degree completed with strong engineering problem-solving principles"
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "qspiders-cert",
    title: "Full Stack Web Development",
    issuer: "QSpiders, Noida (2026)",
    location: "Noida, India",
    year: "2026",
    description: "Comprehensive industry certification covering advanced full-stack web engineering, asynchronous programming, RESTful API architecture, state management, and modern deployment standards.",
    skillsCovered: [
      "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
      "Secure REST API Design & JWT Protected Routing",
      "Redux Toolkit Global State & React Architecture",
      "Production Deployments on Cloud Infrastructure"
    ]
  }
];

export const HOBBIES = [
  {
    title: "Reading Books",
    subtitle: "Tech architecture & continuous learning",
    iconName: "BookOpen"
  },
  {
    title: "Learning New Tech",
    subtitle: "Exploring emerging tools & frameworks",
    iconName: "Sparkles"
  },
  {
    title: "Exploring Nature",
    subtitle: "Mindful outdoors & refreshing walks",
    iconName: "Compass"
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: "01",
    title: "Understand the Problem",
    description: "Analyzing user requirements, business constraints, and system specifications before writing a single line of code.",
    details: [
      "Define functional & non-functional requirements",
      "Map out user journeys and edge cases",
      "Establish measurable performance benchmarks"
    ],
    iconName: "FileSearch"
  },
  {
    step: "02",
    title: "Plan Architecture & Stack",
    description: "Designing modular component hierarchies, database schemas, state management, and API contract specifications.",
    details: [
      "Design normalized MongoDB/Mongoose models",
      "Plan RESTful endpoints and payload structures",
      "Select optimal libraries for performance & DX"
    ],
    iconName: "Network"
  },
  {
    step: "03",
    title: "Build Frontend & APIs",
    description: "Implementing responsive React UIs, reusable design systems, and robust Express backend services.",
    details: [
      "Develop pixel-perfect Tailwind CSS components",
      "Write secure Node/Express controllers and middleware",
      "Handle asynchronous state, loading, and error states"
    ],
    iconName: "Code"
  },
  {
    step: "04",
    title: "Test, Secure & Optimize",
    description: "Hardening security with JWT auth, validating inputs, auditing Lighthouse metrics, and running API tests.",
    details: [
      "Validate API payloads and rate-limit sensitive routes",
      "Optimize images, fonts, and bundle chunks (90+ score)",
      "Test responsiveness across all viewport breakpoints"
    ],
    iconName: "ShieldCheck"
  },
  {
    step: "05",
    title: "Deploy, Monitor & Improve",
    description: "Setting up automated CI/CD pipelines, configuring environment secrets, and monitoring real-time performance.",
    details: [
      "Automated builds with Netlify, Vercel & GitHub Actions",
      "Configure custom domains and SSL encryption",
      "Iterate based on analytics and telemetry feedback"
    ],
    iconName: "Rocket"
  }
];
