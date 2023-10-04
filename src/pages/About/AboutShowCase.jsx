import performanceImage from "../../assets/images/performance.png";

const AboutShowCase = () => {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-5 pt-32 lg:px-10">
      <header className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-semibold sm:text-center lg:text-4xl">
          {" "}
          Performance drives the core of our philosophy.
        </h1>
        <p className="text-justify text-lg font-light leading-8 text-gray-600 sm:text-center">
          {" "}
          Effective performance management is essential to businesses. Through
          both formal and informal processes, it helps them align their
          employees, resources, and systems to meet their strategic objectives.
        </p>
      </header>

      <div className="flex items-center justify-center sm:h-[500px] sm:w-[600px]">
        <img src={performanceImage} className="h-full w-full object-cover" />
      </div>
    </section>
  );
};

export default AboutShowCase;
