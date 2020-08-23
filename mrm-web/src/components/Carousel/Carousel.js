import React from "react";
import { Fade } from "react-slideshow-image";
import "./Carousel.css";

const Carousel = ({ banner }) => {
  const fadeImages = banner;
  const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
  };
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        {fadeImages.map((item, i) => (
          <div key={i} className="each-fade">
            <div className="image-container ">
              <img src={item.image.src} alt={item.image.alt} />
              <div className="carousel-info">
                <h2 className="carousel-heading">{item.heading}</h2>
                <p className="carousel-text">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};
export default Carousel;
