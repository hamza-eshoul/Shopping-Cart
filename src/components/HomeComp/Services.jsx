import React from "react";
import HomepageCard from "./HomepageCard";
import { RiComputerLine } from "react-icons/ri";
import { GrCloudComputer } from "react-icons/gr";
import { HiComputerDesktop } from "react-icons/hi2";
import gameLaptop from "../../img/gamingLaptop.png";

const Services = () => {
  return (
    <div className="flex flex-col bg-black pt-36 px-52 pb-24 gap-10 mt-28">
      {/* Services Paragrpah */}
      <div className="flex flex-col gap-5 w-3/5 text-justify">
        <h1 className="text-white font-semibold text-4xl">
          {" "}
          Every feature you need to win.{" "}
        </h1>
        <p className="text-gray-400 font-light text-xl leading-8">
          {" "}
          Our purpose is to allow our customers to find the best computers of
          the market at the best price. With these computers, you will be able
          to work and also play high fps games.{" "}
        </p>
      </div>

      {/* Img and Cards */}
      <div className="flex gap-32 items-center">
        <img src={gameLaptop} />

        <div className="flex flex-col gap-4">
          <HomepageCard
            cardIcon={<RiComputerLine />}
            cardTitle="Laptop Maintenance"
            cardParagraph="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. "
          />
          <HomepageCard
            cardIcon={<GrCloudComputer />}
            cardTitle="Breakthrough tech"
            cardParagraph="Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution"
          />
          <HomepageCard
            cardIcon={<HiComputerDesktop />}
            cardTitle="Aesthetic Design"
            cardParagraph="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
