import React, { useEffect } from "react";
import AboutShowCase from "./AboutComp/AboutShowCase";
import AboutTeam from "./AboutComp/AboutTeam";
import Brands from "./AboutComp/Brands";

const About = ({ whiteNavBg }) => {
  useEffect(() => {
    whiteNavBg();
  }, []);

  return (
    <div>
      <AboutShowCase />
      <AboutTeam />
      <Brands />
    </div>
  );
};

export default About;
