"use client";

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
import { useInView } from "../hooks/useInView";

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

function Stack() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <div ref={ref} className="mt-20">
      {/* Heading */}
      <div
        className={`text-center transition-all duration-700 ease-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h3 className="mt-3 font-sans text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Tech <span className="text-[#3B82F6]">Stack</span>
        </h3>
      </div>

      {/* Tech Stack */}
      <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-4 px-6 md:gap-5">
        {techStack.map(({ name, icon: Icon, color }, index) => {
          const delay = index * 100;

          return (
            <div
              key={name}
              style={{
                transitionDelay: inView ? `${delay}ms` : "0ms",
              }}
              className={`group relative flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] px-5 py-3 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#3B82F6]/40 hover:bg-white/[0.04] ${
                inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              {/* Icon */}
              <Icon
                style={{ color }}
                className="text-xl transition-transform duration-300 group-hover:scale-110"
              />

              {/* Name */}
              <span className="font-mono text-sm text-slate-400 transition-colors duration-300 group-hover:text-white">
                {name}
              </span>

              {/* Subtle glow */}
              <div
                className="pointer-events-none absolute inset-0 -z-10 rounded-lg opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20"
                style={{ backgroundColor: color }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stack;
