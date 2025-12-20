function home() {
  return (
    <main className="min-h-screen md:min-h-0 flex items-start lg:block px-6 pt-32 lg:py-32">
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl text-slate-300 font-mono font-bold">
            Welcome <br />
            I'M{" "}
            <span className="text-4xl md:text-5xl text-[#3B82F6] font-mono font-bold">
              YafiDEV
            </span>
          </h1>
          <p className="text-sm md:text-xl font-mono mb-8 text-gray-400">
            Frontend Developer in Progress
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/hero.png"
            alt="hero img"
            className="w-full max-w-[300px] md:max-w-[450px] drop-shadow-[0_0_35px_rgba(59,130,246,0.3)]"
          />
        </div>
      </section>
    </main>
  );
}

export default home;
