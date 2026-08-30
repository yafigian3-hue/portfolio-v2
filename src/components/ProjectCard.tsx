"use client";

import { Github, Play } from "lucide-react";
import type { Project } from "../data/projects";
import { useInView } from "../hooks/useInView";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { ref, inView } = useInView<HTMLElement>(0.1);

  const delay = (index % 4) * 120;

  return (
    <article
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      className={` flex h-full flex-col overflow-hidden rounded-xl bg-transparent shadow-[0_0_35px_rgba(59,130,246,0.3)] transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]
        ${
          inView
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-10 scale-95 opacity-0"
        }
      `}
    >
      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Project Content */}
      <div className="flex flex-1 flex-col p-6 text-center">
        <h3 className="mb-2 font-mono text-xl font-bold text-gray-300">
          {project.title}
        </h3>

        {/* Technologies */}
        <div className="mb-4 flex flex-wrap justify-center gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className=" rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/5 px-2.5 py-1 font-mono text-xs text-[#60A5FA]"
            >
              {technology}
            </span>
          ))}
        </div>

        <p className="flex-1 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="mt-6 grid grid-cols-2 gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center justify-center gap-2 rounded-lg bg-[#3B82F6] px-3 py-2 font-mono text-sm text-white transition hover:bg-blue-400"
          >
            <Github size={18} />
            Source
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center justify-center gap-2 rounded-lg border border-[#3B82F6]/60 px-3 py-2 font-mono text-sm text-[#60A5FA] transition hover:bg-[#3B82F6]/10 hover:text-white"
          >
            <Play size={18} />
            Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
