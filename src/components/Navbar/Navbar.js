/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-md navbar-light bg-dark-blue ">
        <button
          type="button"
          className="navbar-toggler bg-warning  ml-auto "
          data-toggle="collapse"
          data-target="#nav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between "
          id="nav"
        >
          <ul className="navbar-nav  ">
            <li className="nav-item ">
              <a
                className="nav-link text-light text-uppercase font-weight-bold px-3"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light text-uppercase font-weight-bold px-3"
                href="#"
              >
                About us
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-light text-uppercase font-weight-bold px-3"
                href="#"
              >
                Shop
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link text-light text-uppercase font-weight-bold px-2 "
                href="#"
                data-toggle="dropdown"
              >
                Project
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Project 1
                </a>
                <a className="dropdown-item" href="#">
                  Project 2
                </a>
                <a className="dropdown-item" href="#">
                  Project 3
                </a>
                <a className="dropdown-item" href="#">
                  Project 4
                </a>
              </div>
            </li>
            <li className="nav-item dropdown" data-target="#drop">
              <a
                className="nav-link text-light text-uppercase font-weight-bold px-2 "
                data-toggle="dropdown"
                href="#"
              >
                Services
              </a>
              <div className="dropdown-menu" id="drop">
                <a className="dropdown-item" href="#">
                  Service 1
                </a>
                <a className="dropdown-item" href="#">
                  Service 2
                </a>
                <a className="dropdown-item" href="#">
                  Service 3
                </a>
                <a className="dropdown-item" href="#">
                  Service 4
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light text-uppercase font-weight-bold px-3"
                href="#"
              >
                News
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light text-uppercase font-weight-bold px-3"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
          <form className="form-inline ">
            <div className="input-group">
              <div className="input-group-append">
                <button type="button" className="btn">
                  <i className="fas fa-search text-light mr-4" />
                  <i className="fas fa-shopping-cart text-light"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
