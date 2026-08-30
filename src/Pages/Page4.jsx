import React, { useState } from "react";

const faqs = [
  {
    question: "What services do you offer ?",
    answer:
      "We provide end-to-end digital solutions including web design, development, branding, and product strategy tailored to your business needs.",
  },
  {
    question: "How long does a project take ?",
    answer:
      "Project timelines vary based on scope and complexity, but most standard projects are completed within 2 to 6 weeks after we finalize the requirements.",
  },
  {
    question: "Do you support custom requirements ?",
    answer:
      "Yes. We work closely with clients to create custom features, workflows, and design solutions that align with their goals and user experience needs.",
  },
  {
    question: "Can I request revisions after launch ?",
    answer:
      "Absolutely. We offer post-launch support and revision rounds to help refine the experience and ensure the final product continues to work smoothly.",
  },
];

const AccordionItem = ({ item, isOpen, onToggle }) => (
  <div className="border-b-2 border-orange-500">
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between gap-4 py-4 text-left sm:py-5"
    >
      <span className="text-base font-medium text-white sm:text-xl md:text-2xl">
        {item.question}
      </span>
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-2xl leading-none text-white sm:h-8 sm:w-8 sm:text-3xl">
        {isOpen ? "−" : "+"}
      </span>
    </button>

    <div
      className={`grid transition-all duration-300 ease-in-out ${
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <p className="pb-5 pr-2 text-sm leading-7 text-orange-500 sm:pr-10 sm:text-lg md:text-xl">
          {item.answer}
        </p>
      </div>
    </div>
  </div>
);

const Page4 = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="w-full px-4 py-16 sm:px-8 md:px-16 md:py-24">
      <div className="mb-10 text-center md:mb-14">
        <h1 className="font-[Britannic] text-4xl text-orange-500 sm:text-5xl md:text-7xl lg:text-8xl">
          FAQ
        </h1>
      </div>

      <div className="mx-auto max-w-5xl rounded-3xl py-2 md:px-6 md:py-4">
        {faqs.map((item, index) => (
          <AccordionItem
            key={item.question}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Page4;
