import React from "react";

const principles = [
  {
    number: "01",
    title: "Ideas",
    text: "Everything starts with an idea worth pursuing and building into something that feels unmistakably true to the brand.",
  },
  {
    number: "02",
    title: "Strategy",
    text: "Creative work should have purpose behind it, connecting the message to the right audience and the right moment.",
  },
  {
    number: "03",
    title: "Design",
    text: "Every visual decision should communicate something clear, deliberate and memorable.",
  },
  {
    number: "04",
    title: "Story",
    text: "The strongest brands are not just seen — they are felt, remembered and shared through story.",
  },
];

const capabilities = [
  "Branding",
  "Social Media",
  "Websites",
  "Campaigns",
  "Visual Content",
  "Creative Strategy",
];

const process = [
  {
    step: "01",
    title: "Understand",
    text: "Understand the brand, audience and problem before shaping a direction.",
  },
  {
    step: "02",
    title: "Discover",
    text: "Look beyond the obvious and find the idea that gives the work its edge.",
  },
  {
    step: "03",
    title: "Create",
    text: "Turn strategy into bold creative work with clarity and intent.",
  },
  {
    step: "04",
    title: "Connect",
    text: "Create work that people feel and remember long after they see it.",
  },
  {
    step: "05",
    title: "Build",
    text: "Help brands grow through consistent creative thinking and compelling execution.",
  },
];

