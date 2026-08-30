import { Home, User, Folder, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", icon: Home, href: "#home" },
  { name: "About", icon: User, href: "#about" },
  { name: "Projects", icon: Folder, href: "#projects" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 z-40 w-full">
        <nav className="flex h-16 items-center justify-between border-b border-white/5 bg-black/30 px-6 backdrop-blur-xl md:px-20">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-2xl font-extrabold text-[#3B82F6] drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300 hover:text-[#478dff] md:text-3xl"
          >
            YafiDEV
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ name, icon: Icon, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="group relative flex items-center gap-2 text-lg text-slate-300 transition-colors duration-300 hover:text-white"
                >
                  <Icon size={20} className="text-[#3B82F6]" />
                  <span>{name}</span>

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[#3B82F6] shadow-[0_0_10px_#3B82F6] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden rounded-lg border border-[#3B82F6]/50 px-4 py-2 text-sm font-medium text-[#60A5FA] transition-all duration-300 hover:border-[#3B82F6] hover:bg-[#3B82F6]/10 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] md:block"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="rounded-lg p-2 text-slate-300 transition-colors duration-300 hover:bg-white/5 hover:text-white md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-x-0 top-16 z-30 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className={`fixed inset-0 top-16 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        {/* Menu Panel */}
        <nav
          className={`relative border-b border-[#3B82F6]/20 bg-black/30 px-6 py-6 shadow-[0_15px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="space-y-2">
            {navLinks.map(({ name, icon: Icon, href }) => (
              <li key={name}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 rounded-lg px-4 py-3 text-lg text-slate-300 transition-all duration-300 hover:bg-[#3B82F6]/10 hover:text-white"
                >
                  <Icon size={20} className="text-[#3B82F6]" />
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}