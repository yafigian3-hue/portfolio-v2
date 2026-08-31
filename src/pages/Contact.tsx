"use client";

import { FaWhatsapp } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { useInView } from "../hooks/useInView";

function Contact() {
  const { ref, inView } = useInView<HTMLElement>({
    threshold: 0.4,
    rootMargin: "-20% 0px -20% 0px",
  });

  return (
    <section
      ref={ref}
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center px-6 py-20"
    >
      {/* Heading */}
      <div
        className={`text-center transition-all duration-700 ease-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p className="font-mono text-sm font-medium uppercase tracking-[0.25em] text-[#3B82F6]">
          Get In Touch
        </p>

        <h2 className="mt-3 font-sans text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Contact <span className="text-[#3B82F6]">Me</span>
        </h2>
      </div>

      {/* Description */}
      <p
        className={`mt-6 max-w-2xl text-center font-mono text-sm leading-relaxed text-slate-400 transition-all duration-700 ease-out md:text-lg ${
          inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
        style={{ transitionDelay: inView ? "150ms" : "0ms" }}
      >
        Need help creating a website, a quick micro-job, or just a question?
        Please contact me via WhatsApp. I'll respond to your message as soon as
        possible during business hours!
      </p>

      {/* Contact Buttons */}
      <div className="mt-12 flex w-full max-w-xs flex-col gap-4">
        {/* WhatsApp */}
        <a
          href="https://wa.me/6283896738779"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            transitionDelay: inView ? "300ms" : "0ms",
          }}
          className={`group relative flex h-14 w-full items-center justify-center gap-4 overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] px-5 font-mono text-sm font-medium text-slate-300 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#25D366]/40 hover:bg-[#25D366]/5 hover:text-white hover:shadow-[0_0_25px_rgba(37,211,102,0.2)] ${
            inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <FaWhatsapp
            size={24}
            className="text-[#25D366] transition-transform duration-300 group-hover:scale-110"
          />

          <span>Chat via WhatsApp</span>

          <div className="pointer-events-none absolute inset-0 -z-10 rounded-lg bg-[#25D366] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/yafigian3-hue"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            transitionDelay: inView ? "400ms" : "0ms",
          }}
          className={`group relative flex h-14 w-full items-center justify-center gap-4 overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] px-5 font-mono text-sm font-medium text-slate-300 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#3B82F6]/40 hover:bg-white/[0.04] hover:text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] ${
            inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <SiGithub
            size={24}
            className="text-white transition-transform duration-300 group-hover:scale-110"
          />

          <span>View Code on GitHub</span>

          <div className="pointer-events-none absolute inset-0 -z-10 rounded-lg bg-white opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-10" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
