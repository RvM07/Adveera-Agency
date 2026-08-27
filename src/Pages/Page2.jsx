import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import TextLoop from "../components/TextLoop";

const Page2 = () => {
  return (
    <>
      <div className="w-full h-screen px-20 flex items-center justify-between bg-linear-to-t from-80% from-[#141518] to-orange-500">
        <h1 className="text-8xl font-[Britannic] text-orange-500">
          Our Services
        </h1>
        <div className="flex flex-col gap-4">
          <div className="relative m-2">
            <div className="text-3xl flex items-center gap-5 text-white uppercase">
              <h1>
                <FaAngleDoubleRight />
              </h1>
              <h1 className="p-2">Website design & Development</h1>
            </div>
            <hr className="absolute mt-4 border-orange-500 border-2 rounded-full w-full" />
          </div>
          <div className="relative m-2">
            <div className="text-3xl flex items-center gap-5 text-white uppercase">
              <h1>
                <FaAngleDoubleRight />
              </h1>
              <h1 className="p-2">Branding & brand Growth Strategy</h1>
            </div>
            <hr className="absolute mt-4 border-orange-500 border-2 rounded-full w-full" />
          </div>
          <div className="relative m-2">
            <div className="text-3xl flex items-center gap-5 text-white uppercase">
              <h1>
                <FaAngleDoubleRight />
              </h1>
              <h1 className="p-2">Digital Advertising</h1>
            </div>
            <hr className="absolute mt-4 border-orange-500 border-2 rounded-full w-full" />
          </div>
          <div className="relative m-2">
            <div className="text-3xl flex items-center gap-5 text-white uppercase">
              <h1>
                <FaAngleDoubleRight />
              </h1>
              <h1 className="p-2">Social media advertising</h1>
            </div>
            <hr className="absolute mt-4 border-orange-500 border-2 rounded-full w-full" />
          </div>
          <div className="relative m-2">
            <div className="text-3xl flex items-center gap-5 text-white uppercase">
              <h1>
                <FaAngleDoubleRight />
              </h1>
              <h1 className="p-2">social media marketing</h1>
            </div>
            <hr className="absolute mt-4 border-orange-500 border-2 rounded-full w-full" />
          </div>
        </div>
      </div>
      <div className="-mt-70 -mb-30 leading-none">
        <TextLoop
          text="Adveera Agency"
          shape="wave"
          speed={80}
          direction="reverse"
          separator=" ✦ "
          curviness={40}
          fontSize={78}
          fontWeight={850}
          letterSpacing={-4}
          uppercase
          color="#141518"
          ribbon
          ribbonColor="#ff6900"
          ribbonWidth={100}
          pauseOnHover={false}
        />
      </div>
    </>
  );
};

export default Page2;
