/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import cardData from "../CardData";
import Card from "./Card";

const LatestNews = () => {
  return (
    <section>
      <div style={myStyle.sectionSpacing}>
        <div className="row">
          <div className="col-lg-12 pb-5">
            <h1 className="title text-dark-blue text-center font-weight-bold">
              Latest News
            </h1>
          </div>

          {cardData.map((data) => (
            <Card data={data} key={data.id}></Card>
          ))}
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

export default LatestNews;
