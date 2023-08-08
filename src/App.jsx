import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Nav from "./components/Nav";
import ShopPage1 from "./components/ShopPage1";
import ShopPage2 from "./components/ShopPage2";

const App = () => {
  const [navBg, setNavBg] = useState("bg-white");

  const setNavBgGray = () => {
    setNavBg("bg-gray-50");
  };

  const setNavBgWhite = () => {
    setNavBg("bg-white");
  };

  const [productCart, setProductCart] = useState([]);

  const [productIdCounter, setProductIdCounter] = useState(1);

  const [totalQuantity, setTotalQuantity] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const reduceQt = productCart.reduce((total, product) => {
      return total + product.productQuantity;
    }, 0);

    setTotalQuantity(reduceQt);

    const reducePrice = productCart.reduce((total, product) => {
      return (
        total + product.productQuantity * +product.productPrice.slice(0, -1)
      );
    }, 0);

    setTotalPrice(reducePrice);
  }, [productCart]);

  return (
    <BrowserRouter basename="/">
      <div className="font-inter">
        {" "}
        <Nav navBg={navBg} totalQuantity={totalQuantity} />
        <Routes>
          <Route
            exact
            path="/Shopping-Cart-Project"
            element={<Home whiteNavBg={setNavBgWhite} />}
          />
          <Route
            path="/shop1"
            element={
              <ShopPage1
                grayNavBg={setNavBgGray}
                productCart={productCart}
                purchaseProduct={setProductCart}
                productIdCounter={productIdCounter}
                setProductIdCounter={setProductIdCounter}
              />
            }
          />
          <Route
            path="/shop2"
            element={
              <ShopPage2
                grayNavBg={setNavBgGray}
                productCart={productCart}
                purchaseProduct={setProductCart}
                productIdCounter={productIdCounter}
                setProductIdCounter={setProductIdCounter}
              />
            }
          />
          <Route path="/about" element={<About whiteNavBg={setNavBgWhite} />} />
          <Route
            path="/cart"
            element={
              <Cart
                whiteNavBg={setNavBgWhite}
                productCart={productCart}
                setProductCart={setProductCart}
                totalQuantity={totalQuantity}
                totalPrice={totalPrice}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
