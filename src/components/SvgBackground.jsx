// components/SvgBackground.jsx
const SvgBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f0c29" />
            <stop offset="50%" stopColor="#302b63" />
            <stop offset="100%" stopColor="#24243e" />
          </linearGradient>
        </defs>
        <path fill="url(#grad)">
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
                M0,160 C480,260 960,60 1440,160 L1440,800 L0,800 Z;
                M0,260 C480,60 960,360 1440,260 L1440,800 L0,800 Z;
                M0,160 C480,260 960,60 1440,160 L1440,800 L0,800 Z
              "
          />
        </path>
      </svg>
    </div>
  );
};

export default SvgBackground;
