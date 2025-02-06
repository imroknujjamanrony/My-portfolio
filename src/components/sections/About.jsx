import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-900"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-6">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg text-gray-300 text-center mb-8"
          >
            Hi, I'm Md Roknujjaman Rony, a passionate MERN stack developer who
            loves crafting scalable and efficient web applications. My journey
            into programming started with a curiosity for building interactive
            digital experiences, and over time, it has turned into a deep
            passion for developing intuitive and high-performing applications.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* My Work */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="p-6 rounded-xl border border-gray-700 bg-gray-800 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                🚀 What I Love to Do
              </h3>
              <p className="text-gray-300">
                I specialize in developing high-performance web applications
                with modern technologies like React, Node.js, and MongoDB. I
                enjoy building scalable systems that provide seamless user
                experiences and optimize performance.
              </p>
            </motion.div>

            {/* Hobbies */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="p-6 rounded-xl border border-gray-700 bg-gray-800 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                🎨 My Interests & Hobbies
              </h3>
              <p className="text-gray-300">
                Beyond coding, I love exploring creative pursuits like graphic
                design. I also enjoy playing chess, listening to music, and
                learning about new technological advancements.
              </p>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-12 p-6 rounded-xl border border-gray-700 bg-gray-800 hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">
              💻 Technical Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React",
                "Vue",
                "TypeScript",
                "TailwindCSS",
                "Node.js",
                "MongoDB",
                "GraphQL",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
