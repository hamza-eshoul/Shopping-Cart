import React from "react";
import TeamCard from "./TeamCard";
import founder from "../../img/founder.avif";
import sales from "../../img/sales.jpg";
import finance from "../../img/finance.jpg";
import developer from "../../img/developer.jpg";

const AboutTeam = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20 bg-black pt-28 px-52 pb-24 mt-20">
      <div className="flex flex-col gap-5 w-3/5 text-center">
        <h1 className="text-white font-semibold text-4xl">
          {" "}
          The team that makes the magic happen.{" "}
        </h1>
        <p className="text-gray-400 font-light text-xl leading-8">
          {" "}
          The power of a team is the fact that individuals bring their
          respective skills to the collective. It helps to know your teammates.
          Mutual respect and understanding is grounded in getting to know one
          another.{" "}
        </p>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-4 gap-10 w-full">
        <TeamCard
          memberImg={founder}
          memberName={"John Doe"}
          memberRole={"Founder of the Company"}
          memberSlogan={"Do what you can't."}
        />
        <TeamCard
          memberImg={developer}
          memberName={"Lucian Cardenas"}
          memberRole={"Full Stack Developer"}
          memberSlogan={"A problem well stated is a problem half solved."}
        />
        <TeamCard
          memberImg={finance}
          memberName={"Kyle Baxter"}
          memberRole={"Administrative & financial Manager  "}
          memberSlogan={"Compounding successes amount to greatness "}
        />
        <TeamCard
          memberImg={sales}
          memberName={"Bernard Dyer"}
          memberRole={"Sales & Marketing Manager"}
          memberSlogan={
            "Don’t find customers for your products, find products for your customers."
          }
        />
      </div>
    </div>
  );
};

export default AboutTeam;
