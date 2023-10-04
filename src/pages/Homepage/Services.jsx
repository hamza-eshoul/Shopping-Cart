// images
import gameLaptop from "../../assets/images/gamingLaptop.png";

// icons
import { RiComputerLine } from "react-icons/ri";
import { PiComputerTowerDuotone } from "react-icons/pi";
import { HiComputerDesktop } from "react-icons/hi2";

// components
import ServiceCard from "./ServiceCard";

const services_list = [
  {
    icon: <RiComputerLine />,
    title: "Laptop Maintenance",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. ",
  },
  {
    icon: <PiComputerTowerDuotone />,
    title: "Breakthrough tech",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution",
  },
  {
    icon: <HiComputerDesktop />,
    title: "Aesthetic Design",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.",
  },
];

const Services = () => {
  return (
    <section className="bg-[#171717]">
      <div className=" mx-auto mt-28 flex max-w-7xl  flex-col gap-10  py-20 sm:py-24">
        <header className="mx-auto flex max-w-4xl flex-col gap-5 px-12 lg:mx-0">
          <h2 className="text-3xl font-semibold text-white">
            {" "}
            Every feature you need to win. Try it for yourself.{" "}
          </h2>
          <p className="max-w-2xl text-lg font-light leading-8 text-zinc-400">
            {" "}
            Our purpose is to allow our customers to find the best computers of
            the market at the best price. With these computers, you will be able
            to work and also play high fps games.{" "}
          </p>
        </header>

        <section className="flex flex-col items-center gap-20 lg:flex-row">
          <div className="px-6 lg:w-1/2">
            <img src={gameLaptop} className="h-full w-full" />
          </div>

          <div className="flex flex-col gap-4 px-0 sm:px-4 lg:w-1/2">
            {services_list.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
