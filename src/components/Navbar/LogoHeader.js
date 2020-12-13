import React from "react";

const LogoHeader = () => {
  return (
    <div>
      <div className="row p-4">
        <div className="col-lg-4 ">
          <img
            className="img-fluid responsive-logo "
            src="/consuloan-logo.png"
            alt="logo"
          />
        </div>
        <div className="col-lg-8">
          <div className="d-flex flex-wrap justify-content-between align-items-center ">
            <div className="widget-info d-none d-md-block">
              <i className="fa fa-map text-warning "></i>
            </div>
            <div>
              <h6 className="text-dark-blue font-weight-bolder">
                40 Baria Sreet 133/2
              </h6>

              <p className="text-secondary">NewYork City, US</p>
            </div>

            <div className="widget-info d-none d-md-block">
              <i className="fas fa-phone-volume text-warning"></i>
            </div>

            <div className="clearfix">
              <h6 className="text-dark-blue font-weight-bold">
                001-1234-88888
              </h6>

              <p className="text-secondaryb text-wrap">
                info.deercreative@gmail.com
              </p>
            </div>

            <div className="d-none d-md-block">
              <button
                type="button"
                className="btn btn-warning text-dark-blue text-uppercase px-4 py-2 rounded-0"
                style={myStyle.buttonFontWeight}
              >
                Get a quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const myStyle = {
  addressFontWeight: {
    fontWeight: 700,
  },
  buttonFontWeight: {
    fontWeight: 600,
  },
  rotate: {
    transform: "rotate(45deg)",
  },
};

export default LogoHeader;
