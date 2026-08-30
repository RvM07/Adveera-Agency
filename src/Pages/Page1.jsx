import React from "react";
import Page1Bottom from "../components/Page1Bottom";

const Page1 = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-center bg-linear-to-b from-[#141518] from-70% to-orange-500 px-4 pt-36 sm:px-8 sm:pt-40 md:px-12 md:pt-44">
      <h1 className="mx-auto max-w-6xl text-center font-[Poppins] text-3xl font-extrabold leading-tight text-orange-500 sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
        We make brands look too good to ignore !
      </h1>
      <Page1Bottom />
    </div>
  );
};

export default Page1;
