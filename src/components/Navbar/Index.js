/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Fragment } from "react";
import FirstHeader from "./FirstHeader";
import LogoHeader from "./LogoHeader";
import Navbar from "./Navbar";

const NavbarIndex = () => {
  return (
    // first header
    <Fragment>
      <div className="container-fluid">
        <FirstHeader />
        <LogoHeader />
      </div>
      <Navbar />
    </Fragment>
  );
};

export default NavbarIndex;
