import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCode, FaBriefcase, FaLaptopCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaDatabase, FaServer } from "react-icons/fa";

export const experiencesData = [
  {
    id: 1,
    title: "Software Engineer",
    location: "Invobyte, Lahore, Pakistan",
    description:
      "Working on Central Identity Management System (CIMS) – an OAuth 2.0 and OpenID Connect compliant authentication and authorization platform built with .NET 9. Developed secure token generation services and implemented RBAC/ABAC authorization.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2025 – Present",
    type: "fulltime",
    skills: [
      ".NET 9",
      "OAuth 2.0 / OIDC",
      "JWT",
      "RBAC/ABAC",
      "Secure API Design",
      "Token Lifecycle Management"
    ],
    details: [
      "Developed JWT-based token generation and validation system",
      "Implemented secure access control using RBAC/ABAC",
      "Integrated OAuth 2.0 and OIDC for standardized auth flows",
      "Built scalable services ensuring secure resource handling"
    ]
  },
  {
    id: 2,
    title: "Associate Software Engineer",
    location: "Phenologix / Tekvaly, Lahore, Pakistan",
    description:
      "Worked on enterprise systems including RentCheck and AxesLaw using ASP.NET Core and Razor. Built RESTful APIs, optimized SQL databases, and developed dynamic UIs using jQuery and AJAX.",
    icon: React.createElement(FaServer),
    date: "June 2024 – May 2025",
    type: "fulltime",
    skills: [
      "ASP.NET Core",
      "SQL Server / MySQL",
      "Razor / jQuery",
      "Entity Framework Core",
      "JWT / Cookie Auth",
      "API Development"
    ],
    details: [
      "Built REST APIs using ASP.NET Core (.NET 6/8)",
      "Developed Razor views and AJAX-based UI interactions",
      "Handled backend logic and database optimization",
      "Led development on RentCheck and AxesLaw projects"
    ]
  },
  {
    id: 3,
    title: "Freelance Developer",
    location: "Remote",
    description:
      "Developed modules for educational platforms and portfolio websites using ASP.NET Core, jQuery, and Razor Pages. Integrated third-party payment APIs and implemented role-based access.",
    icon: React.createElement(FaLaptopCode),
    date: "June 2023 – April 2024",
    type: "freelance",
    skills: [
      "ASP.NET Core",
      "jQuery",
      "SignalR",
      "Role-Based Access",
      "Razor Pages",
      "Email Verification / Razorpay Integration"
    ],
    details: [
      "Built API services for Mojigurukul education platform",
      "Created role-based dashboards and leaderboard system",
      "Integrated payment system and email verification",
      "Resolved bugs and enhanced cross-module performance"
    ]
  },
  {
    id: 4,
    title: "BS in Computer Science",
    location: "PUCIT, Lahore",
    description:
      "Graduated with core focus on software engineering, data structures, algorithms, and web development. Built academic projects using C#, .NET, and ML.NET.",
    icon: React.createElement(LuGraduationCap),
    date: "Dec 2020 – June 2024",
    type: "education",
    skills: [
      "C# / .NET",
      "ML.NET",
      "DBMS",
      "AI & Machine Learning",
      "Software Engineering Principles"
    ],
    details: [
      "Completed hands-on projects in AI and backend systems",
      "Focused on clean coding and scalable architecture",
      "Collaborated in Agile and academic team settings"
    ]
  }
] as const;

export const skillsData = [
  {
    category: "Languages & Backend",
    skills: [
      { name: "C#", proficiency: 90 },
      { name: "ASP.NET Core", proficiency: 90 },
      { name: "Entity Framework Core", proficiency: 85 },
      { name: "SQL Server", proficiency: 85 },
    ],
  },
  {
    category: "Frontend & Markup",
    skills: [
      { name: "HTML5", proficiency: 90 },
      { name: "CSS3", proficiency: 85 },
      { name: "JavaScript", proficiency: 90 },
      { name: "jQuery", proficiency: 85 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git / GitHub", proficiency: 90 },
      { name: "Visual Studio", proficiency: 90 },
      { name: "Postman", proficiency: 80 },
      { name: "Swagger", proficiency: 80 },
    ],
  },
  {
    category: "Other Skills",
    skills: [
      { name: "SignalR", proficiency: 75 },
      { name: "JWT / OAuth2", proficiency: 85 },
      { name: "Razor Pages", proficiency: 80 },
      { name: "Performance Optimization", proficiency: 80 },
    ],
  },
  {
    category: "Soft Skills & Practices",
    skills: [
      { name: "Agile / Scrum", proficiency: 85 },
      { name: "Team Collaboration", proficiency: 90 },
      { name: "Clean Code", proficiency: 85 },
      { name: "Problem Solving", proficiency: 90 },
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
    title: "Mojigurukul",
    description:
      "Personalized learning platform with role-based features and real-time leaderboards. Built secure backend with ASP.NET Core and SignalR.",
    tags: ["ASP.NET Core", "SignalR", "RBAC", "API Security"],
    imageUrl: "/neith.png",
    githubUrl: "",
    liveUrl: "https://mojigurukul.com/",
    type: "webapp",
    icon: React.createElement(FaCode),
    keyFeatures: [
      "RBAC based feature access",
      "Real-time leaderboard using SignalR",
      "Email-based parent invitation system",
      "Tutor payouts via Razorpay"
    ],
    techDetails: "Developed secure APIs using ASP.NET Core and integrated real-time features with SignalR. Focused on performance and access control."
  },
  {
    id: 2,
    title: "RentCheck",
    description:
      "Full-stack property management system handling workflows, listings, and role-based views. Built with .NET Core and Razor views.",
    tags: [".NET Core", "Razor", "MySQL", "JWT Auth"],
    imageUrl: "/rentcheck.png",
    githubUrl: "",
    liveUrl: "",
    type: "web",
    icon: React.createElement(FaServer),
    keyFeatures: [
      "Property listing workflows",
      "JWT-based user tracking",
      "Relational DB design and CRUD operations",
      "Admin and user dashboards"
    ],
    techDetails: "Built with .NET 6, Razor Views, and MySQL. Focused on scalable architecture and dynamic permission mapping."
  },
  
  {
    id: 3,
    title: "Neith Admin Portal",
    description:
      "Admin dashboard with secure login, user access control, and analytics modules. Developed role-based access logic and custom UI components.",
    tags: ["ASP.NET Core", "RBAC", "Razor Pages", "Admin Panel"],
    imageUrl: "/admin.png",
    githubUrl: "",
    liveUrl: "",
    type: "web",
    icon: React.createElement(FaCode),
    keyFeatures: [
      "Admin & sub-admin access control",
      "Login & analytics tracking",
      "Custom component-based Razor UI",
      "Backend access configuration"
    ],
    techDetails: "Designed with Razor Pages in ASP.NET Core. Focused on admin-side usability, modular code, and fine-grained access control."
  }
] as const;
