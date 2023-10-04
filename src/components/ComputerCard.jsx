import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ComputerCard = ({
  name,
  image,
  price,
  attr1,
  attr2,
  attr3,
  setProductCart,
}) => {
  const [purchasedProductQuantity, setPurchasedProductQuantity] = useState(1);

  const addPurchasedProduct = () => {
    setProductCart((prevCart) => {
      return [
        ...prevCart,
        {
          id: uuidv4(),
          name: name,
          image: image,
          price: price,
          quantity: purchasedProductQuantity,
        },
      ];
    });

    setPurchasedProductQuantity(1);
  };

  return (
    <article className="flex w-[340px] flex-col gap-4 border-2 border-gray-300 bg-white p-8 shadow-xl duration-500 ease-in-out hover:scale-105 sm:w-auto sm:rounded-xl sm:hover:border-cyan-500">
      <header className="text-center text-2xl font-semibold"> {name}</header>

      <div className="flex items-center justify-center">
        <div className=" h-44 w-[250px] sm:w-[290px]">
          <img src={image} className="h-full w-full" />
        </div>
      </div>

      <span>
        {" "}
        From : <span className="font-semibold">{price} </span>{" "}
      </span>

      <ul className="list-disc space-y-2 pl-5 font-light">
        <li> Processor: {attr1} </li>
        <li> Memory: {attr2} </li>
        <li> Screen Size: {attr3} </li>
      </ul>

      <div className="flex items-center justify-center gap-5">
        <button
          onClick={addPurchasedProduct}
          className="rounded-lg border-[1.5px] border-zinc-200 px-2 py-2.5 text-sm hover:bg-[#06b6d4] hover:text-white sm:px-6 sm:text-base"
        >
          {" "}
          Add to cart{" "}
        </button>
        <input
          type="number"
          min="1"
          value={purchasedProductQuantity}
          onChange={(e) => setPurchasedProductQuantity(+e.target.value)}
          className="text-md flex w-20 items-center text-center font-light text-black outline outline-2 outline-gray-200 focus:outline-cyan-600 sm:w-32"
        />
      </div>
    </article>
  );
};

export default ComputerCard;
