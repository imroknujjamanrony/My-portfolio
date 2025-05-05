import { useEffect } from "react";
import { animateScroll as scroll, scroller } from "react-scroll";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const handleScroll = (id) => {
    setMenuOpen(false);
    scroller.scrollTo(id, {
      duration: 600,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            onClick={() => handleScroll("home")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              className="w-10 h-10 object-contain"
              src="/portfolio logo gpt2.png"
              alt="Logo"
            />
            <span className="text-white text-xl font-bold font-mono">Roni</span>
          </div>

          {/* Hamburger Icon */}
          <div
            className="md:hidden w-8 h-6 flex flex-col justify-between cursor-pointer z-50"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-full bg-white rounded"></span>
            <span className="block h-0.5 w-full bg-white rounded"></span>
            <span className="block h-0.5 w-full bg-white rounded"></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScroll(item.id)}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <a
              href="https://drive.google.com/uc?export=download&id=1Ry89OVckwN_DXEHa9HxWBmqcje-trObd"
              download
              className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition hover:bg-blue-700 shadow-md hover:shadow-blue-500/30"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-black/90 backdrop-blur-sm text-white transition-all duration-300 z-40 ${
          menuOpen ? "max-h-[500px] py-6" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.id)}
              className="text-gray-300 hover:text-white font-medium text-lg"
            >
              {item.name}
            </button>
          ))}
          <a
            onClick={() => setMenuOpen(false)}
            className="py-2 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:shadow-lg transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1Ry89OVckwN_DXEHa9HxWBmqcje-trObd/view?usp=sharing"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};
