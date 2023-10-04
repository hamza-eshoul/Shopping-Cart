import FeedbackCard from "./FeedbackCard";

const feedback_cards_list = [
  {
    title: "Client Centric.",
    feedback:
      "This is literally the most important buy you will ever make in your life. Get on this before it’s so popular that everyone else is getting these tips too.",
    author: "JordanBelfort1962",
  },
  {
    title: '"Cross Functional."',
    feedback:
      "I started providing insider information myself and now I get new insider tips every 5 minutes. I don’t even have time to act on all of them.",
    author: "CluelessButRich",
  },
  {
    title: '"Customer Directed."',
    feedback:
      "Don't visit this shop unless you want to have the best life ever! I am literally writing this from a yacht and I hope that everyone else gets the same opportunity.",
    author: "MrBurns",
  },
  {
    title: '"Economically Sound."',
    feedback:
      "Every tip of functionnality this shop offered me has paid off. It’s like playing Blackjack but knowing exactly what card is coming next!",
    author: "BruceWayne",
  },
  {
    title: '"Fully Researched."',
    feedback:
      "After 2 weeks of using my new computer, I was debt-free. Why did I even go to school at all when this shop exists?",
    author: "ClarkKent",
  },
  {
    title: '"Standards Compliant."',
    feedback:
      "This is literally the most important buy you will ever make in your life. Get on this before it’s so popular that everyone else is getting these tips too.",
    author: "JeffBezos",
  },
];

const CustomersFeedback = () => {
  return (
    <section className="border-b-[1px] border-zinc-200">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center gap-14 pb-28 pt-20">
        <header className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-5 sm:px-8 ">
          <h2 className="text-3xl font-semibold sm:text-center sm:text-4xl">
            {" "}
            Everyone is changing their life with Thunder Computation.
          </h2>
          <p className="text-justify text-lg font-light leading-8 text-gray-600 sm:text-center">
            {" "}
            Thousands of people have improved their professional and personal
            lives by using our machines. Thanks to their computational power,
            everything is possible.
          </p>
        </header>

        <section className="flex flex-wrap justify-center gap-12 px-5 md:px-10">
          {feedback_cards_list.map((feedback) => (
            <FeedbackCard
              key={feedback.title}
              title={feedback.title}
              feedback={feedback.feedback}
              author={feedback.author}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default CustomersFeedback;
