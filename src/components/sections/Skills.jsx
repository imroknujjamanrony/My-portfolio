import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

export const Skills = () => {
  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-500" />,
      level: 85,
    },
    { name: "React", icon: <FaReact className="text-blue-400" />, level: 80 },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-cyan-400" />,
      level: 85,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-400" />,
      level: 75,
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
      level: 80,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-400" />,
      level: 75,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-400" />,
      level: 85,
    },
  ];

  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        My Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Frontend Skills */}
        <motion.div
          className="bg-gray-900 p-6 rounded-xl shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={skillVariants}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            Frontend Skills
          </h3>
          {frontendSkills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                {skill.icon}
                <span className="text-lg font-medium">{skill.name}</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <motion.div
                  className="h-2 bg-blue-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          className="bg-gray-900 p-6 rounded-xl shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={skillVariants}
        >
          <h3 className="text-xl font-semibold mb-4 text-green-400">
            Backend Skills
          </h3>
          {backendSkills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                {skill.icon}
                <span className="text-lg font-medium">{skill.name}</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <motion.div
                  className="h-2 bg-green-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
