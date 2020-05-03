import React from "react";

const ContactInfo = ({ data }) => (
  <div>
    <h5 className="title">{data.name}</h5>
    <ul className="pl-2">
      <li className="list-unstyled">
        <div className="row">
          <div className="col-1">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <a className="col-10" href={data.items[0].link}>
            {data.items[0].name}
          </a>
        </div>
      </li>
      <li className="list-unstyled">
        <div className="row">
          <div className="col-1">
            <i className="fas fa-phone"></i>
          </div>
          <a className="col-10" href={data.items[1].link}>
            {data.items[1].name}
          </a>
        </div>
      </li>
      <li className="list-unstyled">
        <div className="row">
          <div className="col-1">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <a className="col-10" href={data.items[2].link}>
            {data.items[2].name}
          </a>
        </div>
      </li>
      <li className="list-unstyled">
        <div className="row">
          <div className="col-1">
            <i className="fas fa-at"></i>
          </div>
          <a className="col-10" href={data.items[3].link}>
            {data.items[3].name}
          </a>
        </div>
      </li>
    </ul>
  </div>
);

export default ContactInfo;
