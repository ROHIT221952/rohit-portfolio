import { Project, ExperienceItem, EducationItem, CertificationItem, SkillItem, StatItem, WorkflowStep } from '../types';

export const PERSONAL_INFO = {
  name: "Rohit Kumar",
  title: "Full-Stack Developer | WordPress Expert | Technical SEO & Digital Marketer",
  shortTitle: "Full-Stack Dev · WordPress · SEO",
  primaryRole: "Full-Stack Developer | WordPress Expert | Technical SEO & Digital Marketer",
  supportingRole: "WORDPRESS EXPERT · TECHNICAL SEO & DIGITAL MARKETER",
  heroBio: "Computer Science graduate specialized in engineering scalable Full-Stack MERN applications, high-performance WordPress platforms, technical SEO architectures, and digital marketing growth.",
  aboutHeadline: "FULL-STACK ENGINEERING. WORDPRESS MASTERY. TECHNICAL SEO & DIGITAL GROWTH.",
  aboutBio: "Fresh B.Tech Computer Science graduate with hands-on expertise building production-ready web applications across the complete MERN ecosystem alongside high-authority WordPress platforms. Passionate about clean modular code, intuitive UI/UX, robust API security, Core Web Vitals optimization, and technical SEO strategies that drive organic reach.",
  secondaryNote: "Specialized in Full-Stack MERN Engineering, Custom WordPress Architecture, Technical & On-Page SEO Audits, and Digital Marketing Growth.",
  educationNote: "B.Tech Computer Science & Engineering — Kanpur Institute of Technology, June 2025",
  availability: "AVAILABLE FOR FULL-TIME & HIGH-IMPACT ROLES",
  location: "Kanpur, India",
  email: "rohitkumar10eng@gmail.com",
  phone: "+91 7392030573",
  whatsappNumber: "+91 7392030573",
  whatsapp: "https://wa.me/917392030573?text=Hi%20Rohit,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!",
  github: "https://github.com/rohit221952",
  githubUsername: "rohit221952",
  linkedin: "https://linkedin.com/in/rohitkumar-dev",
  vpnSite: "https://vpnexpertguide.com",
  resumePath: "/Rohit-Kumar-Resume.pdf",
  profileImage: "/assets/rohit-kumar.jpg"
};

export const QUICK_CONTACT_SUBJECTS = [
  "💼 Full-Time Full-Stack Opportunity",
  "🚀 WordPress Architecture & Custom Build",
  "📈 Technical SEO & Digital Marketing Strategy",
  "🎯 High-Impact Contract / Freelance"
];

