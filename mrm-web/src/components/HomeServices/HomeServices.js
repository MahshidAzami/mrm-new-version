import React from "react";
import { Link } from "react-router-dom";

const HomeServices = ({ homeServices }) => (
  <div className="container">
    <div className="single-left serv-bottom">
      <h5 className="main-title">{homeServices.title}</h5>
      <div className="container row">
        <div className="p-0 col-md-7 pr-md-3">
          <img
            src={homeServices.left.image.src}
            className="img-responsive"
            alt={homeServices.left.image.alt}
          />
          <div className="blog-text mr-3">
            <h5>{homeServices.left.heading}</h5>
            <p>{homeServices.left.subHeading1}</p>
            <p>{homeServices.left.subHeading2}</p>
          </div>
        </div>
        <div className="all-comments col-md-5">
          <div>
            {homeServices.right.map((service) => (
              <div className="w3l-media">
                <h5 className="">{service.heading}</h5>
                <div className="media-body">
                  <p>{service.text}</p>
                  <Link to={service.link}>View More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="clearfix" />
    </div>
  </div>
);

export default HomeServices;
