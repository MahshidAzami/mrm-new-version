import React from "react";
import BannerTitle from "../components/BannerTitle/BannerTitle";
import ServicesPanel from "../components/ServicePanel/ServicePanel";
import HomeServices from "../components/HomeServices/HomeServices";

const ServicesPage = ({ data }) => {
  return (
    <React.Fragment>
      <BannerTitle hero={data.hero} />
      {/* hardcoded breadcomb */}
      {/* <div className="breadcrumbs-w3l">
        <div className="container">
          <span className="breadcrumbs">
            <a href="index.html">Home</a> |<span> Services</span>
          </span>
        </div>
      </div> */}
      {/* services section  */}
      <div className="services w3ls-section">
        <div className="container">
          <h1 className="main-title m-4">{data.heading}</h1>
          <div className="services-main">
            {/* <div className="col-md-4 serv-grid1"> */}
            <h4 className="sub1">{data.subHeading}</h4>
            {/* </div> */}
            {/* <ServicesPanel category={data.category} /> */}
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
      <hr className="featurette-divider" />
      <HomeServices homeServices={data.homeServices} />
    </React.Fragment>
  );
};

export default ServicesPage;
