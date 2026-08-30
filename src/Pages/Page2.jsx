import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import TextLoop from "../components/TextLoop";

const services = [
  "Website design & Development",
  "Branding & brand Growth Strategy",
  "Digital Advertising",
  "Social media advertising",
  "social media marketing",
];

const Page2 = () => {
  const [loopSize, setLoopSize] = useState({ fontSize: 78, ribbonWidth: 100 });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setLoopSize({ fontSize: 36, ribbonWidth: 56 });
      else if (w < 1024) setLoopSize({ fontSize: 52, ribbonWidth: 76 });
      else setLoopSize({ fontSize: 78, ribbonWidth: 100 });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-start justify-center gap-10 bg-linear-to-t from-80% from-[#141518] to-orange-500 px-4 pb-20 pt-36 sm:px-8 sm:pt-40 md:px-12 md:pt-44 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-16">
        <h1 className="mt-4 shrink-0 font-[Britannic] text-4xl leading-none text-orange-500 sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Our Services
        </h1>
        <div className="flex w-full max-w-2xl flex-col gap-4">
          {services.map((service) => (
            <div key={service} className="relative">
              <div className="flex items-center gap-3 text-white uppercase sm:gap-5">
                <span className="shrink-0 text-lg text-orange-500 sm:text-2xl md:text-3xl">
                  <FaAngleDoubleRight />
                </span>
                <h2 className="py-2 text-base font-medium sm:text-xl md:text-2xl lg:text-3xl">
                  {service}
                </h2>
              </div>
              <hr className="mt-1 w-full rounded-full border-2 border-orange-500" />
            </div>
          ))}
        </div>
      </div>
      <div className="-mb-8 -mt-16 overflow-hidden leading-none sm:-mb-16 sm:-mt-28">
        <TextLoop
          text="Adveera Agency"
          shape="wave"
          speed={80}
          direction="reverse"
          separator=" ✦ "
          curviness={40}
          fontSize={loopSize.fontSize}
          fontWeight={850}
          letterSpacing={-4}
          uppercase
          color="#141518"
          ribbon
          ribbonColor="#ff6900"
          ribbonWidth={loopSize.ribbonWidth}
          pauseOnHover={false}
        />
      </div>
    </>
  );
};

export default Page2;
