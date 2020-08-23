import React from "react";
import { Markup } from "interweave";

const Info = ({ info }) => {
  const {
    heading,
    info: { subHeading, list },
    image,
  } = info;
  return (
    <div className="pt-5">
      <div className="container">
        <div className="row featurette justify-content-around">
          <div className="col-lg-5">
            <h3>{heading}</h3>
            <img className="w-100 mt-4" src={image.src} alt={image.alt} />
          </div>
          <div className="col-lg-7 pt-lg-5 mt-3">
            <div className="lead">
              <h4>{subHeading}</h4>
              <div>
                {list.map((item, i) => (
                  <div key={i} className="row">
                    <div className="col-1">
                      <span className={item.icon} />
                    </div>
                    <div className="col-10">
                      <h5>{item.heading}</h5>
                      <p className="small">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
