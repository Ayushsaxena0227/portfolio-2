// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import ems_logo from "./assets/company_logo/ems logo.png";
import bluestock from "./assets/company_logo/bluestock_fintech.png";
import code_cademy from "./assets/company_logo/code_cademy.png";

// Project Section Logo's
import aiimage from "./assets/work_logo/ai_img.png";
import storeit from "./assets/work_logo/storeit.png";
import devtool_img from "./assets/work_logo/devtool_chrome_img.png";
import livedocs from "./assets/work_logo/livedocs.png";
import resume_img from "./assets/work_logo/resume_builder.png";

// recent Projects
import dailyprep from "./assets/Recent_projects_logo/dailyprep.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Shadcn", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: ems_logo,
    role: "Software Development Engineer intern",
    company: "Elevate My skill",
    date: "April 2025 - Present",
    desc: "Architected and implemented scalable backend infrastructure for the Kartly e‑commerce and Ed‑Tech ecosystem using Node.js, Express.js, Firebase, and MongoDB. Built and deployed production‑grade RESTful APIs for authentication (email login, Google OAuth, OTP flows), user profile and address management, cart operations, order lifecycle, and Razorpay payment gateway integration. Designed secure session‑management middleware preventing multi‑session usage across browsers. Delivered admin‑facing APIs for mentor, user, and payment management featuring pagination, status toggling, and real‑time updates. Engineered partner and lead management modules, including automated email template generation and transactional mail dispatch on key events (partner form submission, gift‑card purchase). Integrated Firebase Cloud Messaging (FCM) for real‑time notification delivery and frontend synchronization. Collaborated cross‑functionally to align frontend behavior with new backend APIs and redesigned the checkout and booking flows from Figma mocks to production.",
    skills: [
      "Node.js",
      "Express.js",
      "React.js",
      "Tailwind CSS",
      "Firebase",
      "MongoDB",
      "Razorpay",
      "RESTful APIs",
      "FCM",
      "Pagination & Optimization",
      "Figma",
      "Git",
    ],
  },
  {
    id: 1,
    img: bluestock,
    role: "SDE intern",
    company: "Bluestock Fintech",
    date: "Nov 2024 - Dec 2024",
    desc: "Developed a secure REST API with Django REST Framework for IPO data management using JWT authentication.Designed and implemented a PostgreSQL database schema, increasing data retrieval efficiency by 40% for IPO data.Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.Participating in code reviews and providing constructive feedback to other developers.",
    skills: ["JavaScript", "HTML", "CSS", "python", "django", "postman"],
  },
  {
    id: 2,
    img: code_cademy,
    role: "Codecademy Member",
    company: "Codecademy",
    date: "September 2024 - presnt",
    desc: "Collaborated with international students on various projects, including a Spotify app ,Enabled seamless fetching of auth tokens and integrated song display functionality into the UI.Implementing responsive design and ensuring cross-browser compatibility. I Contributed significantly to the project,leading key aspects of the frontend development and enhancing overall user experience",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  },
];
export const recentProjects = [
  {
    id: 0,
    title: "Daily Prep",
    description: "Master Interviews in 10 Minutes a Day",
    image: dailyprep,
    tags: ["React", "Node.js", "Express", "Twilio", "Cloudinary", "fireabase"],
    github: "https://github.com/Ayushsaxena0227/dailyprep",
    webapp: "https://dailyprep-wfb3.vercel.app/",
  },
];

export const projects = [
  {
    id: 0,
    title: "AI-Mock-Interview",
    description:
      "AI-powered platform designed to help users prepare for interviews, featuring personalized question sets, real-time feedback, and performance tracking to enhance interview readiness.",
    image: aiimage,
    tags: [
      "JavaScript",
      "React JS",
      "TailwindCSS",
      "Shadcn",
      "clerk",
      "Firebase",
    ],
    github: "https://github.com/Ayushsaxena0227/ai-mock-interview",
    webapp: "https://ai-mockinterview-a76a7.web.app/",
  },

  {
    id: 1,
    title: "Store-it",
    description:
      " A full-stack web app for tracking and organizing storage units efficiently, built using Next.js and Appwrite. It features real-time search, automated categorization, and role-based access control for seamless inventory management.",
    image: storeit,
    tags: ["Next JS", "Appwrite", "Typescript", "TailwindCSS", "Shadcn"],
    github: "https://github.com/Ayushsaxena0227/Storeit-storage-management-app",
    webapp: "https://storeit-storage-management-app.vercel.app/sign-in",
  },
  {
    id: 2,
    title: "Resume Builder",
    description:
      "Ai-powered web app for creating, customizing, and sharing professional resumes with features like secure public links, real-time view analytics, feedback submission, and interactive previews to help job seekers build standout resumes efficiently.",
    image: resume_img,
    tags: [
      "React JS",
      "Node.js",
      "Express",
      "Firebase",
      "TailwindCSS",
      "Axios",
      "Recharts",
    ],
    github: "https://github.com/Ayushsaxena0227/resume-builder",
    webapp: "https://resume-builder-zeta-dusky.vercel.app/",
  },
  {
    id: 3,
    title: "Livedocs",
    description:
      " A real-time collaborative document editor that allows multiple users across the world to work together seamlessly. It features synchronized editing and real-time updates, ensuring efficient teamwork and smooth document management.",
    image: livedocs,
    tags: ["Next JS", "TailwindCSS", "Typescript"],
    github: "https://github.com/Ayushsaxena0227/livedocs",
    webapp: "",
  },
  {
    id: 4,
    title: "DevTool - Bookmark Manager (Chrome Extension)",
    description:
      "A free and lightweight Chrome extension that allows developers to bookmark and access helpful tools or resources from anywhere. Built with HTML, CSS, and JavaScript, it offers a clean UI and local storage support. Install it manually without any store submission.",
    image: devtool_img,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/yourname/devtool-bookmarker",
    webapp: "",
  },
  {
    id: 5,
    title: "Daily Prep",
    description: "Master Interviews in 10 Minutes a Day",
    image: dailyprep,
    tags: ["React", "Node.js", "Express", "Twilio", "Cloudinary", "fireabase"],
    github: "https://github.com/Ayushsaxena0227/dailyprep",
    webapp: "https://dailyprep-wfb3.vercel.app/",
  },
];
