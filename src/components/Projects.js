/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import projectImages from "../projectImages";

const Projects = () => {
  return (
    <Fragment>
      <div className="container-fluid bg-Porcelain ">
        <div className="row " style={myStyle.spacing}>
          <div className="col-lg-6">
            <h1 className="title font-weight-bold text-dark-blue">
              Our Projects
            </h1>
            <div className="sub-title text-gunpowder">
              We are here to Acelerate your business and help you find the way.
            </div>
          </div>
          <div className="col-lg-6 text-right mt-sm-4 mt-3">
            <a
              href="#"
              className="btn btn-buttercup py-2 px-4 text-uppercase rounded-0 font-weight-bold  mt-xs-2"
            >
              Show All Projects
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex project-img bg-Porcelain pb-5 ">
        {projectImages.map((projectImg) => (
          <img
            className="img img-fluid"
            src={projectImg.imgSrc}
            key={projectImg.id}
          />
        ))}
      </div>
      {/* // owl carousel */}
    </Fragment>
  );
};

const myStyle = {
  spacing: {
    padding: "63px 20px",
  },
};

export default Projects;