export const MARQUEE_TECH = [
  "TYPESCRIPT",
  "REACT.JS",
  "NEXT.JS",
  "NODE.JS",
  "EXPRESS.JS",
  "MONGODB",
  "JAVASCRIPT",
  "TAILWIND CSS",
  "REST APIs",
  "JWT",
  "GIT",
  "GITHUB",
  "WORDPRESS",
  "TECHNICAL SEO"
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

export const ABOUT_CARDS = [
  {
    id: "mern",
    title: "MERN Stack Mastery",
    icon: "Code2",
    color: "#3877FF",
    description: "End-to-end web development with React, Node.js, Express, and MongoDB, utilizing Redux Toolkit for clean state architecture."
  },
  {
    id: "backend",
    title: "Backend APIs & Auth",
    icon: "ShieldCheck",
    color: "#25D9FF",
    description: "Architecting secure RESTful endpoints, role-based access control (RBAC), JWT authentication, bcrypt hashing, and protected middleware."
  },
  {
    id: "ai",
    title: "AI API Integration",
    icon: "Sparkles",
    color: "#985CFF",
    description: "Integrating modern LLM models (OpenAI, Gemini AI) into interactive production apps with token/credit-metered real-time pipelines."
  },
  {
    id: "performance",
    title: "Performance & CI/CD",
    icon: "Gauge",
    color: "#6535FF",
    description: "Achieving 90+ Lighthouse scores via lazy loading, code-splitting, asset compression, and automated Netlify/Vercel CI/CD pipelines."
  }
];

export const SKILL_CATEGORIES = [
  { id: "all", name: "All Technologies" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "database", name: "Database" },
  { id: "tools", name: "Tools & Workflow" },
  { id: "cms_seo", name: "WordPress & SEO" }
];

export const SKILLS: SkillItem[] = [
  // ─── DEVELOPER SKILLS (CORE ENGINEERING & TOOLS) ───
  // 1. Frontend
  { name: "TypeScript", category: "frontend", level: "Advanced", iconName: "Code2", glowColor: "#3178C6" },
  { name: "JavaScript (ES6+)", category: "frontend", level: "Advanced", iconName: "Code", glowColor: "#F7DF1E" },
  { name: "React.js", category: "frontend", level: "Advanced", iconName: "Atom", glowColor: "#25D9FF" },
  { name: "Next.js 14", category: "frontend", level: "Intermediate", iconName: "Layers", glowColor: "#FFFFFF" },
  { name: "HTML5", category: "frontend", level: "Expert", iconName: "FileCode", glowColor: "#E34F26" },
  { name: "CSS3", category: "frontend", level: "Advanced", iconName: "Palette", glowColor: "#1572B6" },
  { name: "Tailwind CSS", category: "frontend", level: "Advanced", iconName: "Wind", glowColor: "#38BDF8" },
  { name: "Bootstrap", category: "frontend", level: "Proficient", iconName: "LayoutGrid", glowColor: "#7952B3" },

  // 2. Backend
  { name: "Node.js", category: "backend", level: "Advanced", iconName: "Server", glowColor: "#68A063" },
  { name: "Express.js", category: "backend", level: "Advanced", iconName: "Cpu", glowColor: "#99A4BB" },
  { name: "REST API Design", category: "backend", level: "Advanced", iconName: "Network", glowColor: "#3877FF" },
  { name: "JWT Authentication", category: "backend", level: "Advanced", iconName: "KeyRound", glowColor: "#FB015B" },

  // 3. Database
  { name: "MongoDB", category: "database", level: "Advanced", iconName: "Database", glowColor: "#47A248" },
  { name: "MySQL", category: "database", level: "Intermediate", iconName: "Table", glowColor: "#00758F" },

  // 4. Tools & Workflow
  { name: "Git", category: "tools", level: "Advanced", iconName: "GitBranch", glowColor: "#F05032" },
  { name: "GitHub", category: "tools", level: "Advanced", iconName: "Github", glowColor: "#FFFFFF" },
  { name: "Figma-to-UI", category: "tools", level: "Advanced", iconName: "Figma", glowColor: "#F24E1E" },

  // ─── WORDPRESS & TECHNICAL SEO (CMS & GROWTH) ───
  // 5. WordPress & SEO
  { name: "WordPress", category: "cms_seo", level: "Advanced", iconName: "Compass", glowColor: "#21759B" },
  { name: "Elementor", category: "cms_seo", level: "Advanced", iconName: "Sliders", glowColor: "#92003B" },
  { name: "Technical SEO", category: "cms_seo", level: "Advanced", iconName: "Search", glowColor: "#3877FF" },
  { name: "On-Page SEO", category: "cms_seo", level: "Advanced", iconName: "FileCheck", glowColor: "#25D9FF" },
  { name: "Keyword Research", category: "cms_seo", level: "Proficient", iconName: "Target", glowColor: "#985CFF" },
  { name: "Google Search Console", category: "cms_seo", level: "Proficient", iconName: "LineChart", glowColor: "#4285F4" },
  { name: "Google Analytics", category: "cms_seo", level: "Proficient", iconName: "BarChart3", glowColor: "#E37400" }
];

export const PROJECTS: Project[] = [
  {
    id: "ai-story-generator",
    title: "AI Story Generator",
    subtitle: "AI-Powered Narrative & Illustration Platform",
    category: "Full-Stack AI Application",
    featured: true,
    badge: "01 · FEATURED AI PRODUCT",
    description: "Full-stack AI app where users generate personalized stories and accompanying illustrations via OpenAI & Gemini APIs, with real-time credit tracking and Clerk/JWT protected routes.",
    longDescription: "A comprehensive production-grade AI platform integrating multi-model LLMs. Features seamless story prompts, custom illustration synthesis, a live credit-wallet system monitoring token consumption per user, role-based authentication, and responsive Tailwind UI.",
    points: [
      "Integrated OpenAI and Google Gemini APIs for dual text narrative generation and visual illustration prompts.",
      "Engineered real-time credit-wallet system in MongoDB tracking user token balances and API usage quotas.",
      "Implemented multi-layer authentication combining Clerk Auth and custom JWT middleware for protected backend routes.",
      "Optimized asynchronous API requests with robust loading skeletons, error boundaries, and instant feedback."
    ],
    techStack: ["React", "TypeScript", "Vite", "Node.js", "Express.js", "MongoDB", "OpenAI API", "Gemini AI", "Clerk Auth", "JWT", "Tailwind CSS"],
    liveUrl: "https://ai-story-generator.netlify.app/",
    githubUrl: "https://github.com/rohit221952/ai-story-generator",
    previewType: "ai-story"
  },
  {
    id: "sporting-goods-ecommerce",
    title: "Sporting Goods E-Commerce",
    subtitle: "Full-Stack Retail Platform with Order Management",
    category: "Full-Stack MERN E-Commerce",
    featured: true,
    badge: "02 · MERN STACK APPLICATION",
    description: "Full-stack e-commerce platform with dynamic product listings, search & filter, cart management, JWT authentication with role separation, and 10+ custom RESTful API endpoints.",
    longDescription: "A complete online store built from scratch with MERN stack architecture. Incorporates Redux Toolkit for global shopping cart state, JWT-secured backend routes with role-based access control (Admin vs Customer), and comprehensive order history tracking.",
    points: [
      "Built 10+ custom RESTful API endpoints with Express and Mongoose for product CRUD, orders, and user management.",
      "Redux Toolkit state management powering instant search, multi-criteria category filtering, and real-time cart math.",
      "Role-Based Access Control (RBAC) separating administrative product controls from customer checkout workflows.",
      "Mobile-first responsive interface with persistent cart states and clean order confirmation workflows."
    ],
    techStack: ["React.js", "TypeScript", "Redux Toolkit", "Axios", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    liveUrl: "https://sporting-goods.netlify.app/",
    githubUrl: "https://github.com/rohit221952/sporting-goods-ecommerce",
    previewType: "ecommerce"
  },
  {
    id: "vpn-expert-guide",
    title: "VPN Expert Guide",
    subtitle: "Professional WordPress Publishing & Technical SEO Case Study",
    category: "WordPress & Technical SEO Case Study",
    featured: true,
    badge: "03 · PROFESSIONAL CASE STUDY",
    description: "Built and actively maintains a high-authority WordPress publishing platform with Astra, Elementor, custom CSS, 92+ rich-media articles, and comprehensive technical & on-page SEO.",
    longDescription: "Complementary professional production work demonstrating real-world CMS engineering and search engine optimization. Features custom mega menus, rich visual assets, performance tuning, and structured internal linking driving organic growth.",
    points: [
      "Engineered custom responsive layouts, mega menus, headers, and footers using Astra theme and Elementor with custom CSS.",
      "Published and formatted 92+ in-depth rich-media blog posts with optimized graphics, comparison tables, and embedded media.",
      "Executed end-to-end technical SEO: schema markup, site speed optimization, keyword clustering, and internal link architecture.",
      "Tracking search performance and organic query growth via Google Analytics 4 and Google Search Console."
    ],
    techStack: ["WordPress", "Elementor", "Astra Theme", "Custom CSS", "Technical SEO", "92+ Posts", "Google Analytics", "Search Console"],
    liveUrl: "https://vpnexpertguide.com",
    previewType: "vpn-guide"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "true-tech",
    role: "WordPress Developer & SEO Executive",
    company: "True Technologies",
    location: "Kanpur / Remote",
    period: "May 2026 – Present",
    badge: "Active Professional Role",
    isCurrent: true,
    description: "Building and maintaining WordPress websites while managing technical SEO, on-page SEO, keyword research, content structure, analytics and website performance.",
    points: [
      "Build and maintain WordPress websites using the Astra theme, Elementor, and custom CSS — including a full VPN affiliate authority site with mega menus, custom headers/footers, and responsive layouts.",
      "Implement on-page and technical SEO — keyword research, content structure, internal linking, and performance optimization — tracking results via Google Analytics and Search Console.",
      "Set up site backups, configure navigation and mega menus, and deliver editable, UI-based solutions so non-technical stakeholders can manage content independently."
    ],
    tags: ["WordPress", "Elementor", "Astra", "Technical SEO", "On-Page SEO", "Google Analytics", "Search Console"]
  },
  {
    id: "qspiders",
    role: "MERN Stack Developer Trainee",
    company: "QSpiders",
    location: "Noida, India",
    period: "August 2025 – March 2026",
    badge: "Full-Stack Training",
    isCurrent: false,
    description: "Completed intensive project-based training in MongoDB, Express.js, React.js, Node.js, Redux Toolkit, authentication and protected REST APIs.",
    points: [
      "Underwent intensive project-based full-stack training covering MongoDB, Express.js, React.js, and Node.js with focus on real-world development workflows and industry coding standards.",
      "Built RESTful APIs with JWT-based authentication, protected route middleware, and MongoDB/Mongoose integration; applied Redux Toolkit and React Router v6 across multiple projects.",
      "Delivered 3 capstone projects independently — an e-commerce store, task manager with CRUD, and a role-based authentication system — from development to deployment."
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "JWT Auth", "REST APIs"]
  },
  {
    id: "independent",
    role: "Frontend Developer – Independent Projects",
    company: "Self-Initiated / Remote",
    location: "Remote",
    period: "March 2025 – Present",
    badge: "Software Engineering",
    isCurrent: true,
    description: "Building responsive React applications with AI integrations, reliable asynchronous experiences and performance-focused deployment workflows.",
    points: [
      "Built 3+ responsive React.js applications by converting Figma designs to pixel-perfect UIs; integrated OpenAI, Gemini AI, and Clerk Auth to power AI-driven features in production.",
      "Achieved Lighthouse scores of 90+ using lazy loading, code splitting, and image optimization; deployed all projects on Netlify and Vercel with GitHub-based CI/CD."
    ],
    tags: ["React.js", "Vite", "Tailwind CSS", "OpenAI API", "Gemini AI", "Clerk Auth", "CI/CD", "Lighthouse 90+"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "kit-btech",
    degree: "B.Tech – Computer Science & Engineering",
    institution: "Kanpur Institute of Technology (KIT)",
    location: "Kanpur, India",
    period: "Graduated: June 2025",
    description: "Four-year engineering degree with deep focus on Computer Science fundamentals, Object-Oriented Programming, Data Structures & Algorithms, Database Management Systems, Computer Networks, and Full-Stack Web Development.",
    highlights: [
      "Core Courses: Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, Software Engineering",
      "Hands-on practical development of web applications and algorithmic problem solving",
      "Graduated with strong technical grounding to contribute in fast-paced software engineering teams"
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "qspiders-cert",
    title: "Full Stack Web Development Certification",
    issuer: "QSpiders",
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

export const ECOSYSTEM_TOOLS = [
  { name: "ChatGPT", category: "AI Tool", icon: "Bot" },
  { name: "Claude", category: "AI Tool", icon: "Sparkles" },
  { name: "Gemini", category: "AI Tool", icon: "Cpu" },
  { name: "Cursor AI", category: "AI IDE", icon: "Terminal" },
  { name: "React.js", category: "Frontend", icon: "Atom" },
  { name: "Node.js", category: "Backend", icon: "Server" },
  { name: "MongoDB", category: "Database", icon: "Database" },
  { name: "Postman", category: "API Testing", icon: "Send" },
  { name: "GitHub", category: "Version Control", icon: "Github" },
  { name: "Vercel", category: "Deployment", icon: "Triangle" }
];
