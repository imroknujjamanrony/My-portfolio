import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

const projectData = [
  {
    name: "CrowedCube Fundraising",
    image: "https://i.ibb.co.com/sdM3KPCN/crouwcube.png",
    techStack: [
      "React",
      "Firebase Auth",
      "Tailwind CSS",
      "Daisy UI",
      "React Router",
      "Context API",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    description: "A crowdfunding platform for fundraising campaigns.",
    liveLink: "https://crowdcube-fundraising.web.app/",
    githubLink:
      "https://github.com/imroknujjamanrony/crowdcube-fundraising/tree/main/crowdcube-fundraising",
    challenges: [
      "Ensuring secure transactions",
      "Managing real-time campaign updates",
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
    <section id="projects" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-5 rounded-lg shadow-md relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-semibold mt-4">{project.name}</h3>
              <p className="mt-2 text-gray-300">{project.description}</p>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600 transition"
                onClick={() => setSelectedProject(project)}
              >
                View More / Details
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 text-white p-6 rounded-lg max-w-lg w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                className="absolute top-2 right-3 text-2xl"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="text-2xl font-bold mt-4">
                {selectedProject.name}
              </h2>
              <p className="mt-2">{selectedProject.description}</p>
              <p className="mt-2">
                <strong>Tech Stack:</strong>{" "}
                {selectedProject.techStack.join(", ")}
              </p>
              <p className="mt-2">
                <strong>Challenges:</strong>{" "}
                {selectedProject.challenges.join(", ")}
              </p>
              <p className="mt-2">
                <strong>Future Improvements:</strong>{" "}
                {selectedProject.improvements.join(", ")}
              </p>
              <div className="mt-4 flex justify-between">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600"
                >
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-800"
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
