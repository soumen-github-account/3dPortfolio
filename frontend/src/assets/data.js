
import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiGooglegemini, SiPostgresql,SiSpringboot, SiRedux, SiYoutubekids, SiShadcnui, SiRazorpay, SiMongodb, SiFirebase, SiExpress, SiStripe, SiOpenai, SiChartdotjs } from "react-icons/si";
import { TiCloudStorageOutline } from "react-icons/ti";

export const techIconMap = {
  React: FaReact,
  Tailwind: SiTailwindcss,
  "Node.js": FaNodeJs,
  "Shadcn Ui": SiShadcnui,
  "Youtube API":SiYoutubekids,
  Razorpay : SiRazorpay,
  Redux: SiRedux,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  Express: SiExpress,
  Stripe: SiStripe,
  "OpenAI API": SiOpenai,
  "Gemini API": SiGooglegemini,
  "Neon DB": SiPostgresql,
  "Chart.js": SiChartdotjs,
  Django: SiDjango,
  "Spring Boot": SiSpringboot,
  "Cloud Storage": TiCloudStorageOutline
};


import img1 from '../assets/project_img/img1.png'
import img2 from '../assets/project_img/img2.png'
import img3 from '../assets/project_img/img3.png'
import img4 from '../assets/project_img/img4.png'
import img5 from '../assets/project_img/img5.png'
import img6 from '../assets/project_img/img6.png'
import img7 from '../assets/project_img/img7.png'
import img8 from '../assets/project_img/img8.png'
import img9 from '../assets/project_img/img9.png'
import img10 from '../assets/project_img/img10.png'
import img11 from '../assets/project_img/img11.png'
import img12 from '../assets/project_img/img12.png'


export const projectData = [
  {
    id: 1,
    image: img1,
    name: "Build Your Resume Effortlessly",
    description:
      "Craft a standout resume in minutes with our smart and intuitive resume builder.",
    liveUrl: "https://resume-builder-frontent.onrender.com/",
    githubUrl: "https://github.com/soumen-github-account/resume-builder",
    techStack: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Gemini API"],
  },
  {
    id: 2,
    image: img2,
    name: "Instagram-style Social App",
    description:
      "A social platform where you share reels, stories, and life’s highlights with a modern twist.",
    liveUrl: "https://instagram-clone-frontend-9xh4.onrender.com",
    githubUrl: "https://github.com/soumen-github-account/instagram-clone",
    techStack: ["React", "Redux", "Tailwind", "Node.js", "Express", "Shadcn Ui","MongoDB"],
  },
  {
    id: 3,
    image: img3,
    name: "Shop fast. Live more. 'Shopstic'",
    description:
      "Discover products you love, deals you can't resist, and fast checkout.",
    liveUrl: "https://e-commerce-frontend-10m4.onrender.com",
    githubUrl: "https://github.com/soumen-github-account/E-Commerce",
    techStack: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Razorpay"],
  },
  {
    id: 4,
    image: img4,
    name: "Instant Doctor Appointments",
    description:
      "Book doctor appointments, consult online, and access healthcare anytime.",
    liveUrl: "https://doctor-appointment-frontend-rfco.onrender.com",
    githubUrl: "https://github.com/soumen-github-account/doctor-appointment",
    techStack: ["React", "Tailwind", "Node.js", "Express","MongoDB"],
  },
  {
    id: 5,
    image: img5,
    name: "Mess Booking Made Simple",
    description:
      "Manage and book daily meals from your favorite mess effortlessly.",
    liveUrl: "https://mess-book-frontend.onrender.com",
    githubUrl: "https://github.com/soumen-github-account/mess-book",
    techStack: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 6,
    image: img6,
    name: "Your Music. Your Mood.",
    description:
      "Stream music, create playlists, and discover new tracks every day.",
    liveUrl: "https://spotify-clone-psi-gules.vercel.app/",
    githubUrl: "https://github.com/soumen-github-account/spotify-clone",
    techStack: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 7,
    image: img7,
    name: "Unlimited Videos. One App.",
    description:
      "Upload, stream, and explore videos anytime, anywhere.",
    liveUrl: "https://jovial-baklava-28f907.netlify.app/",
    githubUrl: "https://github.com/yourusername/video-streaming-app",
    techStack: ["React", "Cloud Storage", "Youtube API"],
  },
  {
    id: 8,
    image: img8,
    name: "From Snacks to Full Plates",
    description:
      "Order food from top restaurants and get it delivered fast.",
    liveUrl: "https://dainty-bavarois-7e4335.netlify.app/",
    githubUrl: "https://github.com/yourusername/food-delivery",
    techStack: ["React", "Spring Boot", "MongoDB"],
  },
  {
    id: 9,
    image: img9,
    name: "Your Intelligent Conversation Partner",
    description:
      "An AI-powered assistant for chatting, writing, and coding.",
    liveUrl: "https://chat-bot-sd.netlify.app/",
    githubUrl: "https://github.com/soumen-github-account/own-chatbot",
    techStack: ["React", "Gemini API", "Tailwind"],
  },
  {
    id: 10,
    image: img10,
    name: "Jewellery Shopping Made Elegant",
    description:
      "Browse, wishlist, and shop beautiful jewellery with confidence.",
    liveUrl: "https://jewellery-shop-frontend-henna.vercel.app/",
    githubUrl: "https://github.com/soumen-github-account/Jewellery-shop",
    techStack: ["React", "Tailwind", "Node.js", "Neon DB"],
  },
  {
    id: 11,
    image: img11,
    name: "Find Jobs That Fit Your Future",
    description:
      "Search, apply, and track job opportunities easily.",
    liveUrl: "https://job-finder-portal-worksphere.onrender.com/",
    githubUrl: "https://github.com/soumen-github-account/internship-project",
    techStack: ["Express", "Tailwind", "MongoDB"],
  },
  {
    id: 12,
    image: img12,
    name: "Track Expenses. Control Your Money.",
    description:
      "Monitor income, expenses, and visualize spending habits.",
    liveUrl: "https://expense-tracker-frontend-omega-one.vercel.app/",
    githubUrl: "https://github.com/soumen-github-account/expense-tracker",
    techStack: ["React", "Chart.js", "Django","MongoDB"],
  },
];
