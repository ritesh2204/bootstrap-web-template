import React from "react";
import ServiceListItems from "./ServiceListItems";
import services from "../services";

const Services = () => {
  return (
    <div className="container-fluid border">
      <div className="row" style={myStyle.padding}>
        <div className="col-lg-5 ">
          <h1 className="title  font-weight-bold text-dark-blue">
            Our Industry
            <div className="border-yellow"></div>
          </h1>
        </div>
        <div className="col-lg-7">
          <p className="text-gunpowder" style={{ fontWeight: 500 }}>
            We help organisations work smarter and grow faster. Reach out to us
            to build effective organisations, reduce costs, manage risk and
            regulation and leverage talent.
          </p>
        </div>
        {/* service list item  */}
      </div>

      <div className="row pl-4 pr-4 pb-5">
        <ServiceListItems services={services} />
      </div>
    </div>
  );
};

const myStyle = {
  padding: {
    paddingTop: "clamp(2rem,10vw, 4.5rem )",
    paddingLeft: "1.5rem",
    paddingRight: "1rem",
    paddingBottom: "3rem",
  },
};

export default Services;
