// images
import founder from "../../assets/images/founder.avif";
import sales from "../../assets/images/sales.jpg";
import finance from "../../assets/images/finance.jpg";
import developer from "../../assets/images/developer.jpg";

// components
import TeamCard from "./TeamCard";

const team_members = [
  {
    name: "John Doe",
    image: founder,
    role: "Founder of the Company",
    slogan: "Do what you can't.",
  },
  {
    name: "Lucian Cardenas",
    image: developer,
    role: "Full Stack Developer",
    slogan: "A problem well stated is a problem half solved.",
  },
  {
    name: "Kyle Baxter",
    image: finance,
    role: "Administrative & financial Manager",
    slogan: "Compounding successes amount to greatness.",
  },
  {
    name: "Bernard Dyer",
    image: sales,
    role: "Sales & Marketing Manager",
    slogan:
      "Don't find customers for your products, find products for your customers.",
  },
];

const AboutTeam = () => {
  return (
    <section className="bg-[#171717]">
      <div className="mx-auto mt-20 flex max-w-screen-2xl flex-col items-center justify-center gap-20 py-20 sm:py-24">
        <header className="mx-auto flex max-w-7xl flex-col gap-4 px-5 sm:px-8">
          <h2 className="text-3xl font-semibold text-white sm:text-center sm:text-4xl">
            {" "}
            The team that makes the magic happen.{" "}
          </h2>
          <p className="text-justify text-lg font-light leading-8 text-zinc-400 sm:text-center">
            {" "}
            The power of a team resides in the fact that individuals bring their
            respective skills to the collective effort. It helps to know your
            teammates. Mutual respect and understanding is grounded in getting
            to know one another.{" "}
          </p>
        </header>

        {/* Team Members */}

        <section className="grid grid-cols-1 gap-8 px-2 md:grid-cols-2 xl:grid-cols-4">
          {team_members.map((member) => (
            <TeamCard
              key={member.slogan}
              name={member.name}
              image={member.image}
              role={member.role}
              slogan={member.slogan}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default AboutTeam;
