import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiSocketdotio,
  SiZig,
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
      name: "Next.js",
      icon: <SiNextdotjs className="text-white" />,
      level: 75,
    },
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

  const otherSkills = [
    {
      name: "Socket.IO",
      icon: <SiSocketdotio className="text-purple-400" />,
      level: 70,
    },
    { name: "Zegocloud", icon: <SiZig className="text-blue-300" />, level: 60 },
  ];

  const skillVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const sections = [
    {
      title: "Frontend Skills",
      skills: frontendSkills,
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Backend Skills",
      skills: backendSkills,
      color: "from-green-400 to-lime-400",
    },
    {
      title: "Tools & Platforms",
      skills: otherSkills,
      color: "from-purple-400 to-pink-400",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={skillVariants}
        className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"
      >
        My Skills
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            className={`bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={skillVariants}
          >
            <h3
              className={`text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${section.color}`}
            >
              {section.title}
            </h3>
            {section.skills.map((skill, index) => (
              <div key={index} className="mb-5">
                <div className="flex items-center gap-3 mb-2">
                  {skill.icon}
                  <span className="text-base text-gray-300">{skill.name}</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${section.color}`}
                    style={{ width: `${skill.level}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
