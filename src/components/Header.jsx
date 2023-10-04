import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// icons
import { RiThunderstormsFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";

// components
import MobileMenu from "./MobileMenu";

const Header = ({ totalQuantity }) => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(null);
  const navigate = useNavigate();

  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between">
      <MobileMenu
        isMobileMenuActive={isMobileMenuActive}
        setIsMobileMenuActive={setIsMobileMenuActive}
        navigate={navigate}
      />

      {/* Desktop menu */}

      <div className="hidden w-full items-center justify-between px-5 pt-5 lg:flex">
        <div
          className="flex cursor-pointer gap-3"
          onClick={() => navigate("/")}
        >
          <RiThunderstormsFill className="text-4xl text-cyan-500" />
          <span className="text-lg font-medium"> Thunder Computation </span>
        </div>
        <nav>
          <ul className="hidden items-center gap-6 font-light lg:flex">
            <li>
              <Link className="nav_li" to="/ ">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav_li" to="/shop">
                Shop
              </Link>
            </li>

            <li>
              <Link className="nav_li" to="/about">
                About
              </Link>
            </li>

            <li>
              <Link
                className="nav_li relative flex items-center gap-2"
                to="/cart"
              >
                {" "}
                <AiOutlineShoppingCart /> <p> Cart</p>{" "}
                <span className="absolute left-[75%] top-[50%] flex h-5 w-5 items-center justify-center rounded-xl bg-cyan-500 text-center text-[11px] text-white ">
                  {totalQuantity}{" "}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
