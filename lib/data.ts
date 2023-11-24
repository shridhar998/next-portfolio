
// import corpcommentImg from "@/public/corpcomment.png";
import Project1 from "@/public/project1.jpg";
import Project2 from "@/public/project2.png";
import Expereince1 from "@/public/business-logo.png";
import Expereince2 from "@/public/exp2.jpg";
import Education from "@/public/IIT-Logo.jpg";

// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  // {
  //   name: "Home",
  //   hash: "#home",
  // },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#educations",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "Freelance Full-Stack Developer",
    company:"Suman Jewellers | Remote (Jun 2023 - July 2023)",
    description:
      "I worked as a freelance full-stack developer here. My stack includes React Native, Expo, React.js, Node JS, Express JS, MongoDB and Vite. I'm open to full-time opportunities now.",
    tags: ["React Native", "Expo", "Express JS", "Mongo DB","React JS"],
    imageUrl: Expereince1,
  },
  {
    title: "Software Developer Intern",
    company:"Mathademy | Remote (May 2022 - July 2022)",
    description: "Developed an Android Chat application from scratch, for the startup. Implemented features such as texting as well as image or pdf attachment in the chat. Integrated Quickblox Chat API and SDK for the backend.",
     tags: ["React Native", "Expo", "Android Studio","Quickblox API"],
    imageUrl: Expereince2,
  },
] as const;

export const educationData = [
  {
    title: "Indian Institute of Technology (BHU), Varanasi",
    description: "B. Tech in Chemical Engineering, 8.71 CPI",
    imageUrl: Education,
  },
] as const;

export const projectsData = [
  {
    title: "College Bazaar",
    description:
      "Android Application made using React Native for college students, where they can sell and buy used items. Login/Signup, Authentication and calling facility provided. Used Firestore DB, Firebase authentication and Razorpay API for payment gateway integration. Project got selected in top 10 in CodeRelay Hackathon.",
    tags: ["React Native", "Android Studio", "Firebase", "Razorpay"],
    imageUrl: Project1,
    projectLink:"https://github.com/shridhar998/College-Bazaar"
  },
  {
    title: "Baat Chit",
    description:"A full-stack chat application. Features such as Login/Signup and Authentication provided. Single Chat as well as Group Chat functionality provided, along with searching and updating users. Used JWT token for authentication and Bcrypt JS for encryption.",
      tags: ["React JS", "Express JS", "Node JS", "Mongo DB"],
    imageUrl: Project2,
    projectLink:"https://github.com/shridhar998/Baat_chit"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React Native",
  "Expo",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Firebase"
] as const;