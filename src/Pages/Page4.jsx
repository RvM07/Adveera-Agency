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
      className="w-full flex items-center justify-between py-5 text-left"
    >
      <span className="text-2xl font-medium text-white">
        {item.question}
      </span>
      <span className="flex h-8 w-8 pb-2 items-center justify-center rounded-full bg-orange-500 text-4xl text-white">
        {isOpen ? "−" : "+"}
      </span>
    </button>

    <div
      className={`grid transition-all duration-300 ease-in-out ${
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <p className="pb-5 pr-10 text-xl leading-7 text-orange-500">
          {item.answer}
        </p>
      </div>
    </div>
  </div>
);

const Page4 = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="w-full h-screen py-16 px-25 mb-12">
      <div className="mt-35 mb-14 text-center">
        <h1 className="font-[Britannic] text-orange-500 text-8xl">
          FAQ
        </h1>
      </div>

      <div className="rounded-3xl px-14 py-4">
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
