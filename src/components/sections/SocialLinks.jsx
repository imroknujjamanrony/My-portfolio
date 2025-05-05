import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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

const SocialLinks = () => {
  return (
    <section className="w-full bg-black/40 backdrop-blur-sm text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
          Connect with Me
        </h2>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
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
              className={`text-3xl transition-all duration-300 rounded-full p-3 bg-black/20 backdrop-blur-md ${item.color} shadow-lg hover:shadow-xl`}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinks;
