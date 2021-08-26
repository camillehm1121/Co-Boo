import React from "react";
import Component941 from "../Component941";
import Group1 from "../Group1";
import "./Component9512.css";

function Component9512(props) {
  const { overlapGroup2, group1Props } = props;

  return (
    <div className="component-95-12">
      <div className="overlap-group4-1" style={{ backgroundImage: `url(${overlapGroup2})` }}>
        <Component941 />
        <Group1 networkProps={group1Props.networkProps} />
      </div>
    </div>
  );
}

export default Component9512;
