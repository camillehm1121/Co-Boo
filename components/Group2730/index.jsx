import React from "react";
import "./Group2730.css";

function Group2730(props) {
  const { group2730, stapleFood } = props;

  return (
    <div className="group-2730" style={{ backgroundImage: `url(${group2730})` }}>
      <div className="staple-food-1 quicksand-bold-romance-18px">{stapleFood}</div>
    </div>
  );
}

export default Group2730;
