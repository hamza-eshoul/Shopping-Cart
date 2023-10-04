import { BsFillTrashFill } from "react-icons/bs";

const CartProduct = ({
  id,
  name,
  image,
  price,
  quantity,
  productCart,
  setProductCart,
}) => {
  const deleteCartProduct = () => {
    setProductCart(productCart.filter((product) => product.id !== id));
  };

  return (
    <ul className="flex w-full gap-3 border-b-[1px] py-4 text-center font-light">
      <li className="flex w-1/4 items-center gap-2">
        <div className="h-18 hidden w-20 md:block">
          <img src={image} className="h-full w-full" />
        </div>
        <span className="w-full md:w-[80%]"> {name} </span>{" "}
      </li>
      <li className="flex w-1/4 items-center justify-center"> {price} </li>
      <li className="flex w-1/4 items-center justify-center">{quantity}</li>
      <li className="flex w-1/4 items-center justify-center gap-5 font-semibold sm:pl-6">
        <span className="w-[80%]">
          {" "}
          {+price.slice(0, -1) * quantity}
          {"$"}
        </span>
        <button
          onClick={deleteCartProduct}
          className="flex cursor-pointer items-center justify-center rounded-lg bg-cyan-100 text-lg"
        >
          <BsFillTrashFill />
        </button>
      </li>
    </ul>
  );
};

export default CartProduct;
