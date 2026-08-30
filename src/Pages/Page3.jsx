import React from "react";

const projects = [
  {
    title: "Launch Identity",
    category: "Branding",
    description:
      "A sharp visual identity built to give a fast-growing brand more clarity, confidence and memorability.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Story Driven Campaign",
    category: "Social media",
    description:
      "Creative-led social storytelling designed to shift attention into genuine engagement and recall.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Digital Experience",
    category: "Web design",
    description:
      "An editorial web presence designed to feel premium, clean and deeply aligned with the brand story.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
];

const Page3 = () => {
  return (
    <div className="w-full bg-[#141414] px-4 py-20 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-[Poppins] text-[10px] font-semibold uppercase tracking-[0.35em] text-orange-500">
              Selected work
            </p>
            <h2 className="mt-4 font-[Britannic] text-[2.8rem] leading-[0.9] text-white sm:text-[4rem] md:text-[5rem] lg:text-[6rem]">
              IDEAS.
              <span className="block text-orange-500">EXECUTED.</span>
              <span className="block">REMEMBERED.</span>
            </h2>
          </div>

          <p className="max-w-md font-[Poppins] text-sm leading-7 text-white/75 sm:text-base">
            Each project starts with a sharp idea and grows into a brand experience
            people can feel, remember and share.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] ${
                index % 2 === 1 ? "lg:-translate-x-2" : ""
              }`}
            >
              <div className="grid gap-0 lg:grid-cols-2">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-72 w-full object-cover transition duration-500 hover:scale-105 sm:h-80 lg:h-full"
                  />
                </div>

                <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10">
                  <div>
                    <p className="font-[Poppins] text-[10px] font-semibold uppercase tracking-[0.3em] text-orange-500">
                      {project.category}
                    </p>
                    <h3 className="mt-4 font-[Britannic] text-3xl text-white sm:text-4xl md:text-5xl">
                      {project.title}
                    </h3>
                  </div>

                  <p className="mt-6 max-w-lg font-[Poppins] text-sm leading-7 text-white/75 sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="font-[Poppins] text-[10px] uppercase tracking-[0.28em] text-white/60">
                      Project {String(index + 1).padStart(2, "0")}
                    </span>
                    <a
                      href="#contact"
                      className="font-[Poppins] text-xs uppercase tracking-[0.2em] text-orange-500 transition hover:text-orange-400"
                    >
                      Enquire →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page3;
