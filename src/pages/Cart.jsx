import { useState } from "react";

// images
import creditCards from "../assets/images/credit-cards.png";

// components
import CartProduct from "../components/CartProduct";
import Toast from "../components/Toast";

const Cart = ({ productCart, setProductCart, totalQuantity, totalPrice }) => {
  const [toastNotification, setToastNotification] = useState(null);

  const toggleToastNotification = () => {
    setToastNotification(true);

    setTimeout(() => {
      setToastNotification(null);
    }, 5000);
  };

  const clearCart = () => {
    setProductCart([]);
  };

  return (
    <main className="border-b-[1px] border-zinc-200">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 pb-20 pt-32">
        <h1 className="text-4xl font-semibold">
          {" "}
          My Cart{" "}
          <span className="text-3xl font-light">
            {" "}
            ({totalQuantity} {totalQuantity === 1 ? "item" : "items"})
          </span>{" "}
        </h1>

        <section className="flex w-full flex-col items-center sm:px-10 lg:px-28">
          <ul className=" flex w-full gap-3 border-b-[1px] border-t-[1px] border-cyan-500 py-4 text-center">
            <li className="w-1/4"> Product </li>
            <li className="w-1/4"> Price</li>
            <li className="w-1/4"> Quantity </li>
            <li className="w-1/4"> Subtotal </li>
          </ul>

          {/* Purchased Products */}
          <div className="flex w-full flex-col items-center px-2">
            {productCart.map((product) => (
              <CartProduct
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                quantity={product.quantity}
                productCart={productCart}
                setProductCart={setProductCart}
              />
            ))}
          </div>
        </section>

        <section className="flex w-80 flex-col gap-4 rounded-xl border-2 border-gray-300 bg-white p-5 shadow-xl duration-500 ease-in-out hover:scale-[1.02] hover:border-cyan-500 sm:w-96 ">
          <h2 className="text-xl font-semibold"> Total </h2>
          <div className="flex justify-between font-light">
            <span>Sub-total</span>
            <span> {totalPrice} $ </span>
          </div>

          <div className="flex justify-between border-b-[1px] pb-2 font-light">
            <span>Shipping</span>
            <span> FREE </span>
          </div>

          <div className="flex justify-between">
            <span>Total (VAT incl.) </span>
            <span> {totalPrice} $ </span>
          </div>

          <button
            className="rounded-lg border-[1.5px] border-zinc-200 px-3 py-2.5 text-[15px] font-medium hover:bg-[#06b6d4] hover:text-white"
            onClick={() => toggleToastNotification()}
          >
            {" "}
            Proceed To Checkout{" "}
          </button>
          <button
            onClick={clearCart}
            className="rounded-lg border-[1.5px] border-zinc-200 px-3 py-2.5 text-[15px] font-medium hover:bg-[#06b6d4] hover:text-white"
          >
            {" "}
            Reset My Cart{" "}
          </button>
        </section>

        <div className="mb-10 flex w-80 flex-col gap-4 rounded-xl border-2 border-gray-300 bg-white p-5 shadow-xl duration-500 ease-in-out hover:scale-[1.02] hover:border-cyan-500 sm:w-96">
          <h2 className="text-xl font-semibold"> We accept </h2>
          <div className="h-8 w-3/5">
            <img src={creditCards} className="h-full w-full" />
          </div>
        </div>
      </div>
      <Toast
        toastNotification={toastNotification}
        setToastNotification={setToastNotification}
        bgColor={"bg-cyan-500"}
        textColor={"text-white"}
        elementType={"Button"}
      />
    </main>
  );
};

export default Cart;
