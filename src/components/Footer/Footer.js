/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const Footer = () => {
  return (
    <footer className=" footer-large footer-bg-dark-blue-color text-lavender py-5 px-4 f-14">
      <div className="container-fluid">
        <div className="row align-items-top text-center">
          <div className="col-12 col-sm-6 col-md-4 col-lg-5 text-sm-left">
            <img
              src="/footerLogo.png"
              className="img-fluid"
              alt="footer_logo"
            ></img>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed{" "}
              <br />
              do eiusmod tempor incididunt ut labore
            </p>
            <ul>
              <li>
                <i className="fa fa-map-marker text-warning mr-2"></i> 40 Baria
                Sreet, NewYork City, US
              </li>

              <li>
                <i className="fa fa-phone text-warning mr-2"></i> 001-1234-88888
              </li>
              <li>
                <i className="fa fa-envelope text-warning mr-2"></i>{" "}
                info.deercreative@gmail.com
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 col-md-4 col-lg-2 mt-5 mt-sm-0 text-sm-left">
            <h5>
              <strong className="text-white">Our Links</strong>
            </h5>
            <ul className="one-half mt-4">
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">About Us</a>
              </li>

              <li>
                <a href="#">Services</a>
              </li>

              <li>
                <a href="#">Pages</a>
              </li>

              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-sm-3 col-lg-3 text-md-left mt-5 mt-sm-0">
            <h5>
              <strong className="text-white">Recent News</strong>
            </h5>
            <div className="mt-4 f-20 font-weight-bold">
              <p>Colombia Gets a Business Makeover</p>
              <p>Colombia Gets a Business Makeover</p>
            </div>
          </div>
          <div className="col-6 col-lg-2 text-lg-left mt-4 mt-sm-0 d-sm-none d-md-block d-none d-sm-block">
            <h5>
              <strong className="text-white">Follow Us</strong>
            </h5>
            <p className="lead">
              <a href="#" className="mx-2">
                <i className="fab fa-twitter" aria-hidden="true" />
              </a>
              <a href="#" className="mx-2">
                <i className="fab fa-facebook" aria-hidden="true" />
              </a>
              <a href="#" className="mx-2">
                <i className="fab fa-instagram" aria-hidden="true" />
              </a>
              <a href="#" className="mx-2">
                <i className="fab fa-pinterest" aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">© 2020 all right reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
