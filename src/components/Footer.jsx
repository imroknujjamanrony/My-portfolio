import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialItems = [
    {
      href: "https://www.linkedin.com/in/md-roknujjaman-rony-906780210/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
      color: "text-blue-600 hover:text-blue-400 shadow-blue-500/40",
    },
    {
      href: "https://www.facebook.com/imroknujjamanrony",
      label: "Facebook",
      icon: <FaFacebook />,
      color: "text-blue-500 hover:text-blue-300 shadow-blue-400/40",
    },
    {
      href: "https://x.com/RoknujjamanRon2",
      label: "Twitter",
      icon: <FaXTwitter />,
      color: "text-white hover:text-gray-300 shadow-gray-400/30",
    },
    {
      href: "https://github.com/imroknujjamanrony",
      label: "GitHub",
      icon: <FaGithub />,
      color: "text-gray-300 hover:text-white shadow-white/20",
    },
  ];

  return (
    <footer className="bg-black/40 backdrop-blur-sm text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-3">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">About Me</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Passionate Frontend Developer skilled in React, Tailwind CSS, and
            modern web technologies. Focused on creating engaging user
            experiences with clean, responsive interfaces.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-blue-400 transition"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-blue-400 transition"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-blue-400 transition"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Connect with Me
          </h2>
          <motion.div
            className="flex flex-wrap justify-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {socialItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                whileTap={{ scale: 0.95 }}
                className={`text-2xl sm:text-3xl transition-all duration-300 rounded-full p-3 bg-black/20 backdrop-blur-md ${item.color} shadow-lg hover:shadow-xl`}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Md Roknujjaman Rony. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
