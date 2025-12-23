import { Home, User, Folder, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const navLinks = [
  { name: "Home", icon: Home, href: "#" },
  { name: "About", icon: User, href: "#About" },
  { name: "Projects", icon: Folder, href: "#Projects" },
  { name: "Contact", icon: Mail, href: "#Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

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
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="fixed top-0 z-40 w-full">
        <nav className="mx-full flex h-16 max-w-full items-center justify-between px-10 md:px-20 inset-0 bg-black/50 backdrop-blur">
          <a
            href="#"
            className="text-3xl font-extrabold font-mono text-[#3B82F6] drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] hover:text-[#478dff] transition-all duration-300"
          >
            YD
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ name, icon: Icon, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="group relative flex items-center gap-2 text-slate-300 text-xl hover:text-white"
                >
                  <Icon size={18} />
                  {name}
                  <span className="absolute -bottom-1 left-0 h-[3px] w-0 rounded-sm bg-[#3B82F6] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#3B82F6,0_0_20px_#3B82F6]" />
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden text-3xl text-slate-300 hover:text-white"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* MOBILE MENU (DI LUAR HEADER) */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />

        {/* Menu panel */}
        <aside className="absolute right-0 top-0 h-full w-1/2 bg-slate-900/95 p-6 backdrop-blur">
          <button
            className="absolute top-4 right-4 mb-6 px-5 text-3xl text-slate-300 hover:text-white"
            onClick={() => setOpen(false)}
          >
            ☰
          </button>

          <ul className="space-y-6 mt-8 text-lg text-white">
            {navLinks.map(({ name, icon: Icon, href }) => (
              <li key={name}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="group relative flex items-center gap-3 text-slate-300 hover:text-white"
                >
                  <Icon size={18} />
                  <span>{name}</span>

                  {/* underline */}
                  <span className="absolute -bottom-1 left-0 h-[3px] w-0 rounded-sm bg-[#3B82F6] transition-all duration-300 group-hover:w-1/2 shadow-[0_0_10px_#3B82F6,0_0_20px_#3B82F6]" />
                </a>
              </li>
            ))}

            <div className="fixed bottom-5 left-0 right-0 p-4 text-center font-mono text-sm text-gray-600">
              <p className="mt-1 opacity-80">
                @2025 | MyReact. All rights reserved
              </p>

              <div className="flex justify-center mt-3 items-center gap-2 text-center">
                <a
                  href="https://wa.me/6283896738779"
                  target="_blank"
                  className="hover:text-[#25D366] transition-colors duration-300"
                >
                  <FaWhatsapp size={24} />
                </a>
                <a
                  href="https://github.com/yafigian3-hue"
                  target="_blank"
                  className="hover:text-white transition-colors duration-300"
                >
                  <SiGithub size={24} />
                </a>
              </div>
            </div>
          </ul>
        </aside>
      </div>
    </>
  );
}
