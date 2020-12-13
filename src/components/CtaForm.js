import React from "react";

const CtaForm = () => {
  return (
    <form>
      <div className="row">
        <div className="col-lg-3 col-sm-12 p-2">
          <input
            type="text"
            name="help"
            className="form-control rounded-0 "
            placeholder="How can we help *"
          />
        </div>
        <div className="col-lg-3 col-sm-12 p-2">
          <input
            type="text"
            name="first_name"
            className="form-control rounded-0 "
            placeholder="Your Name"
          />
        </div>
        <div className="col col-lg-3 col-sm-12 p-2">
          <input
            type="text"
            name="mobile"
            className="form-control rounded-0 "
            placeholder="Phone Number"
          />
        </div>
        <div className="col-lg-3 col-sm-12 p-2">
          <button
            type="button"
            className="btn btn-buttercup rounded-0 btn-lg px-5 "
            style={{ width: "100%" }}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default CtaForm;
