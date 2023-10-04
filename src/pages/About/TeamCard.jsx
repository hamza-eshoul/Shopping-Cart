const TeamCard = ({ name, image, role, slogan }) => {
  return (
    <article className="flex w-[300px] flex-col items-center justify-around gap-4 rounded-lg border-[0.5px] border-zinc-50 bg-neutral-800 p-8 text-white shadow-xl">
      <div className="h-60 w-52">
        {" "}
        <img src={image} className="h-full w-full rounded-lg object-cover" />
      </div>
      <h3 className="text-xl font-semibold text-white"> {name} </h3>
      <h4 className="text-center text-lg font-light text-gray-300"> {role} </h4>
      <p className="text-center text-base font-light text-gray-300">
        {" "}
        "{slogan}"
      </p>
    </article>
  );
};

export default TeamCard;
