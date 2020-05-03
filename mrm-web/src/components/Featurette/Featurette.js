import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import "./Featurette.css";
import Info from "./Info/Info";
import { Link } from "react-router-dom";

const Featurette = ({ services, info, about }) => (
  <div className="container marketing mt-5">
    <Info info={info} />
    <hr className="featurette-divider" />
    <div className="my-5">
      <h3>Our Services</h3>
    </div>
    <div className="d-flex flex-wrap">
      {services.map((service, i) => (
        <div key={i} className="col-6 col-xl-4  px-0 mb-4 d-flex">
          <div className="card mx-2">
            <Link to={`/services${service.link}`}>
              <img
                className="card-img-top height-inherit"
                src={
                  service.mainPhotos
                    ? service.mainPhotos
                    : "/images/noImage.jpg"
                }
                alt={service.name}
              />
              <div className="card-body text-center">
                <h5 className="d-none card-title d-sm-inline">
                  {service.name}
                </h5>
                <p className="card-title d-sm-none">{service.name}</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
    <hr className="featurette-divider" />
    <AboutUs about={about} />
    <hr className="featurette-divider" />
    {/* <ProjVideos
      videos={props.videos}
      videosHeading={props.details.videoHeading}
    /> */}
  </div>
);

export default Featurette;
