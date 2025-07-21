import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaCode, FaBriefcase, FaLaptopCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const experiencesData = [
  {
    id: 1,
    title: "Associate Software Engineer",
    location: "InvoByte, Lahore, Pakistan",
    description:
      "Working on CIMS, an authentication and authorization system. Building reusable components with Next.js, Tailwind CSS, and shadcn/ui to manage client and application-level access controls.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2025 – Present",
    type: "fulltime",
    skills: [
      "Next.js",
      "shadcn/ui",
      "Tailwind CSS",
      "RBAC/ABAC",
      "Component Reusability",
      "Access Control Systems",
      "UI Optimization"
    ],
    details: [
      "Built reusable UI components with shadcn/ui and Tailwind",
      "Developed client- and application-level permission management",
      "Implemented RBAC and ABAC models for secure resource access",
      "Focused on scalable and optimized front-end architecture",
    ]
  },
  {
    id: 2,
    title: "Junior Frontend Developer",
    location: "Tekvaly / Phenologix, Lahore, Pakistan",
    description:
      "Worked on platforms like ScrumDroid and Hiredroid, delivering responsive and optimized interfaces using ReactJS and SWR. Collaborated with backend teams to ensure seamless data handling.",
    icon: React.createElement(FaReact),
    date: "June 2024 – May 2025",
    type: "fulltime",
    skills: [
      "React.js",
      "Next.js",
      "SWR",
      "Tailwind CSS",
      "UI Optimization",
      "Component Design",
      "Responsive Design"
    ],
    details: [
      "Built responsive UI for ScrumDroid and Hiredroid platforms",
      "Integrated SWR for optimized data fetching",
      "Collaborated with backend team to ensure seamless UX",
      "Implemented reusable components and mobile-first layouts"
    ]
  },
  {
    id: 3,
    title: "Freelance Frontend Developer",
    location: "Remote",
    description:
      "Created a personal developer portfolio and contributed to Heartland Rehab’s website using modern front-end tools and best practices.",
    icon: React.createElement(FaLaptopCode),
    date: "June 2023 – April 2025",
    type: "freelance",
    skills: [
      "React.js",
      "Next.js",
      "React Bootstrap",
      "Responsive Design",
      "UI/UX Implementation",
      "Portfolio Development"
    ],
    details: [
      "Developed a personal portfolio website using React.js",
      "Built Heartland Rehab’s site using Next.js & React Bootstrap",
      "Implemented clean UI with component-based architecture",
      "Handled responsiveness and SEO-friendly structure"
    ]
  },
  {
    id: 4,
    title: "Bachelor of Science in Software Engineering",
    location: "University of Central Punjab, Lahore",
    description:
      "Completed a 4-year degree in Software Engineering with a CGPA of 3.61. Developed a strong foundation in front-end technologies, software development, and programming fundamentals.",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2020 – July 2024",
    type: "education",
    skills: [
      "HTML/CSS/JS",
      "React",
      "TypeScript",
      "Software Engineering Principles",
      "Agile Methodology",
      "Project Work"
    ],
    details: [
      "Graduated with a CGPA of 3.61",
      "Completed hands-on frontend and full stack development projects",
      "Worked on collaborative coding and agile-based workflows",
      "Gained expertise in programming, UI, and team collaboration"
    ]
  }
] as const;


