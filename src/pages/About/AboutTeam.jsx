// images
import RFK from "../../assets/images/RFK.jpg";
import Camus from "../../assets/images/Camus.jpg";
import Ntz from "../../assets/images/Ntz.jpeg";
import Dostoevsky from "../../assets/images/Dostoevsky.jpg";

// components
import TeamCard from "./TeamCard";

const team_members = [
  {
    name: "Robert Francis Kennedy",
    image: RFK,
    role: "Founder of the Company",
    slogan: "Only those who dare to fail greatly can ever achieve greatly.",
  },
  {
    name: "Albert Camus",
    image: Camus,
    role: "Full Stack Developer",
    slogan:
      "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
  },
  {
    name: "Friedrich Nietzsche",
    image: Ntz,
    role: "Administrative & financial Manager",
    slogan:
      "One must need to be strong -- otherwise one will never become strong.",
  },
  {
    name: "Fyodor Dostoevsky",
    image: Dostoevsky,
    role: "Sales & Marketing Manager",
    slogan:
      "Man is sometimes extraordnarily, passionately, in love with suffering, and that is a fact",
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
