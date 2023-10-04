import { IconContext } from "react-icons";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <article className="flex-flex-col cursor-pointer space-y-3 px-10 py-6 hover:bg-zinc-700/30 sm:rounded-lg">
      <IconContext.Provider
        value={{
          size: "2.5em",
          color: "DarkGray",
          className: "rounded-full p-2 bg-zinc-700",
        }}
      >
        {icon}
      </IconContext.Provider>

      <h3 className="text-white"> {title}</h3>
      <p className="text-justify text-sm font-light leading-7 text-zinc-400 ">
        {" "}
        {description}{" "}
      </p>
    </article>
  );
};

export default ServiceCard;
