import { Link } from "react-router-dom";

// icons
import { HiOutlineMenu } from "react-icons/hi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { RiThunderstormsFill } from "react-icons/ri";

// components
import Overlay from "./Overlay";

const MobileMenu = ({
  isMobileMenuActive,
  setIsMobileMenuActive,
  navigate,
}) => {
  return (
    <>
      {isMobileMenuActive && <Overlay />}
      <div
        className={`${
          isMobileMenuActive && "bg-white"
        } absolute top-[1px] z-40 flex h-[245px] w-full flex-col gap-4 rounded-b-2xl p-6 lg:hidden`}
      >
        <div className="flex w-full justify-between">
          <div
            className="flex cursor-pointer items-center gap-4"
            onClick={() => navigate("/")}
          >
            <RiThunderstormsFill className="text-4xl text-cyan-500" />
            <span className="text-lg font-medium"> Thunder Computation </span>
          </div>

          <div
            className="cursor-pointer p-2 text-2xl hover:rounded-lg hover:bg-zinc-100 lg:hidden"
            onClick={() => setIsMobileMenuActive(!isMobileMenuActive)}
          >
            {isMobileMenuActive && <MdKeyboardArrowUp />}
            {!isMobileMenuActive && <HiOutlineMenu />}
          </div>
        </div>

        <nav>
          <ul
            className={`${
              isMobileMenuActive
                ? "opacity-100"
                : "left-[-9999px] top-[-9999px] opacity-0"
            } space-y-3 text-[17px] text-gray-700 transition-opacity duration-300`}
          >
            <li className="hover:font-medium hover:text-cyan-500">
              <Link to="/" onClick={() => setIsMobileMenuActive(null)}>
                Home
              </Link>
            </li>
            <li className="hover:font-medium hover:text-cyan-500">
              <Link to="/shop" onClick={() => setIsMobileMenuActive(null)}>
                Shop
              </Link>
            </li>

            <li className="hover:font-medium hover:text-cyan-500">
              <Link to="/about" onClick={() => setIsMobileMenuActive(null)}>
                About
              </Link>
            </li>

            <li className="hover:font-medium hover:text-cyan-500">
              <Link
                className="relative flex items-center gap-2"
                to="/cart"
                onClick={() => setIsMobileMenuActive(null)}
              >
                {" "}
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
