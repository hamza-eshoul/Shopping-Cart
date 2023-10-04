import { useState } from "react";

// images
import macbook from "../assets/images/macbook.jpg";
import surface from "../assets/images/microsoftsurface.jpg";
import rog from "../assets/images/Rog.jpg";
import vivobook from "../assets/images/vivobook.jpg";
import dellxps from "../assets/images/dellxps.jpg";
import hpPavilion from "../assets/images/hpPavilion.jpg";
import acerAspire from "../assets/images/acerAspire.jpg";
import macbookpro from "../assets/images/macbookpro.webp";
import rogstrix from "../assets/images/rogstrix.webp";
import pavilion360 from "../assets/images/pavilion360.jpg";
import acernitro5 from "../assets/images/acernitro5.webp";
import macbookpro18 from "../assets/images/macbookpro18.webp";

// components
import ComputerCard from "../components/ComputerCard";

const computers_list_1 = [
  {
    name: "Macbook Air M1",
    image: macbook,
    price: "1200$",
    attr1: "M1 chip 8-core CPU",
    attr2: "Up to 16 GB",
    attr3: "13,3 inch",
    inputNumber: "1",
  },
  {
    name: "Microsoft Surface Studio",
    image: surface,
    price: "1524$",
    attr1: "Intel 11th Gen Core i7 ",
    attr2: "Up to 32 GB",
    attr3: "14,4 inch ",
    inputNumber: "2",
  },
  {
    name: "Asus Rog Zephyrus",
    image: rog,
    price: "2599$",
    attr1: "Intel 9th Gen Core i7",
    attr2: "Up to 24 GB",
    attr3: "15,6 inch ",
    inputNumber: "3",
  },
  {
    name: "Asus Vivobook 15",
    image: vivobook,
    price: "700$",
    attr1: "Intel 8th Gen Core i7",
    attr2: "Up to 8 gb",
    attr3: "15,6 inch ",
    inputNumber: "4",
  },
  {
    name: "DELL XPS 15 9520",
    image: dellxps,
    price: "1650$",
    attr1: "Intel 12th Gen Core i9",
    attr2: "Up to 32 GB",
    attr3: "15,6 inch ",
    inputNumber: "5",
  },
  {
    name: "HP Pavilion 15",
    image: hpPavilion,
    price: "580$",
    attr1: "Intel 12th Gen Core i5",
    attr2: "Up to 8 GB",
    attr3: "15,6 inch ",
    inputNumber: "6",
  },
];

const computers_list_2 = [
  {
    name: "Acer Aspire 3",
    image: acerAspire,
    price: "320$",
    attr1: "Intel 10th Gen Core i5",
    attr2: "Up to 8 GB",
    attr3: "15,6 inch",
    inputNumber: "7",
  },
  {
    name: "Macbook Pro m2",
    image: macbookpro,
    price: "2448$",
    attr1: "M2 Pro chip 12-core CPU",
    attr2: "Up to 96 GB",
    attr3: "16,2 inch",
    inputNumber: "8",
  },
  {
    name: "Asus Rog Strix",
    image: rogstrix,
    price: "2599$",
    attr1: "Intel 12th Gen Core i9",
    attr2: "Up to 32 GB",
    attr3: "17,3 inch ",
    inputNumber: "9",
  },
  {
    name: "HP Pavillon x360",
    image: pavilion360,
    price: "698$",
    attr1: "Intel 10th Gen Core i5",
    attr2: "Up to 8 gb",
    attr3: "14 inches",
  },
  {
    name: "Acer Nitro 5",
    image: acernitro5,
    price: "1249$",
    attr1: "Intel 11th Gen Core i7",
    attr2: "Up to 32 GB",
    attr3: "15,6 inch ",
  },
  {
    name: "Macbook Pro 2018",
    image: macbookpro18,
    price: "1225$",
    attr1: "Intel Core i7 2.6Ghz",
    attr2: "Up to 32 GB",
    attr3: "15,4 inch ",
  },
];

const ShopPage = ({ setProductCart }) => {
  const [products, setProducts] = useState(computers_list_1);

  return (
    <main className="border-b-[1px] border-zinc-200">
      {" "}
      <section className="grid grid-cols-1 justify-items-center gap-y-12 bg-gray-50 px-5 pb-5 pt-32 lg:grid-cols-2 xl:grid-cols-3">
        {products.map((computer) => (
          <ComputerCard
            key={computer.name}
            name={computer.name}
            image={computer.image}
            price={computer.price}
            attr1={computer.attr1}
            attr2={computer.attr2}
            attr3={computer.attr3}
            setProductCart={setProductCart}
          />
        ))}
      </section>
      <section className="flex items-center justify-center gap-8 bg-gray-50 py-8">
        {" "}
        <button
          className="cursor-pointer rounded-full border-[1px] border-zinc-200 bg-white px-4 py-1.5 text-lg hover:bg-cyan-500 hover:font-semibold hover:text-white"
          onClick={() => setProducts(computers_list_1)}
        >
          1{" "}
        </button>{" "}
        <button
          className="cursor-pointer rounded-full border-[1px] border-zinc-200 bg-white px-4 py-1.5 text-lg hover:bg-cyan-500 hover:font-semibold hover:text-white"
          onClick={() => setProducts(computers_list_2)}
        >
          2{" "}
        </button>
      </section>
    </main>
  );
};

export default ShopPage;
