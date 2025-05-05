import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const AnimatedBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 150,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              repulse: {
                distance: 100,
              },
              push: {
                quantity: 4,
              },
            },
          },
          background: {
            color: "transparent",
          },
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
