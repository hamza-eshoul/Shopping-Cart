import React from "react";
import { SiAmd, SiIntel } from "react-icons/si";
import {
  AiFillWindows,
  AiOutlineApple,
  AiFillGoogleCircle,
} from "react-icons/ai";

const Brands = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10  px-52 pb-24 mt-20">
      <div className="flex flex-col gap-5 w-3/5 text-center">
        <h1 className="font-semibold text-4xl">
          {" "}
          The brands that support our adventure.{" "}
        </h1>
        <p className="text-gray-400 font-light text-xl leading-8">
          {" "}
          We are supported by multiple brands who share our philosophy and our
          vision consisting of making performance accessible to everyone.{" "}
        </p>
      </div>

      <div className="flex gap-4 text-[70px] ">
        <SiAmd className="hover:text-cyan-600" />
        <AiOutlineApple className="hover:text-cyan-600" />
        <SiIntel className="hover:text-cyan-600" />
        <AiFillWindows className="hover:text-cyan-600" />
        <AiFillGoogleCircle className="hover:text-cyan-600" />
      </div>
    </div>
  );
};

export default Brands;
