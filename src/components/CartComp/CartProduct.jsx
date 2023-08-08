import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

const CartProduct = ({
  productId,
  productImg,
  productName,
  productPrice,
  productQuantity,
  productCart,
  setProductCart,
}) => {
  const deleteCartProduct = (e) => {
    const myNumber = +e.currentTarget.getAttribute("number");

    setProductCart(
      productCart.filter((product) => +product.productId !== myNumber)
    );
  };

  return (
    <ul className="flex gap-3 border-b-[1px] py-4 w-1/2 text-center font-light">
      <li className="w-1/4 flex gap-4 justify-center items-center">
        <div className="w-20 h-18">
          <img src={productImg} className="object-contain" />
        </div>
        <p> {productName} </p>{" "}
      </li>
      <li className="w-1/4 flex justify-center items-center">
        {" "}
        {productPrice}{" "}
      </li>
      <li className="w-1/4 flex justify-center items-center">
        {productQuantity}
      </li>
      <li className="w-1/4 flex justify-center items-center font-semibold">
        <p className="w-full">
          {" "}
          {+productPrice.slice(0, -1) * productQuantity}
          {"$"}
        </p>
        <button
          number={productId}
          onClick={deleteCartProduct}
          className="cursor-pointer text-lg w-10 h-10 flex justify-center items-center bg-cyan-100 rounded-lg"
        >
          <BsFillTrashFill />
        </button>
      </li>
    </ul>
  );
};

export default CartProduct;
