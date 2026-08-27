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
    <div className="w-full h-screen bg-[#141414] px-6 py-16 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">
            Contact us
          </p>
          <h1 className="text-5xl font-[Britannic] text-orange-500 md:text-8xl">
            Let’s Talk
          </h1>
        </div>

        <div className="grid gap-8 grid-cols-2">
          <div className="p-6 md:p-10">
            <div className="mb-8">
              <h2 className="mb-3 text-3xl font-bold text-white">
                Get in touch
              </h2>
              <p className="text-base leading-7 text-slate-300">
                We’d love to hear about your next digital project and help turn
                your vision into a powerful online presence.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border px-4 py-3 text-white placeholder:text-slate-400 focus:border-orange-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border px-4 py-3 text-white placeholder:text-slate-400 focus:border-orange-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project"
                  className="w-full rounded-xl border border-white px-4 py-3 text-white placeholder:text-slate-400 focus:border-orange-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-6 p-6 md:p-10">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps?q=New%20York%20City&z=12&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

            <div className="space-y-4 text-slate-200">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-orange-400">
                  Visit us
                </p>
                <p className="mt-2 text-lg font-medium">
                  120 Park Avenue, New York, NY
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-orange-400">
                  Email
                </p>
                <p className="mt-2 text-lg font-medium">adveeraadvertisingagency@gmail.com</p> 
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-orange-400">
                  Phone
                </p>
                <p className="mt-2 text-lg font-medium">+91 77219 66626</p>
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
