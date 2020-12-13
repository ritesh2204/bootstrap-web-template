import React from "react";
import Footer from "../../components/Footer/Footer";
import NavbarIndex from "../../components/Navbar/Index";

const HomeLayouts = ({ children }) => {
  return (
    <React.Fragment>
      <NavbarIndex />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default HomeLayouts;
