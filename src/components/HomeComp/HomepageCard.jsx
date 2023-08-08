import React from "react";
import { IconContext } from "react-icons";

const HomepageCard = ({ cardIcon, cardTitle, cardParagraph }) => {
  return (
    <div className="rounded-lg hover:bg-neutral-800 px-10 py-6 flex-flex-col space-y-3 cursor-pointer">
      <IconContext.Provider
        value={{
          size: "2.5em",
          color: "black",
          className: "rounded-full p-1 bg-zinc-200",
        }}
      >
        <div>{cardIcon}</div>
      </IconContext.Provider>

      <h2 className="text-white"> {cardTitle}</h2>
      <p className="text-gray-400 text-justify text-base leading-7 font-light ">
        {" "}
        {cardParagraph}{" "}
      </p>
    </div>
  );
};

export default HomepageCard;
