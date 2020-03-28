import React from "react";
import { NavLink } from "react-router-dom";

const DropDown = props => {
  const { subMenu, link, name } = props.item;
  const navItems = subMenu.map((item, i) => {
    return (
      <NavLink key={i} to={link + item.link} className="dropdown-item col-3">
        {item.name}
      </NavLink>
    );
  });
  return (
    <li className="nav-item dropdown">
      <NavLink className="nav-link dropdown-toggle" id="dropdown01" to={link}>
        {name}
      </NavLink>

      <div
        className="dropdown-menu dropdown-content m-0 p-0"
        onClick={props.clickHandler}
      >
        <div className="dropdown__column">{navItems}</div>
      </div>
    </li>
  );
};

export default DropDown;
