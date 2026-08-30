import React from "react";
import { FaInstagram, FaLinkedinIn, FaArrowRight } from "react-icons/fa6";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com/adveera_ad/",
    label: "Instagram",
  },
  {
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/pratiksha-mangrulkar-adveera-advertising/",
    label: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#141414]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 md:px-10 lg:px-16">
        <div className="grid gap-10 pb-10 sm:grid-cols-2 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
          <div>
            <h2 className="mb-4 font-[Britannic] text-3xl text-orange-500 md:text-4xl">
              Adveera
            </h2>
            <p className="max-w-md font-[Poppins] text-sm leading-7 text-white/80">
              We design bold digital experiences that help brands stand out,
              launch faster, and turn attention into action.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-orange-500 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-[Poppins] text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              Quick links
            </h3>
            <ul className="space-y-3 font-[Poppins] text-sm text-white/80">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-orange-500">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-[Poppins] text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              Let’s build
            </h3>
            <p className="mb-4 font-[Poppins] text-sm leading-7 text-white/80">
              Ready to launch something memorable? Let’s talk about your next
              project.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 font-[Poppins] text-sm font-medium text-white transition hover:bg-orange-400"
            >
              Start a project
              <FaArrowRight className="text-xs" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center font-[Poppins] text-sm text-white/70">
          © 2026 Adveera. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
