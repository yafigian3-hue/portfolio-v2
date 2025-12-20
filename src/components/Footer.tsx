import { FaWhatsapp } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

function footer() {
  return (
    <footer className="w-full bg-black/50 backdrop-blur-md border-t border-gray-800 font-mono text-gray-500 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs md:text-sm order-3 md:order-2">
          @2025 | MyReact. All rights reserved
        </p>

        <div className="flex items-center gap-4 order-1 md:order-3">
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
    </footer>
  );
}

export default footer;
