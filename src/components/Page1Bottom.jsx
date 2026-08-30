import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Page1Bottom = () => {
  gsap.registerPlugin(useGSAP);
  useGSAP(function () {
    gsap.to("#social-icons a", {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: "linear",
    });
  });

  return (
    <div className="mt-10 flex w-full flex-col items-start justify-between gap-6 pb-8 sm:mt-16 sm:flex-row sm:items-end md:mt-24 md:pb-12">
      <div className="leading-none">
        <h2 className="font-[Poppins] text-xs tracking-wide text-white sm:text-sm md:text-base lg:text-lg">
          BRAND DESIGN | WEB DESIGN | SOCIAL MEDIA MANAGEMENT
        </h2>
        <h3 className="mt-2 font-[Poppins] text-sm font-bold text-white sm:text-base md:text-lg">
          BESPOKE FREELANCE
        </h3>
      </div>
      <div id="social-icons" className="flex shrink-0 gap-3 text-2xl sm:text-3xl md:text-4xl">
        <a
          href="https://www.instagram.com/adveera_ad/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="rounded-full border-2 border-white bg-linear-to-b from-[#833AB4] via-[#E1306C] via-[#FD1D1D] to-[#FCAF45] p-2 text-white"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/pratiksha-mangrulkar-adveera-advertising/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="rounded-full border-2 border-white bg-blue-500 p-2 text-white"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default Page1Bottom;
