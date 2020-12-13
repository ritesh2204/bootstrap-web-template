/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Card = ({ data }) => {
  return (
    <div className="col-lg-4 col-md-4 p-2 p-sm-2">
      <div className="card " style={{ lineHeight: 2.5 }}>
        <img src={data.imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <span className="text-gunpowder">{data.category}</span>
          <h4 className="card-text title text-dark-blue font-weight-bold">
            {data.title}
          </h4>
          <span
            className="text-warning font-weight-bold"
            style={{ letterSpacing: 1, fontSize: 12 }}
          >
            {data.date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
