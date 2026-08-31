import { FaWhatsapp } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

function Footer() {
  return (
    <footer className="w-full border-white/5 bg-black/30 py-8 font-mono backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        {/* Copyright */}
        <p className="order-2 text-xs text-slate-500 md:order-1 md:text-sm">
          © 2026 YafiDEV. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="order-1 flex items-center gap-4 md:order-2">
          <a
            href="https://wa.me/6283896738779"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via WhatsApp"
            className="text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:text-[#25D366] hover:drop-shadow-[0_0_8px_rgba(37,211,102,0.4)]"
          >
            <FaWhatsapp size={22} />
          </a>

          <a
            href="https://github.com/yafigian3-hue"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
            className="text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
          >
            <SiGithub size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
