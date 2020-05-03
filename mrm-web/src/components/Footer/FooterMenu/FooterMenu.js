import React from "react";
import { MDBCol } from "mdbreact";
import { Link } from "react-router-dom";
const FooterMenu = ({ data }) => (
  <MDBCol md="3" sm="6" className=" text-left">
    <h5 className="title">{data.name}</h5>
    <ul className="pl-2">
      {data.items.map((item, i) => (
        <li key={i} className="list-unstyled">
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  </MDBCol>
);

export default FooterMenu;
