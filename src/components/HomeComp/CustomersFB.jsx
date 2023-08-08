import React from "react";
import FeedbackCard from "./FeedbackCard";

const CustomersFB = () => {
  return (
    <div className="flex flex-col gap-14 justify-center items-center pt-28 pb-28 bg-gray-50">
      {/* Heading */}
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-semibold">
          {" "}
          The Feedback Of Our Customers.{" "}
        </h1>
        <p className="text-lg text-gray-600 font-light leading-8 text-center w-3/4 ">
          {" "}
          Thousands of people have improved their professional and personal
          lives thanks to our marchines. With their computational power,
          everything is possible
        </p>
      </div>

      {/* Custom Cards */}
      <div className="flex flex-col gap-8">
        {/* Customer Cards 1 */}
        <div className="flex gap-12">
          <FeedbackCard
            cardHeading={`"Client Centric."`}
            cardParagraph={
              "This is literally the most important buy you will ever make in your life. Get on this before it’s so popular that everyone else is getting these tips too."
            }
            cardAuthor={"JordanBelfort1962"}
          />
          <FeedbackCard
            cardHeading={`"Cross Functional."`}
            cardParagraph={
              "I started providing insider information myself and now I get new insider tips every 5 minutes. I don’t even have time to act on all of them."
            }
            cardAuthor={"CluelessButRich"}
          />
          <FeedbackCard
            cardHeading={`"Customer Directed."`}
            cardParagraph={
              "Don't visit this shop unless you want to have the best life ever! I am literally writing this from a yacht and I hope that everyone else gets the same opportunity."
            }
            cardAuthor={"MrBurns"}
          />
        </div>
        {/* Customer Cards 2 */}
        <div className="flex gap-12">
          <FeedbackCard
            cardHeading={`"Economically Sound."`}
            cardParagraph={
              "Every tip of functionnality this shop offered me has paid off. It’s like playing Blackjack but knowing exactly what card is coming next!"
            }
            cardAuthor={"BruceWayne"}
          />
          <FeedbackCard
            cardHeading={`"Fully Researched."`}
            cardParagraph={
              "I didn’t understand the computer market at all before buying a computer from this shop. I still don’t, but at least I’m rich now."
            }
            cardAuthor={"ClarkKent"}
          />
          <FeedbackCard
            cardHeading={`"Standards Compliant."`}
            cardParagraph={
              "After 2 weeks of using my new computer, I was debt-free. Why did I even go to school at all when this shop exists?"
            }
            cardAuthor={"JeffBezos"}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomersFB;