export const skillsData = [
  {
    category: "Core Frontend",
    skills: [
      { name: "HTML5", proficiency: 90 },
      { name: "CSS3", proficiency: 85 },
      { name: "JavaScript (ES6+)", proficiency: 90 },
      { name: "TypeScript", proficiency: 80 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React.js", proficiency: 85 },
      { name: "Next.js", proficiency: 85 },
      { name: "Redux Toolkit", proficiency: 75 },
      { name: "SWR", proficiency: 75 },
    ],
  },
  {
    category: "Styling & UI Libraries",
    skills: [
      { name: "Tailwind CSS", proficiency: 85 },
      { name: "Material UI (MUI)", proficiency: 80 },
      { name: "shadcn/ui", proficiency: 80 },
      { name: "React Bootstrap", proficiency: 70 },
    ],
  },
  {
    category: "Dev Tools & Workflow",
    skills: [
      { name: "Git", proficiency: 90 },
      { name: "GitHub", proficiency: 85 },
      { name: "VS Code", proficiency: 90 },
      { name: "Chrome DevTools", proficiency: 85 },
    ],
  },
  {
    category: "APIs, Testing & Design",
    skills: [
      { name: "Postman (API Testing)", proficiency: 80 },
      { name: "Swagger (API Docs)", proficiency: 75 },
      { name: "Figma (UI/UX Collaboration)", proficiency: 80 },
    ],
  },
  {
    category: "Professional Strengths",
    skills: [
      { name: "Responsive Design", proficiency: 85 },
      { name: "Component Architecture", proficiency: 85 },
      { name: "Performance Optimization", proficiency: 80 },
      { name: "Agile / Scrum", proficiency: 80 },
      { name: "API Integration", proficiency: 80 },
    ],
  },
];

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    id: 1,
    title: "Heartland Rehab",
    description:
      "A responsive, performance-optimized rehab clinic website built with a component-based architecture. Integrated third-party tools for dynamic routing and a smooth user experience.",
    tags: ["Next.js", "React Bootstrap", "Responsive Design"],
    imageUrl: "/hlrehab.png",
    githubUrl: "",
    liveUrl: "https://heartlandrehab.sg/",
    type: "web",
    icon: React.createElement(FaCode),
    keyFeatures: [
      "Dynamic routing & seamless navigation",
      "Component-based architecture for scalability",
      "Responsive UI using React Bootstrap",
      "Optimized performance for production"
    ],
    techDetails: "Built with Next.js and styled using React Bootstrap. Prioritized component reusability and mobile-first design for better user accessibility."
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "A sleek, responsive developer portfolio built to showcase technical skills, projects, and experience with clean UI and routing using React.",
    tags: ["React.js", "CSS3", "Responsive Design"],
    imageUrl: "/portfolio.png",
    githubUrl: "https://github.com/Khadeejahh-Asiff/livepersonalportfolio",
    liveUrl: "",
    type: "web",
    icon: React.createElement(FaReact),
    keyFeatures: [
      "Responsive design for all devices",
      "Component-based layout",
      "Tech stack & projects showcase",
      "Clean animations and modern UI"
    ],
    techDetails: "Built with React.js to demonstrate front-end expertise and present work/projects in a clean, organized manner."
  },
  {
    id: 3,
    title: "ScrumDroid",
    description:
      "A task and resource management platform designed to manage organizational workflows including attendance, asset tracking, and daily tasks.",
    tags: ["React.js", "SWR", "Responsive Design"],
    imageUrl: "/sd.png",
    githubUrl: "",
    liveUrl: "https://sd.tradefsd.com/",
    type: "webapp",
    icon: React.createElement(FaCode),
    keyFeatures: [
      "Optimized UI for daily task handling",
      "Asset and attendance tracking modules",
      "SWR-based data fetching",
      "Mobile-first responsive layout"
    ],
    techDetails: "Developed using React.js and SWR to ensure efficient state/data management and a smooth user experience across devices."
  },
  {
    id: 4,
    title: "HireDroid",
    description:
      "A job portal enabling HR professionals to post jobs, manage interviews, and create company profiles, while applicants can apply for roles directly.",
    tags: ["Next.js", "Responsive Design", "Job Portal"],
    imageUrl: "/hd.png",
    githubUrl: "",
    liveUrl: "https://hiredroid.tradefsd.com/",
    type: "web",
    icon: React.createElement(FaBriefcase),
    keyFeatures: [
      "Job posting and application management",
      "HR and company profile features",
      "Responsive and user-friendly UI",
      "Built with scalable Next.js structure"
    ],
    techDetails: "Built with Next.js, HireDroid delivers a smooth and intuitive job-search and management experience through clean, modular components."
  }
] as const;


