import SocialLinks from "./sections/SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">About Me</h2>
          <p className="text-sm">
            Passionate Frontend Developer skilled in React, Tailwind CSS, and
            modern web technologies. Focused on creating engaging user
            experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-blue-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Connect with Me
          </h2>
          <div className="flex space-x-4">
            <SocialLinks></SocialLinks>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} Md Roknujjaman Rony. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
