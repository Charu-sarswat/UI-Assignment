import { useState } from "react";
import {
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaApple,
  FaSpotify,
} from "react-icons/fa";
import {
  SiNetflix,
  SiAdobe,
  SiSamsung,
  SiOracle,
  SiMeta,
} from "react-icons/si";

const logos = [
  {
    name: "Google",
    component: <FaGoogle className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" style={{ color: "#4285F4" }} />,
  },
  {
    name: "Microsoft",
    component: <FaMicrosoft className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" style={{ color: "#00A4EF" }} />,
  },
  {
    name: "Amazon",
    component: <FaAmazon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" style={{ color: "#FF9900" }} />,
  },
  {
    name: "Apple",
    component: <FaApple className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" style={{ color: "#000000" }} />,
  },
  {
    name: "Meta",
    component: <SiMeta className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" style={{ color: "#0081FB" }} />,
  },
  {
    name: "Netflix",
    component: <SiNetflix className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" style={{ color: "#E50914" }} />,
  },
  {
    name: "Spotify",
    component: <FaSpotify className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" style={{ color: "#1DB954" }} />,
  },
  {
    name: "Adobe",
    component: <SiAdobe className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" style={{ color: "#FF0000" }} />,
  },
  {
    name: "Samsung",
    component: <SiSamsung className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" style={{ color: "#1428A0" }} />,
  },
  {
    name: "Oracle",
    component: <SiOracle className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" style={{ color: "#F80000" }} />,
  },
];

function LogoSlider() {
  // Duplicate logos many times to ensure seamless infinite scroll
  // With many duplicates, the -50% translation creates a perfect seamless loop
  const allLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];
  const [isActive, setIsActive] = useState(false);

  const handleWrapperClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <section
      className="group bg-white py-8 sm:py-12"
      role="button"
      tabIndex={0}
      onClick={handleWrapperClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleWrapperClick();
        }
      }}
    >
      <div className="overflow-hidden relative w-full cursor-pointer">
        <div className="flex animate-logo-scroll items-center whitespace-nowrap">
          {allLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="mx-4 sm:mx-6 md:mx-8 flex h-8 sm:h-10 md:h-12 shrink-0 items-center"
            >
              <div
                className={`transition-all duration-300 ${
                  isActive ? "opacity-100 grayscale-0" : "opacity-60 grayscale"
                } group-hover:opacity-100 group-hover:grayscale-0`}
              >
                {logo.component}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoSlider;
