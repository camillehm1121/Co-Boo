import React from "react";
import Group3131 from "../Group3131";
import Group3133 from "../Group3133";
import Group3134 from "../Group3134";
import "./Group3141.css";

function Group3141(props) {
  const { group3131Props22 } = props;

  return (
    <div className="group-3141">
      <div className="overlap-group4-2">
        <div className="g-co2 opensans-normal-pink-flare-10px-2">
          <span className="opensans-normal-pink-flare-10px">gCO</span>
          <span className="opensans-normal-pink-flare-10px">2</span>
        </div>
        <div className="mask-group-8">
          <div className="overlap-group3-3">
            <Group3131 />
            <Group3131 className={group3131Props22.className} />
            <Group3133 />
            <Group3134 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group3141;
