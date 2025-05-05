"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

const projectData = [
  {
    name: "JobHive",
    image: "https://i.ibb.co.com/gZmrQ3hB/Screenshot-20250505-135740.png",
    techStack: [
      "Next.js",
      "NextAuth.js",
      "Tailwind CSS",
      "Daisy UI",
      "MongoDB",
      "Context API",
      "Node.js",
      "Express.js",
      "socket.io",
    ],
    description:
      "A Hiring Agency & Communication Platform connects job seekers, employers, freelancers, and recruiters in various industries.",
    liveLink: "https://jobhive-agency.vercel.app/",
    githubLink:
      "https://github.com/alaminislam34/Hiring-Agency-Communication-Platform",
    challenges: [
      "Ensuring real-time communication between users",
      "Implementing a robust authentication system",
    ],
    improvements: [
      "Adding a more intuitive UI",
      "Enhancing security for transactions",
    ],
  },
  {
    name: "EduConnect",
    image: "https://i.ibb.co.com/21whNJKD/educonnect.png",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Context API",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Authentication",
      "JWT Authentication",
    ],
    description:
      "EduConnect revolutionizes how institutions, tutors, and students interact.",
    liveLink: "https://educonnect-5a40e.web.app/",
    githubLink: "https://github.com/imroknujjamanrony/edu-connect-client",
    challenges: ["Ensuring smooth real-time communication", "Data security"],
    improvements: [
      "Implementing AI-based personalized learning",
      "Adding video conferencing features",
    ],
  },
  {
    name: "Marathon Hub",
    image: "https://i.ibb.co.com/bMQCYNJ1/marathon.png",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JSON",
      "Git",
    ],
    description:
      "Marathon Hub helps users explore and register for upcoming marathons.",
    liveLink: "https://marathon-hub-12397.web.app/",
    githubLink:
      "https://github.com/imroknujjamanrony/Marathon-Hub/tree/main/marathon-hub-client",
    challenges: ["Managing race registrations efficiently", "Scalability"],
    improvements: [
      "Adding real-time event tracking",
      "Integration with Strava",
    ],
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid gap-10 md:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl border border-gray-700 transition-transform transform hover:scale-105"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-blue-400">
                  {project.name}
                </h3>
                <p className="text-gray-300 mt-2 text-sm line-clamp-3">
                  {project.description}
                </p>
                <button
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-all"
                  onClick={() => setSelectedProject(project)}
                >
                  View More / Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 p-6 rounded-xl w-full max-w-2xl relative border border-gray-700 shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-52 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold text-blue-400">
                {selectedProject.name}
              </h2>
              <p className="text-gray-300 mt-2">
                {selectedProject.description}
              </p>
              <p className="mt-2 text-sm text-gray-400">
                <strong>Tech Stack:</strong>{" "}
                {selectedProject.techStack.join(", ")}
              </p>
              <p className="mt-2 text-sm text-gray-400">
                <strong>Challenges:</strong>{" "}
                {selectedProject.challenges.join(", ")}
              </p>
              <p className="mt-2 text-sm text-gray-400">
                <strong>Future Improvements:</strong>{" "}
                {selectedProject.improvements.join(", ")}
              </p>
              <div className="mt-5 flex gap-4">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
                >
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md flex items-center gap-2"
                >
                  GitHub <FaGithub />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
