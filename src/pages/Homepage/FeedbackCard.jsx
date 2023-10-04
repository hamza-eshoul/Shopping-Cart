import { AiFillStar } from "react-icons/ai";

const FeedbackCard = ({ title, feedback, author }) => {
  return (
    <article className="flex flex-col gap-4 rounded-xl bg-white p-5 shadow-lg lg:w-96">
      {/* Icons */}
      <div className="flex gap-2">
        <AiFillStar style={{ color: "#06b6d4" }} className="h-5 w-5" />
        <AiFillStar style={{ color: "#06b6d4" }} className="h-5 w-5" />
        <AiFillStar style={{ color: "#06b6d4" }} className="h-5 w-5" />
        <AiFillStar style={{ color: "#06b6d4" }} className="h-5 w-5" />
        <AiFillStar style={{ color: "#06b6d4" }} className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold"> {title} </h3>
      <p className="pb-auto text-justify font-light"> {feedback} </p>
      <span className="text-sm font-light text-gray-500">
        {" "}
        - {""}
        {author}{" "}
      </span>
    </article>
  );
};

export default FeedbackCard;
