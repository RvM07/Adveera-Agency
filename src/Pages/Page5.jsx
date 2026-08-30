import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page5 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message has been sent successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="w-full bg-[#141414] px-4 py-16 sm:px-8 md:px-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-orange-500 sm:text-sm">
            Contact us
          </p>
          <h1 className="font-[Britannic] text-4xl text-orange-500 sm:text-5xl md:text-7xl lg:text-8xl">
            Let’s Talk
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="p-0 md:p-4">
            <div className="mb-8">
              <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                Get in touch
              </h2>
              <p className="text-base leading-7 text-white/80">
                We’d love to hear about your next digital project and help turn
                your vision into a powerful online presence.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/50 focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/50 focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project"
                  className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/50 focus:border-orange-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400 sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-6 p-0 md:p-4">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30241.842030820422!2d73.7401876!3d18.6536608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f949f91c45%3A0xd75c57f09a936dc9!2sRavet%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20412101!5e0!3m2!1sen!2sin!4v1788110877329!5m2!1sen!2sin"
                className="h-56 w-full border-0 sm:h-72"
                loading="lazy"
                allowFullScreen
              />
            </div>

            <div className="space-y-4 text-white">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
                  Visit us
                </p>
                <p className="mt-2 text-base font-medium sm:text-lg">
                  Ravet, Pimpri-Chinchwad, Maharashtra 412101, India
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
                  Email
                </p>
                <p className="mt-2 break-all text-base font-medium sm:text-lg">
                  adveeraadvertisingagency@gmail.com
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
                  Phone
                </p>
                <p className="mt-2 text-base font-medium sm:text-lg">
                  +91 77219 66626
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Page5;
