// import { RevealOnScroll } from "../RevealOnScroll";
// import banner from "../../assets/Banner.jpg";

// export const Home = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center relative"
//     >
//       <RevealOnScroll>
//         <div className="text-center z-10 px-4 flex">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
//             Hi, I'm Md Roknujjaman Rony
//           </h1>

//           <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
//             "I'm a MERN stack developer passionate about building scalable and
//             efficient web applications. I focus on creating seamless user
//             experiences with optimized performance, clean architecture, and
//             modern technologies."
//           </p>
//           <div className="flex justify-center space-x-4">
//             <a
//               href="#projects"
//               className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
//             >
//               View Projects
//             </a>

//             <a
//               href="#contact"
//               className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
//              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
//             >
//               Contact Me
//             </a>
//             <button>
//               <a
//                 href="#contact"
//                 className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
//              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
//               >
//                 Download Resume
//               </a>
//             </button>
//           </div>
//           <div>
//             <img src={banner} alt="" />
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };

//

import { RevealOnScroll } from "../RevealOnScroll";
import banner from "../../assets/Banner.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-12"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8">
          {/* Left Side - Text */}
          <div className="text-center md:text-left md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm Md Roknujjaman Rony
            </h1>
            <p className="text-gray-400 text-lg">
              I'm a MERN stack developer passionate about building scalable and
              efficient web applications. I focus on creating seamless user
              experiences with optimized performance, clean architecture, and
              modern technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={banner}
              alt="Banner"
              className="w-full max-w-sm md:max-w-md h-[420px] rounded-lg shadow-lg"
            />
          </div>
          {/* for testing */}
        </div>
      </RevealOnScroll>
    </section>
  );
};
