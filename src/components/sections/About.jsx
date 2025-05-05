import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-6 text-white bg-black/40 backdrop-blur-sm"
    >
      <div className="max-w-5xl w-full mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 text-center mb-12 leading-relaxed"
        >
          I'm{" "}
          <span className="text-blue-400 font-medium">Md Roknujjaman Rony</span>
          , a MERN Stack developer passionate about building interactive,
          efficient, and scalable web applications. My passion for the web began
          with curiosity and grew into an obsession for clean code and modern
          UX.
        </motion.p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-black/30 backdrop-blur-md hover:bg-gray-700/80 transition border border-gray-700 shadow-md"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              🚀 What I Love to Do
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              I specialize in full-stack development using React, Node.js, and
              MongoDB. My focus is delivering fast, optimized, and user-friendly
              web apps.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-black/30 backdrop-blur-md hover:bg-gray-700/80 transition border shadow-md"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              🎨 My Interests & Hobbies
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Outside of code, I enjoy graphic design, chess, music, and
              exploring new tech. These hobbies help balance my creativity and
              logic.
            </p>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-14 p-6 rounded-xl bg-black/30 backdrop-blur-md border border-gray-700 shadow-md"
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-6 text-center">
            💻 Technical Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "Tailwind CSS",
              "Node.js",
              "MongoDB",
              "Express",
              "Framer Motion",
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-blue-500/10 text-blue-400 py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-500/20 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
