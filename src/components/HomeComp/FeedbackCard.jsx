import React from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackCard = ({ cardHeading, cardParagraph, cardAuthor }) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl w-96 p-5 bg-white shadow-lg">
      {/* Icons */}
      <div className="flex gap-2">
        <AiFillStar style={{ color: "#06b6d4" }} className="w-5 h-5" />
        <AiFillStar style={{ color: "#06b6d4" }} className="w-5 h-5" />
        <AiFillStar style={{ color: "#06b6d4" }} className="w-5 h-5" />
        <AiFillStar style={{ color: "#06b6d4" }} className="w-5 h-5" />
        <AiFillStar style={{ color: "#06b6d4" }} className="w-5 h-5" />
      </div>
      <h1 className="font-semibold"> {cardHeading} </h1>
      <p className="font-light text-justify pb-auto"> {cardParagraph} </p>
      <p className="font-light text-sm text-gray-500">
        {" "}
        - {""}
        {cardAuthor}{" "}
      </p>
    </div>
  );
};

export default FeedbackCard;
