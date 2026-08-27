import React from "react";
import { FaInstagram, FaLinkedinIn, FaBehance, FaArrowRight } from "react-icons/fa6";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="w-full mt-48 bg-[#141414]">
      <div className="mx-auto max-w-7xl px-6 py-12 px-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
          <div>
            <h2 className="mb-4 font-[Britannic] text-4xl text-orange-500">Adveera</h2>
            <p className="max-w-md text-sm leading-7 text-dwhite">
              We design bold digital experiences that help brands stand out, launch faster,
              and turn attention into action.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a
                  key={index}
                  href="https://www.instagram.com/adveera_ad/,https://www.linkedin.com/in/pratiksha-mangrulkar-adveera-advertising/"
                  aria-label="social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-orange-400 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Quick links
            </h3>
            <ul className="space-y-3 text-sm text-white">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-orange-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
              Let’s build
            </h3>
            <p className="mb-4 text-sm leading-7 text-white">
              Ready to launch something memorable? Let’s talk about your next project.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-orange-500 bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-400"
            >
              Start a project
              <FaArrowRight className="text-xs" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white pt-6 text-center text-sm text-white">
          © 2026 Adveera. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
