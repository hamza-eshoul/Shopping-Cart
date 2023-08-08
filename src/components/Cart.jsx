import React, { useEffect } from "react";
import creditCards from "../img/credit-cards.png";
import CartProduct from "./CartComp/CartProduct";

const Cart = ({
  whiteNavBg,
  productCart,
  setProductCart,
  totalQuantity,
  totalPrice,
}) => {
  useEffect(() => {
    whiteNavBg();
  }, []);

  const clearArray = () => {
    setProductCart([]);
  };

  return (
    <div className="flex flex-col gap-10 items-center mt-10">
      <h1 className="text-4xl font-semibold">
        {" "}
        My Cart{" "}
        <span className="font-light text-3xl">
          {" "}
          ({totalQuantity} items){" "}
        </span>{" "}
      </h1>

      <div className="flex flex-col w-full items-center">
        <ul className="flex gap-3 border-t-[1px] border-b-[1px] py-4 w-1/2 text-center border-cyan-600">
          <li className="w-1/4"> Product </li>
          <li className="w-1/4"> Price</li>
          <li className="w-1/4"> Quantity </li>
          <li className="w-1/4"> Subtotal </li>
        </ul>

        {/* Purchased Products */}
        <div className="flex flex-col w-full items-center">
          {productCart.map((product) => (
            <CartProduct
              key={product.productId}
              productId={product.productId}
              productImg={product.productImg}
              productName={product.productName}
              productPrice={product.productPrice}
              productQuantity={product.productQuantity}
              productCart={productCart}
              setProductCart={setProductCart}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-xl w-96 p-5 bg-white shadow-xl border-2 border-gray-300 hover:scale-[1.02] ease-in-out duration-500 hover:border-cyan-500">
        <h1 className="text-xl font-semibold"> Total </h1>
        <div className="flex justify-between font-light">
          <p>Sub-total</p>
          <p> {totalPrice} $ </p>
        </div>

        <div className="flex justify-between font-light border-b-[1px] pb-2">
          <p>Shipping</p>
          <p> FREE </p>
        </div>

        <div className="flex justify-between">
          <p>Total (VAT incl.) </p>
          <p> {totalPrice} $ </p>
        </div>

        <button className="myBtn w-full hover:bg-cyan-600 hover:text-white hover:font-semibold">
          {" "}
          Proceed To Checkout{" "}
        </button>
        <button
          onClick={clearArray}
          className="myBtn w-full hover:bg-cyan-600 hover:text-white hover:font-semibold"
        >
          {" "}
          Reset My Cart{" "}
        </button>
      </div>

      <div className="flex flex-col gap-4 rounded-xl w-96 p-5 bg-white shadow-xl border-2 border-gray-300 hover:scale-[1.02] ease-in-out duration-500 hover:border-cyan-500 mb-10">
        <h1 className="text-xl font-semibold"> We accept </h1>
        <div className="w-3/5 h-8">
          <img src={creditCards} className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
