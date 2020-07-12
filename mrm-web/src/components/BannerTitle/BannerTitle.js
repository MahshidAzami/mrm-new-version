import React from "react";
import "./BannerTitle.css";
const BannerTitle = ({ hero }) => {
  const { banner, heading, subHeading } = hero;
  return (
    <div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={banner.src} alt={banner.alt} />
        </div>
      </div>
      <div className="container">
        <div className="banner-text my-5">
          <h3>{heading}</h3>
          <p>{subHeading}</p>
        </div>
      </div>
    </div>
    // <div class="banner-bg2">
    //   <div class="banner-info bg3 inner">
    //     <h3>{heading}</h3>
    //     <p>{subHeading}</p>
    //   </div>
    // </div>
  );
};
export default BannerTitle;
