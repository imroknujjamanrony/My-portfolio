import { RevealOnScroll } from "../RevealOnScroll";
import banner from "../../assets/profile.jpeg";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="scroll-mt-28 pt-28 min-h-screen flex items-center justify-center px-6 md:px-12 bg-gradient-to-br from-slate-900 via-black to-slate-950 text-white"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8">
          {/* Left Side - Text */}
          <div className="text-center md:text-left md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm Md Roknujjaman Rony
            </h1>
            <p className="text-gray-300 text-lg">
              I'm a MERN stack developer passionate about building scalable and
              efficient web applications. I focus on creating seamless user
              experiences with optimized performance, clean architecture, and
              modern technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition hover:bg-blue-700 shadow-md hover:shadow-blue-500/30"
              >
                View Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer border border-cyan-500 text-cyan-400 py-3 px-6 rounded-lg font-medium transition hover:bg-cyan-500 hover:text-white shadow-md hover:shadow-cyan-500/20"
              >
                Contact Me
              </Link>
              <a
                href="https://drive.google.com/uc?export=download&id=1Ry89OVckwN_DXEHa9HxWBmqcje-trObd"
                download
                className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition hover:bg-blue-700 shadow-md hover:shadow-blue-500/30"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={banner}
              alt="Profile"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-[420px] object-cover rounded-2xl shadow-xl ring-2 ring-blue-500/30 hover:ring-cyan-400/30 transition-all duration-300"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
