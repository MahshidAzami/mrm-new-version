import React from "react";
import { MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";

const SocialMedia = ({ data }) => {
  const { companyName, youtube, instagram, google } = data;
  return (
    <div className="footer-copyright text-center py-3">
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <Link to="/">{companyName}</Link>
      </MDBContainer>
      <div className="container d-lg-flex justify-content-end">
        <nav className="navbar navbar-light col-lg-3">
          <ul className="navbar-nav margin-0-auto flex-row ">
            <li className="nav-item mx-3">
              <a href={youtube}>
                <img
                  src="/images/youtube.png"
                  alt="social media"
                  className="social-icon"
                />
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href={instagram}>
                <img
                  src="/images/insta.png"
                  alt="social media"
                  className="social-icon"
                />
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href={google}>
                <img
                  src="/images/google.png"
                  alt="social media"
                  className="social-icon"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SocialMedia;
