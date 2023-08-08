import React, { useEffect } from "react";
import Showcase from "./HomeComp/Showcase";
import Services from "./HomeComp/Services";
import CustomersFB from "./HomeComp/CustomersFB";
import Copyright from "./HomeComp/Copyright";

const Home = ({ whiteNavBg }) => {
  useEffect(() => {
    whiteNavBg();
  }, []);

  return (
    <div>
      <Showcase />
      <Services />
      <CustomersFB />
      <Copyright />
    </div>
  );
};

export default Home;
