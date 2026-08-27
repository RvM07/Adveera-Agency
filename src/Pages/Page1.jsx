import React from "react";
import Page1Bottom from "../components/Page1Bottom";

const Page1 = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-linear-to-b from-[#141518] from-70% to-orange-500">
        <h1 className="text-8xl w-full -mt-14 text-center font-[Poppins] font-extrabold text-orange-500 ">We make brands look too good to ignore !</h1>
      </div>
      <Page1Bottom />
    </>
  );
};

export default Page1;
