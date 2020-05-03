import React from "react";
import { Markup } from "interweave";

const Hero = ({ hero: { heroLarge, heroMobile } }) => (
  <div className="bg-dark text-white p-3">
    <div className="container">
      <div className="d-none d-md-block">
        <Markup content={heroLarge} />
      </div>
      <div className="d-md-none">
        <Markup content={heroMobile} />
      </div>
    </div>
  </div>
);

export default Hero;
