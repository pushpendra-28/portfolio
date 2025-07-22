import type {
  TNavLink,
  TService,
  TTechnology,
  // TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
 
  stockmarket,
  // blogsite,
  // houseprice,
  // uberdata,
  
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const projects: TProject[] = [
  {
    name: "Stock Market Analysis",
    description:
      "A data-driven web application that analyzes historical stock data using Python and libraries like Pandas and Matplotlib to help users make informed investment decisions.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "pandas", color: "green-text-gradient" },
      { name: "matplotlib", color: "pink-text-gradient" },
    ],
    image: stockmarket, // Replace with your actual imported image
    sourceCodeLink: "https://github.com/pushpendra-28/Stock-Market-Analysis",
  },
  {
    name: "Blog Website",
    description:
      "A responsive blog platform built using React and Node.js, allowing users to create, read, update, and delete blog posts with an intuitive UI and backend API integration.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    // image: blogsite, // Replace with your actual imported image
    image: "",
    sourceCodeLink: "https://github.com/pushpendra-28/Blog-Website",
  },
  {
    name: "House Price Prediction System",
    description:
      "A machine learning-based model to predict house prices using linear regression and data preprocessing techniques, implemented using Python and scikit-learn.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "scikit-learn", color: "green-text-gradient" },
      { name: "numpy", color: "pink-text-gradient" },
    ],
    // image: houseprice, // Replace with your actual imported image
    image: "",
    sourceCodeLink: "https://github.com/pushpendra-28/House-Price-Prediction",
  },
  {
    name: "Uber Data Analysis",
    description:
      "Analyzed Uber ride data using Python to uncover insights into trip distribution, demand peaks, and traffic patterns, aiding in data-driven decision making.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "pandas", color: "green-text-gradient" },
      { name: "seaborn", color: "pink-text-gradient" },
    ],
    // image: uberdata, // Replace with your actual imported image
    image: "",
    sourceCodeLink: "https://github.com/Amritansu-Adi/Uber_Data_Analysis",
  },
  {
    name: "Image Generation AI",
    description:
      "An AI-powered tool that uses diffusion models to generate realistic images from text prompts, leveraging deep learning frameworks for generative tasks.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "diffusers", color: "green-text-gradient" },
      { name: "transformers", color: "pink-text-gradient" },
    ],
    // image: imagegenai, // Replace with your actual imported image
    image: "",
    sourceCodeLink: "https://github.com/Amritansu-Adi/Image_Gen_AI",
  },
];



export { services, technologies, projects };
