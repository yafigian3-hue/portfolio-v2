import { FaWhatsapp } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

function contact() {
  return (
    <section
      id="Contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-4xl text-center md:text-5xl text-[#3B82F6] font-mono font-bold">
        Contact Me
      </h2>

      <p className="max-w-2xl text-center mt-6 text-sm md:text-lg font-mono mb-12 text-gray-400">
        Need help creating a website, a quick micro-job, or just a question?
        Please contact me via WhatsApp. I'll respond to your message as soon as
        possible during business hours!
      </p>

      <div className="flex flex-col gap-6 w-full max-w-xs mx-auto">
        {/* Tombol WhatsApp */}
        <div className="flex justify-center w-full">
          <a
            href="https://wa.me/6283896738779"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center rounded-xl 
                       w-full p-5 h-14 gap-4 bg-[#25D366] text-white font-bold
                       transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] 
                       hover:shadow-[0_0_35px_rgba(37,211,102,0.6)]"
          >
            <FaWhatsapp size={26} />
            <span className="relative z-10">Chat via WhatsApp</span>

            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 blur-xl bg-[#25D366] transition-opacity"></div>
          </a>
        </div>

        <div className="flex justify-center w-full">
          <a
            href="https://github.com/yafigian3-hue"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center rounded-xl 
                       w-full p-5 h-14 gap-4 bg-[#24292e] text-white font-bold
                       border border-gray-600 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] 
                       hover:shadow-[0_0_35px_rgba(255,255,255,0.2)]"
          >
            <SiGithub size={26} />
            <span className="relative z-10">View Code on GitHub</span>

            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 blur-xl bg-white transition-opacity"></div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default contact;
