import { Icon } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiGit,
  SiGithub,
} from "react-icons/si";

const techStack = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
];

function stack() {
  return (
    <div className="mt-20">
      <h2 className="text-4xl text-center md:text-5xl text-[#3B82F6] font-mono font-bold">
        Tech Stack
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mt-8 px-6">
        {techStack.map(({ name, icon: Icon, color }) => (
          <div
            key={name}
            className="group relative flex items-center justify-center rounded-xl 
                       w-auto p-5 h-12 gap-1 grid-cols-3
                     border-[#3B82F6] border-[1px] shadow-[0_0_35px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] 
                       hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]"
          >
            <Icon
              style={{ color: color }}
              className="text-2xl transition-transform duration-300 group-hover:scale-110"
            />

            <span className="text-sm font-mono text-gray-400 group-hover:text-white transition-colors">
              {name}
            </span>

            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
              style={{ backgroundColor: color }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default stack;
