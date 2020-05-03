import React, { Component } from "react";
import Carousel from "../components/Carousel/Carousel";
import BannerForm from "../components/BannerForm/BannerForm";
import Hero from "../components/Hero/Hero";

// import Hero from "../components/Hero/Hero";
// import Featurette from "../components/Featurette/Featurette";

const LandingPage = ({ data }) => {
  const { banner, bannerForm, hero } = data;
  return (
    <div>
      <Carousel banner={banner} />
      <Hero hero={hero} />
    </div>
  );
};

export default LandingPage;
