// ─────────────────────────────────────────────────────────────────────────
// All editable content for the portfolio lives in this single file.
// Update the values below — no need to touch any component code.
// ─────────────────────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Sai Shiva Sagar Kuppili",
  firstName: "Sai Shiva Sagar",
  lastName: "Kuppili",
  initials: "SS",
  roles: [
    "Software Engineer",
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Cloud Computing Learner",
  ],
  tagline:
    "Integrated M.Tech CSE student building production-grade full-stack and AI-powered systems — from race-condition-safe booking engines to chest X-ray diagnosis tools — while preparing for the AWS Solutions Architect certification.",
  location: "Amaravati, Andhra Pradesh, India",
  email: "shivakuppili06@gmail.com",
  phone: "+91 93919 35337",
  // TODO: replace with the actual PDF once you drop it into /public
resumeUrl: "https://drive.google.com/uc?export=download&id=1W1h78OwCfpMWinMTFdqy8zLtbrpvJbe6",
  socials: {
    github: "https://github.com/shivakuppili06",
    linkedin: "https://www.linkedin.com/in/sai-shiva-sagar-kuppili/",
    // TODO: confirm/update your LeetCode handle
    leetcode: "https://leetcode.com/u/07shiva/",
    email: "mailto:shivakuppili06@gmail.com",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

// Easy-to-edit headline numbers shown as animated stat cards in About.
export const aboutStats = [
  { label: "CGPA", value: 8.2, suffix: "", decimals: 1 },
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "Technologies Used", value: 18, suffix: "+" },
  { label: "Years Hands-on Coding", value: 3, suffix: "+" },
];

export const educationTimeline = [
  {
    year: "2027 (Expected)",
    title: "Integrated M.Tech — Computer Science & Engineering",
    place: "VIT-AP University, Amaravati",
    description:
      "5-year integrated program covering core CS, distributed systems, and applied AI — maintaining a CGPA of 8.20.",
  },
  {
    year: "Ongoing",
    title: "AWS Certified Solutions Architect – Associate",
    place: "Amazon Web Services (SAA-C03)",
    description:
      "Currently preparing for the SAA-C03 exam, deepening hands-on experience with EKS, IAM, and well-architected cloud design.",
  },
  {
    year: "2024 – Present",
    title: "Production-grade project building",
    place: "Independent & academic projects",
    description:
      "Shipped full-stack platforms with race-condition-safe booking logic, JWT auth, AES encryption, and CI/CD pipelines on AWS EKS.",
  },
  {
    year: "2022",
    title: "Joined VIT-AP University",
    place: "Amaravati, Andhra Pradesh",
    description:
      "Began the Integrated M.Tech CSE program, with coursework linked to the VIT-AP / Virtusa industry collaboration.",
  },
];

export type SkillItem = { name: string; level: number };
export type SkillCategory = {
  category: string;
  icon: "code" | "layout" | "server" | "database" | "cloud";
  skills: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "code",
    skills: [
      { name: "Java", level: 88 },
      { name: "Python", level: 85 },
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    category: "Frontend",
    icon: "layout",
    skills: [
      { name: "React", level: 90 },
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    skills: [
      { name: "Spring Boot", level: 85 },
      { name: "Node.js", level: 82 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    category: "Database",
    icon: "database",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    category: "Cloud & Tools",
    icon: "cloud",
    skills: [
      { name: "AWS", level: 72 },
      { name: "Docker", level: 78 },
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 85 },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  // Lucide icon name used for the decorative card header until a real
  // screenshot is added. Swap in an <Image> in components/Projects.tsx
  // once you drop screenshots into /public/images/projects/.
  icon: "activity" | "heart-pulse" | "book-open" | "shield";
  accent: "primary" | "secondary" | "accent";
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "MediAI — Pneumonia Detection System",
    description:
      "An AI-powered diagnostic web app that classifies chest X-rays for pneumonia using a fine-tuned EfficientNet model, with Google Gemini integrated to generate plain-language radiology explanations for patients and clinicians.",
    icon: "activity",
    accent: "primary",
    tech: ["Flask", "EfficientNet", "Google Gemini", "Python", "REST APIs"],
    githubUrl: "https://github.com/shivakuppili06",
  },
  {
    title: "Smart Healthcare Management System",
    description:
      "A clinic inventory and appointment reservation platform engineered against race conditions using Redis distributed locks and Postgres transactions, with idempotency-key handling and a background expiry worker for stale holds.",
    icon: "heart-pulse",
    accent: "secondary",
    tech: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Zod"],
    githubUrl: "https://github.com/shivakuppili06",
  },
  {
    title: "Library Management System",
    description:
      "A full-stack library platform with JWT-secured authentication, role-based access for librarians and members, and a React front end for catalog search, borrowing, and returns.",
    icon: "book-open",
    accent: "accent",
    tech: ["React", "Spring Boot", "JWT", "MySQL"],
    githubUrl: "https://github.com/shivakuppili06",
  },
  {
    title: "CloudVault Password Manager",
    description:
      "A self-hosted password manager with client-aware AES encryption, a Spring Boot REST backend, and a React vault UI for organizing and retrieving credentials securely.",
    icon: "shield",
    accent: "primary",
    tech: ["React", "Spring Boot", "AES Encryption", "REST APIs"],
    githubUrl: "https://github.com/shivakuppili06",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  description: string[];
  tech: string[];
};

// Empty for now — Shiva is actively interviewing. Add entries here once an
// internship is confirmed, e.g.:
// {
//   role: "Software Engineering Intern",
//   company: "Company Name",
//   duration: "Jun 2026 – Aug 2026",
//   description: ["Built X", "Shipped Y", "Improved Z by N%"],
//   tech: ["React", "Node.js"],
// }
export const experience: ExperienceItem[] = [];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate (SAA-C03)",
    issuer: "Amazon Web Services",
    status: "In Progress",
  },
  // Add more certifications here as you earn them.
];

export const codingProfiles = [
  { platform: "GitHub", url: personalInfo.socials.github, handle: "@shivakuppili06" },
  { platform: "LeetCode", url: personalInfo.socials.leetcode, handle: "shivakuppili06" },
];

// Animated counter cards in the Achievements section.
// Update these with your real, current numbers.
export const achievementStats = [
  { label: "Projects Completed", value: 10, suffix: "+" },
  { label: "Certifications", value: 1, suffix: "" },
  { label: "GitHub Contributions", value: 250, suffix: "+" },
  { label: "LeetCode Problems Solved", value: 120, suffix: "+" },
];
