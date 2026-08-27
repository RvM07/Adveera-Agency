import React, { useState } from "react";
import ShinyText from "./ShinyText";
import { CgMenuGridO } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="header"
      className="fixed left-0 top-0 z-50 w-full h-24 px-5 md:px-10 xl:px-26"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
        <a href="#home" className="text-4xl font-bold font-[Britannic] md:text-5xl">
          <ShinyText
            text="Adveera"
            speed={2}
            delay={0.3}
            color="#ffffff"
            shineColor="#ff6900"
            spread={90}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium uppercase tracking-[0.2em] text-white/80 transition hover:text-orange-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-3xl text-white transition hover:border-orange-400 hover:text-orange-400 md:hidden"
        >
          {isOpen ? <IoClose /> : <CgMenuGridO />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mt-2 rounded-2xl border border-white/10 bg-[#111827]/95 p-4 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium uppercase tracking-[0.2em] text-white/85 transition hover:bg-white/5 hover:text-orange-400"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
