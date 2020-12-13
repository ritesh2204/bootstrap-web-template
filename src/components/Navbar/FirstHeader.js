import React from "react";

const FirstHeader = () => {
  return (
    <div>
      <div className="row bg-light-grey p-10 f-14">
        <div className="col-lg-6 col-sm-6">
          <div className=" text-dark">
            Welcome to Financial Services Consultant!
          </div>
        </div>
        <div className="col-lg-6 col-sm-6">
          <div className="d-flex flex-row-reverse">
            <div className="ml-5 d-flex ">
              <div>
                <i className="fab fa-facebook-f mr-2"></i>
              </div>
              <div>
                <i className="fab fa-twitter mr-2"></i>
              </div>
              <div>
                <i className="fab fa-linkedin-in mr-2"></i>
              </div>
            </div>
            |
            <div className=" mr-5">
              <ul>
                <li className="current">English</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* // first header end */}
    </div>
  );
};

export default FirstHeader;
