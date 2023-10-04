import { useState } from "react";
import { Link } from "react-router-dom";

// images
import qrCode from "../assets/images/qrCode.png";

// icons
import { RiThunderstormsFill } from "react-icons/ri";

// components
import Toast from "./Toast";

const Footer = () => {
  const [toastNotification, setToastNotification] = useState(null);

  const toggleToastNotification = () => {
    setToastNotification(true);

    setTimeout(() => {
      setToastNotification(null);
    }, 5000);
  };

  return (
    <footer className="mx-auto max-w-7xl py-10 md:px-6">
      <section className="flex flex-col justify-between gap-12 border-b-[1px] border-zinc-200 py-10 lg:flex-row lg:gap-0">
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-4 pl-5">
            <RiThunderstormsFill className="text-4xl text-cyan-500" />
            <div className="flex flex-col gap-2">
              <span className="font-medium">Thunder Computation</span>
              <span className="text-sm text-[#404040]">
                Buy the computer you need.
              </span>
            </div>
          </div>
          <ul className="flex gap-1">
            <li>
              <Link className="nav_li" to="/">
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
              <Link className="nav_li" to="/cart">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex max-w-md cursor-pointer gap-6 rounded-xl p-6 hover:bg-zinc-100/80">
          <img src={qrCode} className="h-24 w-24" />

          <div className="flex flex-col gap-2">
            <p className="font-medium ">Download the app</p>
            <span className="text-sm text-[#404040]">
              Scan the QR code to download the app from the App store.
            </span>
          </div>
        </div>
      </section>

      <section className="flex flex-col-reverse items-center justify-between gap-3 py-4 sm:p-3 md:flex-row">
        <span className="text-sm text-gray-500">
          © Copyright 2023. All rights reserved
        </span>

        <form className="flex gap-4 p-2 sm:p-6">
          <input
            type="email"
            required
            placeholder="Email address"
            className="rounded-lg border-[1px] border-zinc-200 px-2 text-sm outline-[#06b6d4] sm:w-[225px]"
          />
          <button
            className="rounded-lg bg-[#06b6d4] px-3 py-2.5 text-sm font-medium text-white hover:opacity-90"
            type="button"
            onClick={() => toggleToastNotification()}
          >
            Join newsletter
          </button>
        </form>
      </section>

      <Toast
        toastNotification={toastNotification}
        setToastNotification={setToastNotification}
        bgColor={"bg-cyan-500"}
        textColor={"text-white"}
        elementType={"Button"}
      />
    </footer>
  );
};

export default Footer;