const Page2 = () => {
  return (
    <div className="w-full bg-[#141414] text-white">
      <section className="px-4 pb-20 pt-28 sm:px-8 md:px-12 md:pt-32 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-base font-semibold uppercase tracking-[0.35em] text-orange-500 sm:text-lg md:text-xl">
            About Adveera
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <h1 className="max-w-5xl font-[Britannic] text-[2.7rem] leading-[0.9] text-white sm:text-[4rem] md:text-[5rem] lg:text-[7rem] xl:text-[8rem]">
                WE TURN IDEAS
                <span className="block text-orange-500">INTO SOMETHING</span>
                <span className="block">PEOPLE REMEMBER.</span>
              </h1>
            </div>

            <div className="lg:pb-6">
              <p className="text-lg leading-8 text-white/80 sm:text-xl md:text-2xl">
                Adveera is a creative advertising agency where ideas meet strategy,
                design and storytelling to build brands that stand apart.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-orange-400 sm:text-base"
              >
                Let's Talk →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#141414] px-4 py-20 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-xl font-semibold uppercase tracking-[0.35em] text-orange-500 md:text-2xl">
                Our Story
              </p>
            </div>

            <div>
              <p className="max-w-4xl text-xl leading-relaxed text-white sm:text-2xl md:text-3xl">
                Adveera started in June 2023, founded by Pratiksha Mangrulkar while
                she was in her third year of college. The idea was simple but powerful:
                great ideas can build great brands.
              </p>

              <div className="mt-12 flex items-end gap-4 border-t border-white/10 pt-6">
                <span className="font-[Britannic] text-5xl text-orange-500 sm:text-6xl md:text-7xl">
                  2023
                </span>
                <p className="max-w-xl text-base leading-8 text-white/75 sm:text-lg md:text-xl">

                  From a bold beginning, Adveera evolved into a creative advertising
                  agency combining ideas, strategy, design and storytelling into work
                  that feels both intentional and memorable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-[Britannic] text-[2.4rem] leading-[0.9] text-white sm:text-[4rem] md:text-[5rem] lg:text-[6.5rem]">
            WE DON'T JUST MAKE
            <span className="block text-orange-500">THINGS LOOK GOOD.</span>
            <span className="block">WE MAKE PEOPLE</span>
            <span className="block text-orange-500">REMEMBER.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl md:text-2xl">
            We look beyond the brief, find the idea and turn it into creative work
            that connects with people.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-base font-semibold uppercase tracking-[0.35em] text-orange-500 sm:text-lg md:text-xl">
              What We Believe
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((item) => (
              <div
                key={item.title}
                className="group border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-orange-500/70 hover:bg-orange-500/5 md:p-8"
              >
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <span className="font-[Britannic] text-3xl text-orange-500 sm:text-4xl">
                    {item.number}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60 sm:text-base">
                    {item.title}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold uppercase text-white sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-white/75 sm:text-lg md:text-xl">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-base font-semibold uppercase tracking-[0.35em] text-orange-500 sm:text-lg md:text-xl">
              What We Do
            </p>
          </div>

          <div className="space-y-4">
            {capabilities.map((item, index) => (
              <a
                key={item}
                href="#contact"
                className="group flex items-center justify-between gap-4 border-b border-white/10 py-4 transition duration-300 hover:border-orange-500/70"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="text-base font-semibold uppercase tracking-[0.2em] text-orange-500 sm:text-lg">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl font-medium uppercase text-white transition duration-300 group-hover:text-orange-500 sm:text-2xl md:text-3xl lg:text-4xl">
                    {item}
                  </span>
                </div>
                <span className="text-2xl text-orange-500 transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-3 sm:p-4">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-orange-500/40 bg-[#1b1b1b]">
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1026,fit=crop/YbN4wnoGwRC4rbqY/img_0836.jpg-FM6SJsV4qRZ9iiVA.jpeg"
                  alt="Pratiksha Mangrulkar, founder of Adveera"
                  className="aspect-[3/4] w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-500 sm:text-base">
                    Founder & Creative Director
                  </p>
                  <h3 className="mt-3 font-[Britannic] text-2xl text-white sm:text-3xl">
                    PRATIKSHA MANGRULKAR
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <p className="text-base font-semibold uppercase tracking-[0.35em] text-orange-500 sm:text-lg md:text-xl">
                The Founder
              </p>
              <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl md:text-2xl">
                Adveera was shaped by Pratiksha Mangrulkar’s entrepreneurial drive and
                creative mindset. What began as a belief that great ideas can build
                great brands grew into a studio focused on strategy, design and
                storytelling that connects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-base font-semibold uppercase tracking-[0.35em] text-orange-500 sm:text-lg md:text-xl">
              Creative Team
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-3 sm:p-4">
              <div className="overflow-hidden rounded-[1.5rem] border border-orange-500/30 bg-[#181818]">
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1095,fit=crop/YbN4wnoGwRC4rbqY/passport-size-R1JuQrKcDh2K90uO.png"
                  alt="Adveera editor and post-production specialist"
                  className="aspect-[3/4] w-full scale-[1.08] object-cover object-top"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-500 sm:text-base md:text-lg">
                Editor & Post-Production
              </p>
              <h4 className="mt-4 font-[Britannic] text-3xl text-white sm:text-4xl md:text-5xl">
                VIDEO EDITOR
              </h4>

              <p className="mt-5 text-base leading-7 text-white/75 sm:text-lg md:text-xl">
                A detail-driven visual storyteller with strong command over Adobe
                Photoshop, Premiere Pro and After Effects. He brings rhythm, clarity
                and cinematic polish to every frame, turning raw footage into stories
                that feel sharp, modern and memorable.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Adobe Photoshop",
                  "Premiere Pro",
                  "After Effects",
                  "Visual Storytelling",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-base font-semibold uppercase tracking-[0.35em] text-orange-500 sm:text-lg md:text-xl">
              How We Work
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-orange-500/70 hover:bg-orange-500/5"
              >
                <p className="text-base font-semibold uppercase tracking-[0.2em] text-orange-500 sm:text-lg">
                  {item.step}
                </p>
                <h3 className="mt-5 text-2xl font-semibold uppercase text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-white/75 sm:text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-12 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-orange-500/30 bg-orange-500/5 px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16">
          <p className="text-base font-semibold uppercase tracking-[0.35em] text-orange-500 sm:text-lg md:text-xl">
            Let’s Build Something Memorable
          </p>
          <h2 className="mt-5 font-[Britannic] text-[2.3rem] leading-[0.9] text-white sm:text-[4rem] md:text-[5rem] lg:text-[7rem]">
            GOT AN IDEA?
            <span className="block text-orange-500">LET'S MAKE IT REAL.</span>
          </h2>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-orange-400 sm:text-base"
          >
            Let's Talk →
          </a>
        </div>
      </section>
    </div>
  );
};

export default Page2;
