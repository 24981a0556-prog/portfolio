import truthlensImg from "../assets/truthlens.png.asset.json";
import hanumanImg from "../assets/hanuman.png.asset.json";
import rudhraImg from "../assets/rudhra.png.asset.json";
import weddingImg from "../assets/wedding.png.asset.json";
import resumeAsset from "../assets/resume.pdf.asset.json";

export const profile = {
  name: "Rahul Patnaik Potnuru",
  role: "Full Stack Developer",
  tagline:
    "I design and build modern websites and digital products that help businesses look credible online and convert visitors into customers.",
  email: "potnururahul477@gmail.com",
  github: "https://github.com/24981a0556-prog",
  linkedin: "https://www.linkedin.com/in/rahul-patnaik-potnuru/",
  resumeUrl: resumeAsset.url,
  location: "India",
};

export const stats = [
  { value: 4, suffix: "+", label: "Projects Shipped" },
  { value: 4, suffix: "", label: "Live Production Sites" },
  { value: 100, suffix: "%", label: "Responsive Designs" },
  { value: 2028, suffix: "", label: "Graduation Year", noCount: true },
];

export const techStack = [
  {
    title: "Languages",
    skills: [
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "SQL", level: 75 },
      { name: "Python", level: 70 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 92 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "Auth & JWT", level: 75 },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 72 },
      { name: "Supabase", level: 78 },
      { name: "Cloudflare", level: 70 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Vercel", level: 85 },
    ],
  },
];

export const projects = [
  {
    title: "TruthLens+",
    category: "AI Product",
    image: truthlensImg.url,
    description:
      "An AI-powered misinformation detector that verifies text and images in seconds, giving transparent, explainable verdicts with confidence scoring.",
    problem:
      "News consumers struggle to verify rapidly spreading claims and don't trust black-box AI verdicts.",
    solution:
      "A multimodal verification flow with location-aware detection and an explainable confidence panel — built so users understand the why, not just the result.",
    features: [
      "Multimodal text + image verification",
      "Location-aware misinformation detection",
      "Explainable AI confidence scoring",
      "Claim analysis with verification steps",
    ],
    tech: ["React", "TypeScript", "AI APIs", "Tailwind"],
    live: "https://truthlens-verified-48z2y0k9r-24981a0556-progs-projects.vercel.app/",
    github: "https://github.com/24981a0556-prog/truthlens-verified",
  },
  {
    title: "Hanuman Petroleums",
    category: "Business Website",
    image: hanumanImg.url,
    description:
      "A bilingual production website for a 24/7 fuel station — built to drive calls, directions, and trust for a real client serving Visakhapatnam.",
    problem:
      "A local fuel business had no professional web presence and was losing customers searching for nearby stations online.",
    solution:
      "A fast, mobile-first bilingual (English / Hindi) website with one-tap call, directions, and service highlights — currently live and serving real traffic.",
    features: [
      "Bilingual EN / HI toggle",
      "One-tap call & Google Maps directions",
      "Services, reviews, and contact sections",
      "100% mobile responsive",
    ],
    tech: ["React", "Tailwind", "Vite", "Maps API"],
    live: "https://www.hanumanpetroleums.com/",
    github: "https://github.com/24981a0556-prog/hanuman-petrol-hub",
  },
  {
    title: "Rudhra Clicks",
    category: "Photography Studio",
    image: rudhraImg.url,
    description:
      "A premium photography studio website with cinematic scroll, floating gallery cards, and a WhatsApp booking flow that turns visitors into clients.",
    problem:
      "A photography studio needed a portfolio that felt as crafted as their work — not another template gallery.",
    solution:
      "Editorial typography, floating polaroid-style gallery, and a frictionless WhatsApp booking CTA designed around real-world client behaviour in India.",
    features: [
      "Floating gallery with parallax motion",
      "Editorial serif typography system",
      "WhatsApp-first booking funnel",
      "Six dedicated event categories",
    ],
    tech: ["React", "Vite", "Tailwind", "Framer Motion"],
    live: "https://rudhra-clicks-studio.vercel.app/",
    github: "https://github.com/24981a0556-prog/rudhra-clicks-studio",
  },
  {
    title: "Wedding Whispers",
    category: "Digital Invitation",
    image: weddingImg.url,
    description:
      "A scroll-driven cinematic wedding invitation with live countdown, ceremony cards, and Maps integration — replacing static cards with a memorable web experience.",
    problem:
      "Traditional printed invites can't share live updates, directions, or video — and families want a single shareable link.",
    solution:
      "A full-screen cinematic invite with countdown, per-ceremony cards, ambient audio, and one-tap Maps directions — built on TanStack Start and deployed to Cloudflare Workers.",
    features: [
      "Live countdown to the ceremony",
      "Per-event ceremony cards with maps",
      "Ambient audio & cinematic visuals",
      "Edge-deployed for instant loads",
    ],
    tech: ["TanStack Start", "React", "Cloudflare Workers", "Tailwind"],
    live: "https://tanstack-start-app.potnuru.workers.dev/",
    github: "https://github.com/24981a0556-prog/wedding-whispers-scroll",
  },
];


export const credibility = [
  "CS Engineering Student",
  "Open to Freelance & Internships",
  "Real client work delivered",
  "Production deployments on Vercel & Cloudflare",
];
