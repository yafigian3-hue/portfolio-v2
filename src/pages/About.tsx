function about() {
  return (
    <section
      id="About"
      className="min-h-screen flex items-center lg:block lg:min-h-0 px-6 py-20 lg:py-32"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* isi */}
        <div className="md:w-1/2">
          <h2 className="text-4xl text-center md:text-start md:text-5xl text-[#3B82F6] font-mono font-bold">
            About Me
          </h2>

          <p className="text-sm md:text-lg font-mono text-gray-400 mt-4">
            I am a junior frontend developer focused on building clean,
            responsive, and user-friendly web interfaces. I enjoy turning
            designs into functional websites with attention to detail and
            usability.
          </p>

          <p className="text-sm md:text-lg font-mono text-gray-400 mt-8">
            I work mainly with React, TypeScript, and Tailwind CSS to build
            modern frontend applications. I have a strong foundation in
            JavaScript and improve my skills by building real-world projects.
          </p>

          <p className="text-sm md:text-lg font-mono text-gray-400 mt-8">
            As a freelancer, I value clear communication, clean code, and
            maintainable solutions. My goal is to help clients turn ideas into
            reliable and well-structured web interfaces.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="about.png"
            alt="about img"
            className="w-full max-w-[350px] md:max-w-[400px] drop-shadow-[0_0_35px_rgba(59,130,246,0.3)]"
          />
        </div>
      </div>
    </section>
  );
}

export default about;
