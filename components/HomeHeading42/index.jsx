import React from "react";
import Component9512 from "../Component9512";
import "./HomeHeading42.css";

function HomeHeading42(props) {
  const { component9512Props } = props;

  return (
    <div className="home-heading">
      <div className="overlap-group3-1">
        <Component9512 overlapGroup2={component9512Props.overlapGroup2} group1Props={component9512Props.group1Props} />
        <h1 className="title">
          <span className="arial-regular-normal-white-25px">CO</span>
          <span className="arial-regular-normal-white-25px">2 </span>
          <span className="arial-regular-normal-white-25px">-Boo</span>
        </h1>
      </div>
    </div>
  );
}

export default HomeHeading42;
