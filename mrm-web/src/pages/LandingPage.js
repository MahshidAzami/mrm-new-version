import React, { Component } from "react";
import Carousel from "../components/Carousel/Carousel";
import BannerForm from "../components/BannerForm/BannerForm";
import Hero from "../components/Hero/Hero";
import Featurette from "../components/Featurette/Featurette";

const LandingPage = ({ data }) => {
  const { banner, bannerForm, hero, services, info, about } = data;
  return (
    <div>
      <Carousel banner={banner} />
      <Hero hero={hero} />
      <Featurette services={services} info={info} about={about} />
    </div>
  );
};

export default LandingPage;
