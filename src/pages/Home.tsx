"use client";

import { useEffect, useState } from "react";

const TYPING_TEXTS = [
  "I build modern, responsive, and user-friendly web experiences with React and modern web technologies.",
];

function useTypewriterLoop(
  texts: string[],
  {
    typingSpeed = 35,
    deletingSpeed = 20,
    pauseAfterTyping = 1800,
    pauseAfterDeleting = 400,
  } = {},
) {
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
    } else if (isDeleting && displayed === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, pauseAfterDeleting);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayed((prev) =>
            isDeleting
              ? currentText.slice(0, prev.length - 1)
              : currentText.slice(0, prev.length + 1),
          );
        },
        isDeleting ? deletingSpeed : typingSpeed,
      );
    }

    return () => clearTimeout(timeout);
  }, [
    displayed,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseAfterTyping,
    pauseAfterDeleting,
  ]);

  return displayed;
}

function Home() {
  const displayed = useTypewriterLoop(TYPING_TEXTS);

  return (
    <main
      id="home"
      className="min-h-screen px-6 pb-16 pt-24 md:px-12 md:pb-20 md:pt-20"
    >
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-start pt-10 md:items-center md:pt-0">
        <div className="flex w-full flex-col items-center gap-12 md:flex-row md:items-center md:justify-between md:gap-8">
          {/* Hero Content */}
          <div className="w-full max-w-2xl text-center md:w-1/2 md:text-left animate-[fadeIn_0.8s_ease-out]">
            <p className="mb-3 font-mono text-sm font-medium tracking-[0.25em] text-[#3B82F6] uppercase md:text-base">
              Hi, I'm
            </p>

            <h1 className="font-sans text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-6xl lg:text-7xl">
              Yafi<span className="text-[#3B82F6]">DEV</span>
            </h1>

            <h2 className="mt-3 font-sans text-2xl font-semibold text-slate-300 sm:text-3xl md:text-3xl">
              Frontend Developer
            </h2>

            <p className="mx-auto mt-5 min-h-[3.5rem] max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg md:mx-0 md:min-h-[3rem]">
              {displayed}
              <span
                className="ml-0.5 inline-block w-[2px] animate-[blink_0.8s_steps(1)_infinite] bg-[#3B82F6] align-middle"
                style={{ height: "1.1em" }}
              />
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="#projects"
                className="rounded-lg bg-[#3B82F6] px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#478dff] hover:shadow-[0_0_25px_rgba(59,130,246,0.45)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-[#3B82F6]/60 px-7 py-3 font-semibold text-[#60A5FA] transition-all duration-300 hover:-translate-y-1 hover:border-[#3B82F6] hover:bg-[#3B82F6]/10 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex w-full items-center justify-center md:w-1/2 md:justify-end animate-[fadeIn_1s_ease-out]">
            <div className="relative flex items-center justify-center">
              {/* Blue Glow */}
              <div className="absolute h-52 w-52 animate-pulse rounded-full bg-[#3B82F6]/20 blur-3xl sm:h-64 sm:w-64 md:h-80 md:w-80" />

              <img
                src="hero.png"
                alt="Developer illustration"
                className="relative z-10 w-full max-w-[280px] drop-shadow-[0_0_35px_rgba(59,130,246,0.35)] sm:max-w-[340px] md:max-w-[470px]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
