import React from "react";
import "./Group2732.css";

function Group2732(props) {
  const { overlapGroup9, grainFood, className } = props;

  return (
    <div className={`group-2732 ${className || ""}`}>
      <div className="overlap-group-6" style={{ backgroundImage: `url(${overlapGroup9})` }}>
        <div className="grain-food-1 quicksand-bold-romance-18px">{grainFood}</div>
      </div>
    </div>
  );
}

export default Group2732;
