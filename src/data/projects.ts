export type Project = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
};

export const featuredProjects: Project[] = [
  {
    title: "Movie Explorer",
    image: "Screenshot 2026-08-02 202043.png",
    description:
      "Full-stack movie discovery app powered by the TMDB API. Features an interactive hero banner with trailer playback, real-time search, favorite and watchlist management, and watch history, backed by a REST API with PostgreSQL and Prisma ORM.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "TMDB API",
    ],
    github: "https://github.com/yafigian3-hue/movie-explorer",
    demo: "https://yafigian3-hue.github.io/movie-explorer/",
  },

  {
    title: "Dashboard Keuangan",
    image: "Screenshot 2026-08-02 204031.png",
    description:
      "A personal finance dashboard migrated from vanilla JavaScript to Next.js. It features authentication, protected routes, transaction CRUD functionality, interactive financial charts, dark mode, and responsive design.",
    technologies: [
      "Next.js",
      "React",
      "Prisma ORM",
      "PostgreSQL",
      "Tailwind CSS",
      "Chart.js",
    ],
    github: "https://github.com/yafigian3-hue/dashboard-keuangan-nextjs",
    demo: "https://dashboard-keuangan-nextjs-4olejfv8v-yafigian3-1101s-projects.vercel.app/",
  },
];

export const mainProjects: Project[] = [
  {
    title: "Weather App",
    image: "Screenshot_2026-03-01_20-31-59.png",
    description:
      "Weather forecast application using OpenWeather API. Features real-time city search, dynamic temperature updates, weather condition icons, and interactive temperature charts.",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "OpenWeather API",
      "Chart.js",
    ],
    github: "https://github.com/yafigian3-hue/weather-app",
    demo: "https://yafigian3-hue.github.io/weather-app/",
  },

  {
    title: "Todo List",
    image: "Screenshot_2025-12-18_21-23-22.png",
    description:
      "Full-featured todo list built to practice DOM manipulation, event listeners, localStorage, arrays of objects, looping, event delegation, and dynamic UI updates.",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "LocalStorage",
      "Event Delegation",
    ],
    github: "https://github.com/yafigian3-hue/Todo-list",
    demo: "https://yafigian3-hue.github.io/Todo-list/",
  },

  {
    title: "Landing Page",
    image: "Screenshot_2025-12-13_15-01-39.png",
    description:
      "A mobile-first commercial landing page solution designed for micro businesses, featuring an interactive slider, responsive design, and WhatsApp-focused call-to-action elements.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Responsive Design"],
    github:
      "https://github.com/yafigian3-hue/Landing-Page-UMKM?tab=readme-ov-file",
    demo: "https://yafigian3-hue.github.io/Landing-Page-UMKM/",
  },
];

export const practiceProjects: Project[] = [
  {
    title: "Chat Filter App",
    image: "chat.png",
    description:
      "Interactive chat filtering application that detects and filters inappropriate words in real time. Built to practice DOM manipulation, live input validation, and JavaScript event handling.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/yafigian3-hue/chat-filter-app",
    demo: "https://yafigian3-hue.github.io/chat-filter-app/",
  },

  {
    title: "Form Validation",
    image: "Screenshot_2025-12-18_21-24-53.png",
    description:
      "Simple form validation using JavaScript with real-time validation, error messages, and submission prevention when input is invalid.",
    technologies: ["HTML", "CSS", "JavaScript", "DOM Validation"],
    github:
      "https://github.com/yafigian3-hue/form-validation?tab=readme-ov-file",
    demo: "https://yafigian3-hue.github.io/form-validation/index.html",
  },

  {
    title: "Fix Navbar and Grid Error",
    image: "Screenshot_2025-12-13_15-44-25.png",
    description:
      "Responsive layout case study focused on fixing navbar and grid issues using HTML, Tailwind CSS, and JavaScript while improving design consistency across devices.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Responsive Layout"],
    github:
      "https://github.com/yafigian3-hue/Studi-Kasus-Solusi-Perbaikan-Layout-Responsif-Navbar/tree/main",
    demo: "https://yafigian3-hue.github.io/Studi-Kasus-Solusi-Perbaikan-Layout-Responsif-Navbar/",
  },
];
