import React from "react";
import Group2734 from "../Group2734";
import Group2726 from "../Group2726";
import Group2727 from "../Group2727";
import Group2729 from "../Group2729";
import Group2730 from "../Group2730";
import Group2731 from "../Group2731";
import Group2732 from "../Group2732";
import "./ScrollGroup3.css";

function ScrollGroup3(props) {
  const { group2734Props, group2730Props2, group2732Props2, group27322Props, group27323Props } = props;

  return (
    <div className="scroll-group-3">
      <Group2734 component9764Props={group2734Props.component9764Props} />
      <Group2726 />
      <Group2727 />
      <div className="overlap-group3-8">
        <div className="group-3408"></div>
        <div className="processed-vegetable quicksand-bold-romance-18px">Processed vegetable</div>
      </div>
      <Group2729 />
      <Group2730 group2730={group2730Props2.group2730} stapleFood={group2730Props2.stapleFood} />
      <Group2731 />
      <Group2732 overlapGroup9={group2732Props2.overlapGroup9} grainFood={group2732Props2.grainFood} />
      <Group2732
        overlapGroup9={group27322Props.overlapGroup9}
        grainFood={group27322Props.grainFood}
        className={group27322Props.className}
      />
      <Group2732
        overlapGroup9={group27323Props.overlapGroup9}
        grainFood={group27323Props.grainFood}
        className={group27323Props.className}
      />
    </div>
  );
}

export default ScrollGroup3;
