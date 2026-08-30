"use client";

import ProjectCard from "../components/ProjectCard";
import { useInView } from "../hooks/useInView";

import {
  featuredProjects,
  mainProjects,
  practiceProjects,
} from "../data/projects";

function Project() {
  const { ref: headingRef, inView: headingInView } =
    useInView<HTMLDivElement>(0.3);

  return (
    <section
      id="projects"
      className="overflow-hidden px-6 py-24 md:px-12 md:py-32"
    >
      {/* Heading */}
      <div
        ref={headingRef}
        className={`mx-auto max-w-3xl text-center transition-all duration-700 ease-out ${
          headingInView
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <p className="font-mono text-sm font-medium uppercase tracking-[0.25em] text-[#3B82F6]">
          Selected Work
        </p>

        <h2 className="mt-3 font-sans text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          My <span className="text-[#3B82F6]">Projects</span>
        </h2>

        <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">
          A collection of projects I built while learning and improving my
          frontend and full-stack development skills.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* Other Projects */}
      <div className="mx-auto mt-10 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {mainProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* Practice Projects */}
      <div className="mx-auto mt-10 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {practiceProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Project;
