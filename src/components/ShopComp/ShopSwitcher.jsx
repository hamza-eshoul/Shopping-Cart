import React from "react";
import { Link } from "react-router-dom";

const ShopSwitcher = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50 pb-4">
      <div className="flex gap-8 text-xl">
        <Link to="/shop1">
          {" "}
          <p className="myBtn w-auto bg-white hover:bg-cyan-600 hover:text-white hover:font-semibold cursor-pointer">
            {" "}
            1{" "}
          </p>
        </Link>

        <Link to="/shop2">
          {" "}
          <p className="myBtn w-auto bg-white hover:bg-cyan-600 hover:text-white hover:font-semibold cursor-pointer">
            {" "}
            2{" "}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ShopSwitcher;
