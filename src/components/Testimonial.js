import React from "react";

const Testimonial = () => {
  return (
    <section>
      <div className="container ">
        <div className="row text-center  p-5">
          <div className="col-lg-12">
            <i
              className="fas fa-quote-left text-warning"
              style={{ fontSize: "2rem" }}
            ></i>

            <h1 className="title text-dark-blue font-weight-bold mt-3">
              2000+ Happy Clients
            </h1>
            <p className="text-shuttlegray mt-4">
              "We love the approachable format, and the fact that they chose to
              feature customers that users can really relate to.Each client
              story module links to the client's website, Facebook page, and app
              in both the Android and Apple app stores and sets people up for
              success."
            </p>
            <div className="mt-4  ">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className="rounded-circle shadow-sm"
                alt="client_1"
                style={myStyle.clientImgSize}
              />
              {/* <img src="" className="rounded" alt="client_2"/>
            <img src="" className="rounded" alt="client_3"/> */}
            </div>
            <div className="mt-4">
              <span className="subtitle font-weight-bold text-dark-blue ">
                Alex Roy
              </span>
              <div>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const myStyle = {
  clientImgSize: {
    width: "75px",
    height: "75px",
  },
};

export default Testimonial;
