// import React from "react";
// import { Fade } from "react-slideshow-image";
import "./Carousel.css";

// const Carousel = ({ banner }) => {
//   const fadeImages = banner;
//   const fadeProperties = {
//     duration: 5000,
//     transitionDuration: 500,
//     infinite: true,
//     indicators: true,
//   };
//   return (
//     <div className="slide-container">
//       <Fade {...fadeProperties}>
//         {fadeImages.map((item, i) => (
//           <div key={i} className="each-fade">
//             <div className="image-container ">
//               <img src={item.image.src} alt={item.image.alt} />
//               <div className="carousel-info">
//                 <h2 className="carousel-heading">{item.heading}</h2>
//                 <p className="carousel-text">{item.text}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Fade>
//     </div>
//   );
// };
// export default Carousel;

import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const MyCarousel = ({ banner }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === banner.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? banner.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = banner.map((item, i) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={i}
        className="image-container"
      >
        <img
          src={item.image.src}
          alt={item.image.alt}
          className="w-100 banner80"
        />
        <CarouselCaption
          captionText={item.heading}
          captionHeader={item.text}
          className="carousel-info"
        />
        <div className="d-block d-sm-none carousel-info">
          <p>{item.heading}</p>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={banner}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default MyCarousel;
