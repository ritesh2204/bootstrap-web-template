import React, { Fragment } from "react";
import {
  Banner,
  CallToAction,
  LatestNews,
  Projects,
  Services,
  Testimonial,
} from "../components";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Services />
      <Projects />
      <Testimonial />
      <CallToAction />
      <LatestNews />
    </Fragment>
  );
};

export default Home;
