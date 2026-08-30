import { useInView } from "../hooks/useInView";

function About() {
  const { ref: sectionRef, inView } = useInView<HTMLDivElement>(0.15);

  const techStack = ["React", "JavaScript", "TypeScript", "Tailwind CSS"];

  return (
    <section
      id="about"
      className="overflow-hidden px-6 py-24 md:px-12 md:py-32"
    >
      <div
        ref={sectionRef}
        className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:justify-between md:gap-16"
      >
        {/* About Content */}
        <div className="w-full md:w-1/2">
          <p
            className={`mb-3 text-center font-mono text-sm font-medium tracking-[0.25em] text-[#3B82F6] uppercase transition-all duration-700 ease-out md:text-left ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Get to know me
          </p>

          <h2
            className={`text-center font-sans text-4xl font-extrabold tracking-tight text-white transition-all duration-700 ease-out md:text-left md:text-5xl ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: inView ? "100ms" : "0ms" }}
          >
            About <span className="text-[#3B82F6]">Me</span>
          </h2>

          <div
            className={`mt-6 space-y-5 text-base leading-relaxed text-slate-400 transition-all duration-700 ease-out md:text-lg ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: inView ? "200ms" : "0ms" }}
          >
            <p>
              I am a junior frontend developer focused on building clean,
              responsive, and user-friendly web interfaces. I enjoy turning
              ideas and designs into functional websites with attention to
              detail and usability.
            </p>

            <p>
              I work mainly with React, JavaScript, TypeScript, and Tailwind CSS
              to build modern frontend applications. I strengthen my skills by
              continuously building real-world projects.
            </p>

            <p>
              As a freelancer, I value clear communication, clean code, and
              maintainable solutions. My goal is to help clients turn their
              ideas into reliable and well-structured web interfaces.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            {techStack.map((tech, index) => (
              <span
                key={tech}
                className={`rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/5 px-4 py-2 font-mono text-sm text-[#60A5FA] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-[#3B82F6]/60 hover:bg-[#3B82F6]/10 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] ${
                  inView
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-4 scale-90 opacity-0"
                }`}
                style={{
                  transitionDelay: inView ? `${300 + index * 90}ms` : "0ms",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* About Visual */}
        <div
          className={`flex w-full justify-center transition-all duration-1000 ease-out md:w-1/2 md:justify-end ${
            inView ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
          style={{ transitionDelay: inView ? "150ms" : "0ms" }}
        >
          <div className="relative flex items-center justify-center [animation:float_5.5s_ease-in-out_infinite]">
            {/* Blue Glow */}
            <div className="absolute h-56 w-56 animate-pulse rounded-full bg-[#3B82F6]/15 blur-3xl md:h-72 md:w-72" />

            <img
              src="about.png"
              alt="About me illustration"
              className="relative z-10 w-full max-w-[300px] drop-shadow-[0_0_35px_rgba(59,130,246,0.3)] md:max-w-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
