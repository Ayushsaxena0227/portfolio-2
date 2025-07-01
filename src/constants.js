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
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

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
    desc: "Developed and maintained scalable frontend components using React.js, TailwindCSS, and ShadCN UI.Integrated APIs for user authentication, contact forms, and masterclass registrations using Firebase and Node.js.Collaborated with the team to build responsive student dashboards, lesson navigation, and assignment tracking interfaces.Integrated Ghost.io CMS for dynamic blog rendering and SEO-friendly content management.Contributed to enhancing user experience by implementing mobile-first responsive design and interactive UI features.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "Express JS",
      "Firebase",
      "figma",
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
    title: "Livedocs",
    description:
      " A real-time collaborative document editor that allows multiple users across the world to work together seamlessly. It features synchronized editing and real-time updates, ensuring efficient teamwork and smooth document management.",
    image: movierecLogo,
    tags: ["Next JS", "TailwindCSS", "Typescript"],
    github: "https://github.com/Ayushsaxena0227/livedocs",
    webapp: "",
  },
  {
    id: 3,
    title: "Email Validator NPM Package",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/codingmastr/cmtk-email-validator",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 4,
    title: "Task Reminder Chrome Extension Tool",
    description:
      "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    image: taskremLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/codingmastr/Task-Reminder-Tool",
    webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
  {
    id: 5,
    title: "Webverse Digital",
    description:
      "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    image: webverLogo,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/codingmastr/Webverse-Digital",
    webapp: "https://webversedigital.com/",
  },
  {
    id: 6,
    title: "Coding Master",
    description:
      "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    image: cmLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    github: "https://codingmasterweb.in/",
    webapp: "https://codingmasterweb.in/",
  },
  {
    id: 7,
    title: "Image Search App",
    description:
      "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    image: imagesearchLogo,
    tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Search-App",
    webapp: "https://imagsearch.netlify.app/",
  },
  {
    id: 8,
    title: "Image Background Remover",
    description:
      "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    image: removebgLogo,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Background-Remover",
    webapp: "https://removeyourbg.netlify.app/",
  },
];
