import React from "react";
import { NavLink } from "react-router-dom";

const DropDown = ({ item, clickHandler }) => {
  const { subMenu, link, name } = item;
  const navItems = subMenu.map((item, i) => {
    return (
      // <div className="row">
      <NavLink key={i} to={link + item.link} className="dropdown-item">
        {item.name}
      </NavLink>
      // </div>
    );
  });
  return (
    <li className="nav-item mx-5 dropdown">
      <NavLink className="nav-link dropdown-toggle" id="dropdown01" to={link}>
        {name}
      </NavLink>

      <div
        className="dropdown-menu dropdown-content m-0 p-0"
        onClick={clickHandler}
      >
        <div className="d-flex flex-row">
          <div className="dropdown__column">{navItems}</div>
        </div>
      </div>
    </li>
  );
};

export default DropDown;
