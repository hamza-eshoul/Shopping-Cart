import React from "react";
import { RiThunderstormsFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Nav = ({ navBg, totalQuantity }) => {
  return (
    <div className={`flex justify-around py-8 w-full items-center ${navBg}`}>
      <div className="flex gap-4 items-center">
        <RiThunderstormsFill className="text-4xl text-cyan-500" />
        <p className="text-xl font-medium"> Thunder Computation </p>
      </div>

      <ul className="flex gap-6 font-light text-lg">
        <Link to="/Shopping-Cart-Project">
          <li className="headerLiHover"> Home</li>
        </Link>

        <Link to="/shop1">
          {" "}
          <li className="headerLiHover"> Shop</li>
        </Link>

        <Link to="/about">
          {" "}
          <li className="headerLiHover"> About </li>
        </Link>

        <Link to="/cart">
          {" "}
          <li className="relative headerLiHover flex justify-center items-center gap-2">
            {" "}
            <AiOutlineShoppingCart /> <p> Cart</p>{" "}
            <span className="text-white text-center text-[11px] w-5 h-5 bg-cyan-500 rounded-xl absolute left-[75%] top-[50%] flex justify-center items-center ">
              {totalQuantity}{" "}
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
