import React from "react";
import ScrollGroup3 from "../ScrollGroup3";
import "./ScrollGroup2.css";

function ScrollGroup2(props) {
  const { group2734Props } = props;

  return (
    <div className="scroll-group-2">
      <ScrollGroup3
        group2734Props={group2734Props.group2734Props}
        group2730Props2={group2734Props.group2730Props2}
        group2732Props2={group2734Props.group2732Props2}
        group27322Props={group2734Props.group27322Props}
        group27323Props={group2734Props.group27323Props}
      />
    </div>
  );
}

export default ScrollGroup2;
