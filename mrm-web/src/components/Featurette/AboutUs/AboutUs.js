import React from "react";
import { Markup } from "interweave";
import { Link } from "react-router-dom";

const AboutUs = ({ about }) => (
  <div className="row featurette justify-content-around">
    <div className="col-lg-6 order-lg-2">
      <div className="lead my-3">
        <h4>{about.heading}</h4>
        <p>{about.subHeading}</p>
        <Link className="small" to={about.link}>
          view all services >
        </Link>
      </div>
    </div>
    <div className="col-lg-5 order-lg-1">
      <img className="w-100 mt-4" src={about.image.src} alt={about.image.alt} />
    </div>
  </div>
);
export default AboutUs;
