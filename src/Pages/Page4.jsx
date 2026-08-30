import React, { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide end-to-end digital solutions including branding, social media, websites, campaigns, visual content and creative strategy tailored to your business goals.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines vary based on scope and complexity, but most standard engagements are completed within a focused working window after the brief is finalized.",
  },
  {
    question: "Do you support custom requirements?",
    answer:
      "Yes. We work closely with clients to create custom brand directions, marketing systems and digital experiences that match the needs of the business and the audience.",
  },
  {
    question: "Can I request revisions after launch?",
    answer:
      "Absolutely. We support a collaborative process and can refine work through revision cycles to help the final execution feel aligned and effective.",
  },
];

const AccordionItem = ({ item, isOpen, onToggle, isLast }) => (
  <div className={isLast ? "border-b-0" : "border-b border-white/10"}>
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between gap-4 py-5 text-left sm:py-6"
    >
      <span className="font-[Poppins] text-xl font-medium text-white sm:text-2xl md:text-3xl">
        {item.question}
      </span>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-3xl leading-none text-white">
        {isOpen ? "−" : "+"}
      </span>
    </button>

    <div
      className={`grid transition-all duration-300 ease-in-out ${
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <p className="pb-5 pr-2 font-[Poppins] text-lg leading-8 text-white/75 sm:pr-10 sm:text-xl md:text-2xl">
          {item.answer}
        </p>
      </div>
    </div>
  </div>
);

const Page4 = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="w-full bg-[#141414] px-4 py-20 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 md:mb-14">
          <p className="font-[Poppins] text-base font-semibold uppercase tracking-[0.35em] text-orange-500 sm:text-lg md:text-xl">
            FAQs
          </p>
          <h2 className="mt-4 font-[Britannic] text-[2.8rem] leading-[0.9] text-white sm:text-[4rem] md:text-[5rem] lg:text-[6rem]">
            QUESTIONS,
            <span className="block text-orange-500">CLEARLY ANSWERED.</span>
          </h2>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-3 sm:p-5 md:p-8">
          {faqs.map((item, index) => (
            <AccordionItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              isLast={index === faqs.length - 1}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page4;
