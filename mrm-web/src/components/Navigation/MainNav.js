import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MainNav.css";
import DropDown from "./DropDown/DropDown";

class MainNavigation extends Component {
  offcanvassHandler = () => {
    document.getElementById("navbarsExampleDefault").classList.toggle("open");
  };

  render() {
    const { navbarItems } = this.props;
    return (
      <nav className="navbar navbar-expand-lg bg-black fixed-top" id="navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="/logo.png"
              alt="mrm home maintenance"
              className="brand"
              id="logo"
            />
          </Link>

          <button
            id="offcanvas"
            className="navbar-toggler navbar-dark"
            type="button"
            data-toggle="offcanvas"
            onClick={this.offcanvassHandler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav mr-auto container">
              {navbarItems.map((item, i) =>
                item.subMenu ? (
                  <DropDown
                    item={item}
                    key={i}
                    name={item.name}
                    clickHandler={this.offcanvassHandler}
                  />
                ) : (
                  <li
                    key={i}
                    className="nav-item mx-5"
                    onClick={this.offcanvassHandler}
                  >
                    <Link className="nav-link" to={item.link}>
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default MainNavigation;
