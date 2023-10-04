import { useNavigate } from "react-router-dom";

// images
import computer from "../../assets/images/computer.png";

// Svg
import ForbesSvg from "../../assets/svg/Forbes.svg?react";
import TechCrunchSvg from "../../assets/svg/TechCrunch.svg?react";
import WiredSvg from "../../assets/svg/Wired.svg?react";
import CNNSvg from "../../assets/svg/CNN.svg?react";
import BBCSvg from "../../assets/svg/BBC.svg?react";
import CBSSvg from "../../assets/svg/CBS.svg?react";
import FastCompanySvg from "../../assets/svg/FastCompany.svg?react";
import HuffSpotSvg from "../../assets/svg/HuffSpot.svg?react";

const icons_list = [
  { svgIcon: ForbesSvg },
  { svgIcon: TechCrunchSvg },
  { svgIcon: WiredSvg },
  { svgIcon: CNNSvg },
  { svgIcon: BBCSvg },
  { svgIcon: CBSSvg },
  { svgIcon: FastCompanySvg },
  { svgIcon: HuffSpotSvg },
];

const HomeShowcase = () => {
  const navigate = useNavigate();
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-5 pt-32 lg:flex-row lg:px-10">
      {/* Showcase Paragraph and Icons */}
      <div className="mx-auto flex max-w-2xl flex-col gap-10">
        {/* Showcase Paragraph */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-medium">
            {" "}
            Get the machine that you need.
          </h1>
          <p className="text-justify text-lg leading-8 text-gray-500">
            {" "}
            By leveraging the power of the CPUs embedded within the next
            generation computers that we offer, you will be able to maximize
            your productivity and effeciency.
          </p>
          <div className="flex h-10 gap-5">
            <button
              className="w-32 rounded-lg border border-gray-300 bg-black px-5 py-2.5 text-sm text-white"
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </button>{" "}
            <button
              className="w-32 rounded-lg border border-gray-300 px-5 py-2.5 text-sm hover:border-gray-400 "
              onClick={() => navigate("/about")}
            >
              {" "}
              Learn More{" "}
            </button>
          </div>
        </div>

        {/* Showcase Icons */}
        <article className="flex flex-col gap-6">
          {" "}
          <span className="text-sm font-bold text-gray-900">
            {" "}
            As featured in{" "}
          </span>
          <div className="flex flex-wrap gap-8">
            {icons_list.map((icon) => (
              <icon.svgIcon key={icon.svgIcon} />
            ))}
          </div>
        </article>
      </div>

      {/* Showcase Img */}
      <div className="mx-auto flex max-w-xl items-center justify-center">
        <img src={computer} className="h-full w-full" />
      </div>
    </section>
  );
};

export default HomeShowcase;
