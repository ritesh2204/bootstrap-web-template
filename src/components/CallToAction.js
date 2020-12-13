import React from "react";
import CtaForm from "./CtaForm";

const CallToAction = () => {
  return (
    <section className=" ctabg">
      <div style={myStyle.sectionSpacing}>
        <div className="row text-center ">
          <div className="col-lg-12">
            <h1 className="title text-light font-weight-bold mt-3">
              Request a call back
            </h1>
            <p className="text-light mt-2" style={myStyle.spacing}>
              Would you like to speak to one of our financial advisers? Just
              submit your contact details and we’ll be in touch shortly. You can
              also email us if you prefer that type of communication.
            </p>
            <div className="mt-4">
              {/* calltoaction form */}
              <CtaForm />
              {/* calltoaction form */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const myStyle = {
  sectionSpacing: {
    padding: "4rem 2.8rem ",
  },
  spacing: {
    width: "clamp(70%, 2.5vw, 100%)",
    margin: "0 auto",
    lineHeight: 1.8,
  },
};

export default CallToAction;
