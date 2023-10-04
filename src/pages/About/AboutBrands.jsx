import React from "react";
import { SiAmd, SiIntel } from "react-icons/si";
import {
  AiFillWindows,
  AiOutlineApple,
  AiFillGoogleCircle,
} from "react-icons/ai";

const AboutBrands = () => {
  return (
    <section className="border-b-[1px] border-zinc-200">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center  gap-10 border-b-[1px] border-zinc-200 px-5 pb-32 pt-24">
        <header className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-5 sm:px-8 ">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            {" "}
            The brands that support our adventure.{" "}
          </h2>
          <p className="text-justify text-lg font-light leading-8 text-gray-600 sm:text-center">
            {" "}
            We are supported by multiple brands who share our philosophy and our
            vision consisting of making performance accessible to everyone.{" "}
          </p>
        </header>

        <div className="flex gap-4 text-[50px] sm:text-[70px] ">
          <SiAmd className="hover:text-[#06b6d4]" />
          <AiOutlineApple className="hover:text-[#06b6d4]" />
          <SiIntel className="hover:text-[#06b6d4]" />
          <AiFillWindows className="hover:text-[#06b6d4]" />
          <AiFillGoogleCircle className="hover:text-[#06b6d4]" />
        </div>
      </div>
    </section>
  );
};

export default AboutBrands;
