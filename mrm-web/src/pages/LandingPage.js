import React, { Component } from "react";
import Carousel from "../components/Carousel/Carousel";
// import Hero from "../components/Hero/Hero";
// import Featurette from "../components/Featurette/Featurette";

const LandingPage = ({ data }) => {
  const { banner } = data;
  return (
    <div>
      <Carousel banner={banner} />
      {/* <Hero text={this.state.data} />
      <Featurette
        products={this.props.products}
        details={this.state.data}
        videos={this.state.videos}
      /> */}
    </div>
  );
};

export default LandingPage;
