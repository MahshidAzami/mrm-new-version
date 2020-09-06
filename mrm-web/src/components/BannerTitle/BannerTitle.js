import React, { useState } from "react";
import "./BannerTitle.css";
import { Carousel, CarouselItem, CarouselCaption } from "reactstrap";
const BannerTitle = ({ hero }) => {
  const [activeIndex] = useState(0);

  const { banner, heading, subHeading } = hero;

  return (
    <Carousel activeIndex={activeIndex}>
      <CarouselItem className="image-container">
        <img src={banner.src} alt={banner.alt} className="w-100 banner80" />
        <CarouselCaption
          captionText={heading}
          captionHeader={subHeading}
          className="carousel-info"
        />
        <div className="d-block d-sm-none carousel-info">
          <p>{heading}</p>
        </div>
      </CarouselItem>
      <CarouselItem className="image-container">
        <img src={banner.src} alt={banner.alt} className="w-100 banner80" />
        <CarouselCaption
          captionText={heading}
          captionHeader={subHeading}
          className="carousel-info"
        />
        <div className="d-block d-sm-none carousel-info">
          <p>{heading}</p>
        </div>
      </CarouselItem>
    </Carousel>
  );
};
export default BannerTitle;
