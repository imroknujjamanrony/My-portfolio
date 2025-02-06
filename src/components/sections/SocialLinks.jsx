import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <motion.div
      className="flex justify-center md:justify-start space-x-6 mt-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/md-roknujjaman-rony-906780210/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-3xl hover:text-blue-800 transition-transform duration-300 hover:scale-110"
      >
        <FaLinkedin />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/imroknujjamanrony"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 text-3xl hover:text-blue-700 transition-transform duration-300 hover:scale-110"
      >
        <FaFacebook />
      </a>

      {/* X (Twitter) */}
      <a
        href="https://x.com/RoknujjamanRon2"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white dark:text-white text-3xl hover:text-gray-600 transition-transform duration-300 hover:scale-110"
      >
        <FaXTwitter />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/imroknujjamanrony"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-300 text-3xl hover:text-gray-900 transition-transform duration-300 hover:scale-110"
      >
        <FaGithub />
      </a>
    </motion.div>
  );
};

export default SocialLinks;
