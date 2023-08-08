import React, { useEffect } from "react";
import ComputerCard from "./ShopComp/ComputerCard";
import acerAspire from "../img/acerAspire.jpg";
import macbookpro from "../img/macbookpro.webp";
import rogstrix from "../img/rogstrix.webp";
import pavilion360 from "../img/pavilion360.jpg";
import acernitro5 from "../img/acernitro5.webp";
import macbookpro18 from "../img/macbookpro18.webp";
import ShopSwitcher from "./ShopComp/ShopSwitcher";

const ShopPage2 = ({
  grayNavBg,
  purchaseProduct,
  productCart,
  productIdCounter,
  setProductIdCounter,
}) => {
  useEffect(() => {
    grayNavBg();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 grid-rows-2 justify-items-center gap-y-12 p-5 bg-gray-50 pt-12">
        <ComputerCard
          computerName={"Acer Aspire 3"}
          computerImg={acerAspire}
          computerPrice={"329$"}
          computerCarac1={"Intel 10th Gen Core i5 "}
          computerCarac2={"Up to 8 GB "}
          computerCarac3={"15,6 inch "}
          inputNumber="7"
          productCart={productCart}
          purchaseProduct={purchaseProduct}
          productIdCounter={productIdCounter}
          setProductIdCounter={setProductIdCounter}
        />

        <ComputerCard
          computerName={"Macbook Pro M2"}
          computerImg={macbookpro}
          computerPrice={"2448$"}
          computerCarac1={"M2 Pro chip 12-core CPU "}
          computerCarac2={"Up to 96 GB "}
          computerCarac3={"16,2 inch "}
          inputNumber="8"
          productCart={productCart}
          purchaseProduct={purchaseProduct}
          productIdCounter={productIdCounter}
          setProductIdCounter={setProductIdCounter}
        />

        <ComputerCard
          computerName={"Asus Rog Strix"}
          computerImg={rogstrix}
          computerPrice={"2599$"}
          computerCarac1={"Intel 12th Gen Core i9 "}
          computerCarac2={"Up to 32 GB "}
          computerCarac3={"17,3 inch "}
          inputNumber="9"
          productCart={productCart}
          purchaseProduct={purchaseProduct}
          productIdCounter={productIdCounter}
          setProductIdCounter={setProductIdCounter}
        />

        <ComputerCard
          computerName={"HP Pavilion x360"}
          computerImg={pavilion360}
          computerPrice={"698$"}
          computerCarac1={"Intel 10th Gen Core i5"}
          computerCarac2={"Up to 8 GB "}
          computerCarac3={"14 inches "}
          inputNumber="10"
          productCart={productCart}
          purchaseProduct={purchaseProduct}
          productIdCounter={productIdCounter}
          setProductIdCounter={setProductIdCounter}
        />

        <ComputerCard
          computerName={"Acer Nitro 5"}
          computerImg={acernitro5}
          computerPrice={"1249$"}
          computerCarac1={"Intel 11th Gen Core i7"}
          computerCarac2={"Up to 32 GB "}
          computerCarac3={"15,6 inch "}
          inputNumber="11"
          productCart={productCart}
          purchaseProduct={purchaseProduct}
          productIdCounter={productIdCounter}
          setProductIdCounter={setProductIdCounter}
        />

        <ComputerCard
          computerName={"Macbook Pro 2018"}
          computerImg={macbookpro18}
          computerPrice={"1225$"}
          computerCarac1={"Intel Core i7 2.6Ghz "}
          computerCarac2={"Up to 32 GB "}
          computerCarac3={"15,4 inch "}
          inputNumber="12"
          productCart={productCart}
          purchaseProduct={purchaseProduct}
          productIdCounter={productIdCounter}
          setProductIdCounter={setProductIdCounter}
        />
      </div>
      <ShopSwitcher />
    </div>
  );
};

export default ShopPage2;
