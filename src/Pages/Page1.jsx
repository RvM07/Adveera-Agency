import React from "react";

const marqueeItems = [
  "Branding",
  "Social media",
  "Web design",
  "Campaigns",
  "Creative strategy",
];

const Page1 = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#141414] px-4 pb-20 pt-28 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-6 font-[Poppins] text-sm font-semibold uppercase tracking-[0.35em] text-orange-500 sm:text-base md:text-lg">
              Creative advertising agency
            </p>
            <h1 className="max-w-5xl font-[Britannic] text-[3rem] leading-[0.9] text-white sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] xl:text-[8.5rem]">
              IDEAS THAT
              <span className="block text-orange-500">MAKE BRANDS</span>
              <span className="block">MATTER.</span>
            </h1>
          </div>

          <div className="lg:pb-6">
            <p className="max-w-md font-[Poppins] text-base leading-7 text-white/75 sm:text-lg">
              Adveera creates bold visual stories, strategic campaigns and digital
              experiences that make brands impossible to ignore.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-orange-500 px-6 py-3 font-[Poppins] text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-orange-400 sm:text-base"
              >
                Let’s talk →
              </a>
              <a
                href="#projects"
                className="inline-flex items-center rounded-full border border-white/20 bg-transparent px-6 py-3 font-[Poppins] text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-orange-500 hover:text-orange-500 sm:text-base"
              >
                View work
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
          <div>
            <p className="font-[Poppins] text-sm uppercase tracking-[0.25em] text-orange-500 sm:text-base md:text-lg">
              Focus
            </p>
            <p className="mt-3 font-[Poppins] text-lg text-white/80 sm:text-xl">
              Strategy, visuals and storytelling that build real presence.
            </p>
          </div>
          <div>
            <p className="font-[Poppins] text-sm uppercase tracking-[0.25em] text-orange-500 sm:text-base md:text-lg">
              Approach
            </p>
            <p className="mt-3 font-[Poppins] text-lg text-white/80 sm:text-xl">
              Creative thinking built around brand clarity and audience attention.
            </p>
          </div>
          <div>
            <p className="font-[Poppins] text-sm uppercase tracking-[0.25em] text-orange-500 sm:text-base md:text-lg">
              Result
            </p>
            <p className="mt-3 font-[Poppins] text-lg text-white/80 sm:text-xl">
              Work that feels memorable, intentional and commercially relevant.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 border-y border-white/10 bg-white/[0.02] py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center font-[Poppins] text-sm uppercase tracking-[0.3em] text-white/60 sm:text-base">
          {marqueeItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page1;
