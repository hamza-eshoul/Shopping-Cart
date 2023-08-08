import React from "react";
import performanceImg from "../../img/performance.webp";

const AboutShowCase = () => {
  return (
    <div className="flex flex-col mt-32 w-full computer:px-72 gap-14 justify-center items-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-semibold">
          {" "}
          Performance drives the core of our philosophy.
        </h1>
        <p className="text-lg text-gray-600 font-light leading-8 text-center">
          {" "}
          Effective performance management is essential to businesses. Through
          both formal and informal processes, it helps them align their
          employees, resources, and systems to meet their strategic objectives.
          It works as a dashboard too, providing an early warning of potential
          problems and allowing managers to know when they must make adjustments
          to keep a business on track.
        </p>
      </div>

      <div className="flex justify-center items-center h-[580px] w-[680px]">
        <img src={performanceImg} className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default AboutShowCase;
