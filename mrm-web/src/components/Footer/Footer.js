import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";
import FooterMenu from "./FooterMenu/FooterMenu";
import ContactInfo from "./ContactInfo/ContactInfo";
import SocialMedia from "./SocialMedia/SocialMedia";

const Footer = ({ footer }) => {
  const { col1, col2, col3, colContact, socialMedia } = footer;
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="container text-center text-md-left">
        <MDBRow>
          <FooterMenu data={col1} />
          <FooterMenu data={col2} />
          <FooterMenu data={col3} />
          <MDBCol md="3" sm="6" className="text-left">
            <ContactInfo data={colContact} />
          </MDBCol>
        </MDBRow>
        <hr className="border-secondary" />
      </MDBContainer>
      <SocialMedia data={socialMedia} />
    </MDBFooter>
  );
};

export default Footer;
