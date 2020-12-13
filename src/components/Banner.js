/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Banner = () => {
  return (
    <section>
      <div
        className="row banner-img-bg justify-content-start align-items-center  m-0"
        style={{ height: "70vh" }}
      >
        <div className="col-sm-12 col-md-12 ">
          <div className="ml-4">
            <span className="text-mirage text-uppercase font-weight-bold">
              Keeping Your Web precence
            </span>
            <h2 className="  text-dark-blue" style={myStyle.title}>
              Elegant & Fantastic
            </h2>
            <p className="text-mirage text-dark-blue">
              With over 20 years of experience
            </p>
            <a
              href="#"
              className="btn btn-buttercup py-2 px-4 text-uppercase rounded-0"
            >
              Our Company
            </a>{" "}
            <a
              href="#"
              className="btn btn-downriver text-light  py-2 px-4 text-uppercase rounded-0"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const myStyle = {
  title: {
    fontSize: "clamp(1rem, 10vw, 3.7rem)",
    fontWeight: 700,
  },
};

export default Banner;
