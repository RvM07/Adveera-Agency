import React, { useState } from "react";
import ShinyText from "./ShinyText";
import { CgMenuGridO } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="header"
      className="fixed left-0 top-0 z-50 w-full px-4 sm:px-6 md:px-10"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <a
          href="#home"
          className="shrink-0 font-[Britannic] text-3xl font-bold md:text-4xl lg:text-5xl"
          onClick={() => setIsOpen(false)}
        >
          <ShinyText
            text="Adveera"
            speed={2}
            delay={0.3}
            color="#ffffff"
            shineColor="#f97316"
            spread={90}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </a>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-[Poppins] text-[10px] font-medium uppercase tracking-[0.22em] text-white transition hover:text-orange-500 lg:text-xs"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-orange-500 px-4 py-2 font-[Poppins] text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-orange-400 lg:px-5"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-2xl text-white transition hover:border-orange-500 hover:text-orange-500 md:hidden"
        >
          {isOpen ? <IoClose /> : <CgMenuGridO />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="rounded-2xl border border-white/10 bg-[#141414]/70 p-3 backdrop-blur-xl">
          <div className="flex flex-col gap-1">
            {[...navItems, { label: "Contact", href: "#contact" }].map(
              (item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-3 font-[Poppins] text-sm font-medium uppercase tracking-[0.18em] transition ${
                    item.label === "Contact"
                      ? "bg-orange-500 text-white hover:bg-orange-400"
                      : "text-white hover:bg-white/5 hover:text-orange-500"
                  }`}
                >
                  {item.label}
                </a>
              ),
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
