import React from "react";

const ComputerCard = ({
  computerName,
  computerImg,
  computerPrice,
  computerCarac1,
  computerCarac2,
  computerCarac3,
  inputNumber,
  productCart,
  purchaseProduct,
  productIdCounter,
  setProductIdCounter,
}) => {
  const addPurchasedProduct = () => {
    const purchasedNumber = document.querySelector(
      `[data-number="${inputNumber}"]`
    );

    purchaseProduct([
      ...productCart,
      {
        productImg: computerImg,
        productName: computerName,
        productPrice: computerPrice,
        productQuantity: +purchasedNumber.value,
        productId: productIdCounter,
      },
    ]);

    setProductIdCounter(productIdCounter + 1);
  };

  return (
    <div className="flex flex-col gap-4 rounded-xl w-96 p-5 bg-white shadow-xl border-2 border-gray-300 hover:scale-105 ease-in-out duration-500 hover:border-cyan-500">
      <h1 className="text-center font-semibold text-2xl"> {computerName}</h1>

      <div className="flex justify-center items-center">
        <div className="w-full h-56">
          <img src={computerImg} className="w-full h-full" />
        </div>
      </div>

      <h2>
        {" "}
        From : <span className="font-semibold">{computerPrice} </span>{" "}
      </h2>

      <ul className="space-y-2 list-disc pl-5 font-light">
        <li> Processor: {computerCarac1} </li>
        <li> Memory: {computerCarac2} </li>
        <li> Screen Size: {computerCarac3} </li>
      </ul>

      <div className="flex gap-5 justify-center items-center">
        <button
          onClick={addPurchasedProduct}
          className="myBtn w-36 font-light hover:bg-cyan-600 hover:text-white hover:font-semibold"
        >
          {" "}
          Add to cart{" "}
        </button>
        <input
          type="number"
          min="1"
          defaultValue={1}
          placeholder="1"
          data-number={inputNumber}
          className="focus:outline-cyan-600 outline outline-2 outline-gray-200 text-center w-32 text-md text-black flex items-center font-light"
        ></input>
      </div>
    </div>
  );
};

export default ComputerCard;
