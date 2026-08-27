import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Page1Bottom = () => {
  gsap.registerPlugin(useGSAP);
  useGSAP(function () {
    gsap.to("#social-icons h1", {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: "linear",
    });
  });

  return (
    <>
      <div className="absolute left-0 bottom-0 w-full px-24 py-20 flex items-end justify-between">
        <div className="leading-none">
          <h2 className="text-[1.5vw] font-[Poppins]">
            BRAND DESIGN | WEB DESIGN  |  SOCIAL MEDIA MANAGEMENT
          </h2>
          <h3 className="text-[1.5vw] font-[Poppins] font-bold text-white">
            BESPOKE FREELANCE
          </h3>
        </div>
        <div id="social-icons" className="text-5xl">
          <h1 className="bg-linear-to-b from-[#833AB4] via-[#E1306C] via-[#FD1D1D] to-[#FCAF45] text-white p-2 rounded-full m-2 border-4 border-white p-2">
            <a
              href="https://www.instagram.com/adveera_ad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </h1>
          <h1 className="bg-blue-500 text-white p-2 m-2 rounded-full border-4 border-white">
            <a
              href="https://www.linkedin.com/in/pratiksha-mangrulkar-adveera-advertising/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Page1Bottom;
