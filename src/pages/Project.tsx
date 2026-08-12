import { Github, Play } from "lucide-react";

function project() {
  return (
    <section id="Projects">
      <h2 className="text-center text-4xl mt-32 md:text-5xl text-[#3B82F6] font-mono font-bold">
        My Projects
      </h2>
      <p className="text-sm text-center mt-4 md:text-lg font-mono mb-8 text-gray-400">
        Personal projects built to practice and showcase modern frontend
        development skills
      </p>
      <div className="grid px-5 gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3 p-3 md:p-4 xl:p-5">
        {/* project 1 */}
        <div className="min-w-full p-2">
          <div
            className="bg-transparent rounded-xl max-w-sm mx-auto overflow-hidden 
    shadow-[0_0_35px_rgba(59,130,246,0.3)] transition-all duration-300 
    hover:-translate-y-2 hover:scale-[1.02] 
    hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] 
    flex flex-col h-full"
          >
            <img
              src="Screenshot 2026-08-02 202043.png"
              className="w-full h-100 object-cover"
              alt="Movie Explorer"
            />

            <div className="p-6 text-center">
              <h3 className="text-xl font-mono text-gray-400 mb-1">
                Movie Explorer
              </h3>

              <span className="text-xs text-blue-400 font-mono block mb-3">
                React • Tailwind CSS • Node.js • Express • PostgreSQL • Prisma •
                TMDB API
              </span>

              <p className="text-gray-400 text-center font-mono text-base mt-4">
                Full stack movie discovery app powered by the TMDB API. Features
                an interactive hero banner with trailer playback, real-time
                search, favorite & watchlist management, and watch history, all
                backed by a REST API with PostgreSQL and Prisma ORM.
              </p>

              <div className="bottom-0 mt-4 grid grid-cols-2 gap-2">
                {/* Source Code */}
                <a
                  href="https://github.com/yafigian3-hue/movie-explorer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg 
          bg-[#3B82F6] px-3 py-2 font-mono text-sm text-white 
          transition hover:bg-blue-400"
                >
                  <Github size={18} />
                  Source Code
                </a>

                {/* Live Demo */}
                <a
                  href="https://yafigian3-hue.github.io/movie-explorer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg 
          bg-[#3B82F6] px-3 py-2 font-mono text-sm text-white 
          transition hover:bg-blue-400"
                >
                  <Play size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* project 2 */}
        <div className="min-w-full p-2">
          <div
            className="bg-transparent rounded-xl max-w-sm mx-auto overflow-hidden shadow-[0_0_35px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] 
    hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] flex flex-col h-full"
          >
            <img
              src="Screenshot_2026-03-01_20-31-59.png"
              className="w-full h-100 object-cover"
              alt="Weather App"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-mono text-gray-400 mb-1">
                Weather App
              </h3>

              <span className="text-xs text-blue-400 font-mono block mb-3">
                HTML • Tailwind CSS • JavaScript • API • Chart.js
              </span>

              <p className="text-gray-400 text-center font-mono text-base mt-4">
                Weather forecast application using OpenWeather API. Features
                real-time city search, dynamic temperature updates, weather
                condition icons, and interactive temperature charts. Built with
                vanilla JavaScript focusing on API integration and DOM
                manipulation.
              </p>

              <div className="bottom-0 mt-4 grid grid-cols-2 gap-2">
                {/* Source Code */}
                <a
                  href="https://github.com/yafigian3-hue/weather-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg 
          bg-[#3B82F6] px-3 py-2 font-mono text-sm text-white 
          transition hover:bg-blue-400"
                >
                  <Github size={18} />
                  Source Code
                </a>

                {/* Live Demo */}
                <a
                  href="https://yafigian3-hue.github.io/weather-app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg 
          bg-[#3B82F6] px-3 py-2 font-mono text-sm text-white 
          transition hover:bg-blue-400"
                >
                  <Play size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* project 3 */}
        <div className="min-w-full p-2">
          <div
            className="bg-transparent rounded-xl max-w-sm mx-auto overflow-hidden shadow-[0_0_35px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] 
    hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] flex flex-col h-full"
          >
            <img
              src="Screenshot 2026-08-02 204031.png"
              className="w-full h-100 object-cover"
              alt="Dashboard Keuangan"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-mono text-gray-400 mb-1">
                Dashboard Keuangan
              </h3>

              <span className="text-xs text-blue-400 font-mono block mb-3">
                Next.js • React • Prisma ORM • PostgreSQL • Tailwind CSS
              </span>

              <p className="text-gray-400 text-center font-mono text-base mt-4">
                A personal finance dashboard migrated from vanilla JavaScript to
                Next.js. It features JWT authentication, protected routes,
                transaction CRUD functionality, an interactive dashboard powered
                by Chart.js, dark mode, and a responsive design.
              </p>
              <div className="bottom-0 mt-4 grid grid-cols-2 gap-2">
                {/* Source Code */}
                <a
                  href="https://github.com/yafigian3-hue/dashboard-keuangan-nextjs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg 
          bg-[#3B82F6] px-3 py-2 font-mono text-sm text-white 
          transition hover:bg-blue-400"
                >
                  <Github size={18} />
                  Source Code
                </a>

                {/* Live Demo */}
                <a
                  href="https://dashboard-keuangan-nextjs-4olejfv8v-yafigian3-1101s-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg 
          bg-[#3B82F6] px-3 py-2 font-mono text-sm text-white 
          transition hover:bg-blue-400"
                >
                  <Play size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* project 4 */}
        <div className="min-w-full p-2">
          <div
            className="bg-transparent rounded-xl max-w-sm mx-auto overflow-hidden shadow-[0_0_35px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] 
            hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] flex flex-col h-full"
          >
            <img
              src="Screenshot_2025-12-18_21-23-22.png"
              className="w-full h-100 object-cover"
              alt="Todo List"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-mono text-gray-400 mb-1">
                Todo List
              </h3>

              <span className="text-xs text-blue-400 font-mono block mb-3">
                HTML • Tailwind CSS • JavaScript • LocalStorage • Event
                Delegation
              </span>

              <p className="text-gray-400 text-center font-mono text-base mt-4">
                Full featured todo list: DOM Selection, Event Listener,
                localStorage, Array of Objects, Looping, Event Delegation, and
                state-based Dynamic UI Update.
              </p>
              <div className="bottom-0 mt-4 grid grid-cols-2 gap-2">
                {/* Source Code */}
                <a
                  href="https://github.com/yafigian3-hue/Todo-list"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg 
               bg-[#3B82F6] px-3 py-2 font-mono text-sm text-white 
               transition hover:bg-blue-400"
                >
                  <Github size={18} />
                  Source Code
                </a>

                {/* Live Demo */}
                <a
                  href="https://yafigian3-hue.github.io/Todo-list/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg 
               bg-[#3B82F6] px-3 py-2 font-mono text-sm text-white 
               transition hover:bg-blue-400"
                >
                  <Play size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* project 5 */}
        <div className="min-w-full p-2">
          <div
            className="bg-transparent rounded-xl max-w-sm mx-auto overflow-hidden 
    shadow-[0_0_35px_rgba(59,130,246,0.3)] transition-all duration-300 
    hover:-translate-y-2 hover:scale-[1.02] 
    hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] 
    flex flex-col h-full"
          >
            <img
              src="chat.png"
              className="w-full h-100 object-cover"
              alt="Chat Filter App"
            />

            <div className="p-6 text-center">
              <h3 className="text-xl font-mono text-gray-400 mb-1">
                Chat Filter App
              </h3>

              <span className="text-xs text-blue-400 font-mono block mb-3">
                HTML • Tailwind CSS • JavaScript
              </span>

              <p className="text-gray-400 text-center font-mono text-base mt-4">
                Interactive chat filtering application that detects and filters
                inappropriate words in real time. Features live input
                validation, dynamic text updates, and responsive UI design.
                Built to practice DOM manipulation and JavaScript event
                handling.
              </p>

              <div className="bottom-0 mt-4 grid grid-cols-2 gap-2">
                {/* Source Code */}
                <a
                  href="https://github.com/yafigian3-hue/chat-filter-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg 
          bg-[#3B82F6] px-3 py-2 font-mono text-sm text-white 
          transition hover:bg-blue-400"
                >
                  <Github size={18} />
                  Source Code
                </a>

                {/* Live Demo */}
                <a
                  href="https://yafigian3-hue.github.io/chat-filter-app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg 
          bg-[#3B82F6] px-3 py-2 font-mono text-sm text-white 
          transition hover:bg-blue-400"
                >
                  <Play size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* project 6 */}
        <div className="min-w-full p-2">
          <div
            className="bg-transparent rounded-xl max-w-sm mx-auto overflow-hidden shadow-[0_0_35px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] 
            hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] flex flex-col h-full"
          >
            <img
              src="Screenshot_2025-12-13_15-01-39.png"
              className="w-full h-100 object-cover"
              alt="Landing Page"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-mono text-gray-400 mb-1">
                Landing Page
              </h3>

              <span className="text-xs text-blue-400 font-mono block mb-3">
                HTML • TailwindCSS • JavaScript • Responsive Design
              </span>

              <p className="text-gray-400 text-center font-mono text-base mt-4">
                A mobile-first commercial landing page solution designed for
                Micro Businesses conversions. Built with an interactive slider
                UX and efficient WhatsApp CTAs. Proven coding and targeted
                copywriting skills
              </p>
              <div className="bottom-0 mt-4 grid grid-cols-2 gap-2">
                {/* Source Code */}
                <a
                  href="https://github.com/yafigian3-hue/Landing-Page-UMKM?tab=readme-ov-file"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg 
               bg-[#3B82F6] px-3 py-2 font-mono text-sm text-white 
               transition hover:bg-blue-400"
                >
                  <Github size={18} />
                  Source Code
                </a>

                {/* Live Demo */}
                <a
                  href="https://yafigian3-hue.github.io/Landing-Page-UMKM/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg 
               bg-[#3B82F6] px-3 py-2 font-mono text-sm text-white 
               transition hover:bg-blue-400"
                >
                  <Play size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* project 7 */}
        <div className="min-w-full p-2">
          <div
            className="bg-transparent rounded-xl max-w-sm mx-auto overflow-hidden shadow-[0_0_35px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] 
            hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] flex flex-col h-full"
          >
            <img
              src="Screenshot_2025-12-18_21-24-53.png"
              className="w-full h-100 object-cover"
              alt="Form Validation"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-mono text-gray-400 mb-1">
                Form Validation
              </h3>

              <span className="text-xs text-blue-400 font-mono block mb-3">
                HTML • CSS • JavaScript • DOM Validation
              </span>

              <p className="text-gray-400 text-center font-mono text-base mt-4">
                Simple form validation using JavaScript. Implements real-time
                validation, error messages, and prevents form submission if
                input is invalid
              </p>
              <div className="bottom-0 mt-4 grid grid-cols-2 gap-2">
                {/* Source Code */}
                <a
                  href="https://github.com/yafigian3-hue/form-validation?tab=readme-ov-file"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg 
               bg-[#3B82F6] px-3 py-2 font-mono text-sm text-white 
               transition hover:bg-blue-400"
                >
                  <Github size={18} />
                  Source Code
                </a>

                {/* Live Demo */}
                <a
                  href="https://yafigian3-hue.github.io/form-validation/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg 
               bg-[#3B82F6] px-3 py-2 font-mono text-sm text-white 
               transition hover:bg-blue-400"
                >
                  <Play size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* project 8 */}
        <div className="min-w-full p-2">
          <div
            className="bg-transparent rounded-xl max-w-sm mx-auto overflow-hidden shadow-[0_0_35px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] 
            hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] flex flex-col h-full"
          >
            <img
              src="Screenshot_2025-12-13_15-44-25.png"
              className="w-full h-100 object-cover"
              alt="fix navbar and grid error"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-mono text-gray-400 mb-1">
                fix navbar and grid error
              </h3>

              <span className="text-xs text-blue-400 font-mono block mb-3">
                HTML • TailwindCSS • JavaScript • Responsive Layout
              </span>

              <p className="text-gray-400 text-center font-mono text-base mt-4">
                Fix issues with navbar and grid layouts using HTML, TailwindCSS,
                and JavaScript. Focus on responsiveness, design consistency, and
                optimal user experience across devices
              </p>
              <div className="bottom-0 mt-4 grid grid-cols-2 gap-2">
                {/* Source Code */}
                <a
                  href="https://github.com/yafigian3-hue/Studi-Kasus-Solusi-Perbaikan-Layout-Responsif-Navbar/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg 
               bg-[#3B82F6] px-3 py-2 font-mono text-sm text-white 
               transition hover:bg-blue-400"
                >
                  <Github size={18} />
                  Source Code
                </a>

                {/* Live Demo */}
                <a
                  href="https://yafigian3-hue.github.io/Studi-Kasus-Solusi-Perbaikan-Layout-Responsif-Navbar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg 
               bg-[#3B82F6] px-3 py-2 font-mono text-sm text-white 
               transition hover:bg-blue-400"
                >
                  <Play size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default project;
