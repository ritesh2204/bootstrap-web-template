import React, { Fragment } from "react";

const ServiceListItems = ({ services }) => {
  return (
    <Fragment>
      {services.map((service) => (
        <div className="col-lg-4 " key={service.id}>
          <div className="service-box">
            <h5 className="title text-dark-blue ">{service.title}</h5>
            <p className="text-shuttlegray">{service.description}</p>
          </div>
          <i
            className={`${service.faIcon} float-right s-fa-size text-warning s-m`}
          ></i>
        </div>
      ))}
    </Fragment>
  );
};

export default ServiceListItems;
