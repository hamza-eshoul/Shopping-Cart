import React from "react";

const TeamCard = ({ memberImg, memberName, memberSlogan, memberRole }) => {
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl p-8 bg-neutral-800 shadow-xl border-2 border-gray-300 hover:scale-105 ease-in-out duration-500 hover:border-slate-700 text-white">
      <div className="h-72 w-56">
        {" "}
        <img
          src={memberImg}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <h1 className="text-white font-semibold text-xl"> {memberName} </h1>
      <h1 className="text-gray-300 font-light text-xl text-center h-14">
        {" "}
        {memberRole}{" "}
      </h1>
      <p className="text-center font-light text-base text-gray-300">
        {" "}
        "{memberSlogan}"
      </p>
    </div>
  );
};

export default TeamCard;
