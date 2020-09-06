import React from "react";
import "./callNow.css";
const CallNow = () => (
  <div>
    <div className="phone-call">
      <a href="tel:+447766314200">
        <img
          src="/images/call.png"
          width={26}
          alt="Call Now"
          title="Call Now"
        />
      </a>
    </div>
    <div className="call-tag">Call Us Now</div>
  </div>
);

export default CallNow;
