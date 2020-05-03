import React from "react";
import { Markup } from "interweave";

const Info = ({ info }) => {
  const {
    heading,
    info: { subHeading, list },
    image,
  } = info;
  return (
    <div className="row featurette justify-content-around">
      <div className="col-lg-6">
        <div className="lead my-5">
          <h4>{subHeading}</h4>
          <ul>
            {list.map((item, i) => (
              <li>
                <h5>{item.heading}</h5>
                <p>{item.text}</p>
                <p>{item.icon}</p>
              </li>
            ))}
          </ul>
          {/* <Markup content={props.details.info} /> */}
        </div>
      </div>
      <div className="col-lg-5">
        <h3>{heading}</h3>
        <img className="w-100 mt-4" src={image.src} alt={image.alt} />
      </div>
    </div>
  );
};
export default Info;
