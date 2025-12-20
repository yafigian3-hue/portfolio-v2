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
            className="bg-transparent rounded-xl max-w-sm mx-auto overflow-hidden shadow-[0_0_35px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] 
            hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] flex flex-col h-full"
          >
            <img
              src="/Screenshot_2025-12-13_15-01-39.png"
              className="w-full h-100 object-cover"
              alt="Landing Page"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-mono  text-gray-400 mb-2">
                Landing Page
              </h3>
              <p className="text-gray-400 text-center font-mono text-base mt-4">
                A mobile-first commercial landing page solution designed for
                Micro Businesses conversions. Built with an interactive slider
                UX and efficient WhatsApp CTAs. Proven coding and targeted
                copywriting skills
              </p>
              <div className="flex justify-center mt-2 items-center gap-2 text-center">
                {/* Source Code */}
                <a
                  href="https://github.com/yafigian3-hue/Landing-Page-UMKM?tab=readme-ov-file"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-[#3B82F6] px-4 py-2 font-mono text-sm text-white transition hover:bg-blue-400"
                >
                  <Github size={18} />
                   Source Code
                </a>

                {/* Live Demo */}
                <a
                  href="https://yafigian3-hue.github.io/Landing-Page-UMKM/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between gap-2 rounded-lg bg-[#3B82F6] px-4 py-2 font-mono text-sm text-white transition hover:bg-blue-400"
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
              src="/Screenshot_2025-12-13_15-44-25.png"
              className="w-full h-100 object-cover"
              alt="fix navbar and grid error"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-mono  text-gray-400 mb-2">
                fix navbar and grid error
              </h3>
              <p className="text-gray-400 text-center font-mono text-base mt-4">
                Fix issues with navbar and grid layouts using HTML, TailwindCSS,
                and JavaScript. Focus on responsiveness, design consistency, and
                optimal user experience across devices
              </p>
              <div className="flex justify-center mt-3 items-center gap-2 text-center">
                {/* Source Code */}
                <a
                  href="https://github.com/yafigian3-hue/Studi-Kasus-Solusi-Perbaikan-Layout-Responsif-Navbar/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-[#3B82F6] px-4 py-2 font-mono text-sm text-white transition hover:bg-blue-400"
                >
                  <Github size={18} />
                  Source Code
                </a>

                {/* Live Demo */}
                <a
                  href="https://yafigian3-hue.github.io/Studi-Kasus-Solusi-Perbaikan-Layout-Responsif-Navbar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between gap-2 rounded-lg bg-[#3B82F6] px-4 py-2 font-mono text-sm text-white transition hover:bg-blue-400"
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
              src="/Screenshot_2025-12-18_21-24-53.png"
              className="w-full h-100 object-cover"
              alt="Form Validation"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-mono  text-gray-400 mb-2">
                Form Validation
              </h3>
              <p className="text-gray-400 text-center font-mono text-base mt-4">
                Simple form validation using JavaScript. Implements real-time
                validation, error messages, and prevents form submission if
                input is invalid
              </p>
              <div className="flex justify-center mt-3 items-center gap-2 text-center">
                {/* Source Code */}
                <a
                  href="https://github.com/yafigian3-hue/form-validation?tab=readme-ov-file"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-[#3B82F6] px-4 py-2 font-mono text-sm text-white transition hover:bg-blue-400"
                >
                  <Github size={18} />
                  Source Code
                </a>

                {/* Live Demo */}
                <a
                  href="https://yafigian3-hue.github.io/form-validation/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between gap-2 rounded-lg bg-[#3B82F6] px-4 py-2 font-mono text-sm text-white transition hover:bg-blue-400"
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
              src="/Screenshot_2025-12-18_21-23-22.png"
              className="w-full h-100 object-cover"
              alt="Todo List"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-mono  text-gray-400 mb-2">
                Todo List
              </h3>
              <p className="text-gray-400 text-center font-mono text-base mt-4">
                Full featured todo list: DOM Selection, Event Listener,
                localStorage, Array of Objects, Looping, Event Delegation, and
                state-based Dynamic UI Update.
              </p>
              <div className="flex justify-center mt-3 items-center gap-2 text-center">
                {/* Source Code */}
                <a
                  href="https://github.com/yafigian3-hue/Todo-list"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-[#3B82F6] px-4 py-2 font-mono text-sm text-white transition hover:bg-blue-400"
                >
                  <Github size={18} />
                  Source Code
                </a>

                {/* Live Demo */}
                <a
                  href="https://yafigian3-hue.github.io/Todo-list/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between gap-2 rounded-lg bg-[#3B82F6] px-4 py-2 font-mono text-sm text-white transition hover:bg-blue-400"
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
