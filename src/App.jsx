import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Footer from "./components/Footer";
import Header from "./components/Header";

// pages
import Home from "./pages/Homepage/Home";
import About from "./pages/About/About";
import Cart from "./pages/Cart";
import ShopPage from "./pages/ShopPage";

const App = () => {
  const [productCart, setProductCart] = useState([]);

  const [totalQuantity, setTotalQuantity] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartTotalQuantity = productCart.reduce((total, product) => {
      return total + product.quantity;
    }, 0);

    setTotalQuantity(cartTotalQuantity);

    const cartTotalPrice = productCart.reduce((total, product) => {
      return total + product.quantity * +product.price.slice(0, -1);
    }, 0);

    setTotalPrice(cartTotalPrice);
  }, [productCart]);

  return (
    <BrowserRouter>
      {/* <<div className="bg-[#FAFAFA] font-inter font-normal"> */}
      <Header totalQuantity={totalQuantity} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<ShopPage setProductCart={setProductCart} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={
            <Cart
              productCart={productCart}
              setProductCart={setProductCart}
              totalQuantity={totalQuantity}
              totalPrice={totalPrice}
            />
          }
        />
      </Routes>
      <Footer />
      {/* </div> */}
    </BrowserRouter>
  );
};

export default App;
