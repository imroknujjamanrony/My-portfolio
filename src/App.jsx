// App.jsx
import { useState } from "react";
import "./App.css";
import "./index.css";

import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Skills } from "./components/sections/Skills";
import EducationSection from "./components/sections/EducationSection";
import SocialLinks from "./components/sections/SocialLinks";
import Footer from "./components/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`relative min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } text-gray-100`}
      >
        {/* Animated Water Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* <SvgBackground /> */}
          {/* Optional: dark overlay to improve contrast */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </div>

        {/* Main UI */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />

        {/* Social Links below Home */}
        <div className="flex justify-center pb-6 items-center text-center">
          <SocialLinks />
        </div>

        <About />
        <Skills />
        <EducationSection />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
