import React, { useEffect } from "react";
import ComputerCard from "./ShopComp/ComputerCard";
import macbook from "../img/macbook.jpg";
import surface from "../img/microsoftsurface.jpg";
import rog from "../img/Rog.jpg";
import vivobook from "../img/vivobook.jpg";
import dellxps from "../img/dellxps.jpg";
import hpPavilion from "../img/hpPavilion.jpg";
import ShopSwitcher from "./ShopComp/ShopSwitcher";

const ShopPage1 = ({
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
      {" "}
      <div className="grid grid-cols-3 grid-rows-2 justify-items-center gap-y-12 p-5 bg-gray-50 pt-12">
        <ComputerCard
          computerName={"MacBook Air M1"}
          computerImg={macbook}
          computerPrice={"1200$"}
          computerCarac1={"M1 chip 8-core CPU "}
          computerCarac2={"Up to 16 GB "}
          computerCarac3={"13,3 inch "}
          inputNumber="1"
          productCart={productCart}
          purchaseProduct={purchaseProduct}
          productIdCounter={productIdCounter}
          setProductIdCounter={setProductIdCounter}
        />
        <ComputerCard
          computerName={"Microsoft Surface Studio"}
          computerImg={surface}
          computerPrice={"1524$"}
          computerCarac1={"Intel 11th Gen Core i7 "}
          computerCarac2={"Up to 32 GB "}
          computerCarac3={"14,4 inch "}
          inputNumber="2"
          productCart={productCart}
          purchaseProduct={purchaseProduct}
          productIdCounter={productIdCounter}
          setProductIdCounter={setProductIdCounter}
        />
        <ComputerCard
          computerName={"Asus Rog Zephyrus"}
          computerImg={rog}
          computerPrice={"2599$"}
          computerCarac1={"Intel 9th Gen Core i7 "}
          computerCarac2={"Up to 24 GB "}
          computerCarac3={"15,6 inch "}
          inputNumber="3"
          productCart={productCart}
          purchaseProduct={purchaseProduct}
          productIdCounter={productIdCounter}
          setProductIdCounter={setProductIdCounter}
        />
        <ComputerCard
          computerName={"ASUS VivoBook 15"}
          computerImg={vivobook}
          computerPrice={"700$"}
          computerCarac1={"Intel 8th Gen Core i7 "}
          computerCarac2={"Up to 8 GB "}
          computerCarac3={"15,6 inch "}
          inputNumber="4"
          productCart={productCart}
          purchaseProduct={purchaseProduct}
          productIdCounter={productIdCounter}
          setProductIdCounter={setProductIdCounter}
        />
        <ComputerCard
          computerName={"DELL XPS 15 9520"}
          computerImg={dellxps}
          computerPrice={"1650$"}
          computerCarac1={"Intel 12th Gen Core i9"}
          computerCarac2={"Up to 32 GB "}
          computerCarac3={"15,6 inch "}
          inputNumber="5"
          productCart={productCart}
          purchaseProduct={purchaseProduct}
          productIdCounter={productIdCounter}
          setProductIdCounter={setProductIdCounter}
        />
        <ComputerCard
          computerName={"HP Pavilion 15"}
          computerImg={hpPavilion}
          computerPrice={"580$"}
          computerCarac1={"Intel 12th Gen Core i5 "}
          computerCarac2={"Up to 8 GB "}
          computerCarac3={"15,6 inch "}
          inputNumber="6"
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

export default ShopPage1;
