import React from "react";
import Iconadd4 from "../Iconadd4";
import Iconadd2 from "../Iconadd2";
import Iconadd3 from "../Iconadd3";
import "./Group2758.css";

function Group2758(props) {
  const { iconadd4Props2, iconadd3Props } = props;

  return (
    <div className="group-2758">
      <div className="overlap-group6-3">
        <img
          className="rectangle-236"
          src="https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/rectangle-2366-1@1x.png"
        />
        <div className="flex-col-2">
          <div className="trouble-zone quicksand-bold-dove-gray-14px">Breakfast</div>
          <div className="x5-min-6-exercises quicksand-bold-mountain-mist-11px">42g</div>
        </div>
        <Iconadd4 />
      </div>
      <div className="overlap-group7-3">
        <img
          className="rectangle-2368"
          src="https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/rectangle-2368-1@1x.png"
        />
        <div className="flex-col-3">
          <div className="trouble-zone-1 quicksand-bold-dove-gray-14px">Lunch</div>
          <div className="x5-min-6-exercises-1 quicksand-bold-mountain-mist-11px">54g</div>
        </div>
        <Iconadd2 />
      </div>
      <div className="overlap-group4-3">
        <img
          className="rectangle-236"
          src="https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/rectangle-2369-1@1x.png"
        />
        <div className="flex-col-4">
          <div className="trouble-zone-2 quicksand-bold-dove-gray-14px">Dinner</div>
          <div className="x5-min-6-exercises-2 quicksand-bold-mountain-mist-11px">86g</div>
        </div>
        <Iconadd4 className={iconadd4Props2.className} />
      </div>
      <div className="overlap-group5-3">
        <img
          className="rectangle-2370"
          src="https://anima-uploads.s3.amazonaws.com/projects/611fdac8a506a1017c382f98/releases/611fdd1afc0af3fcbb2108e6/img/rectangle-2370-1@1x.png"
        />
        <div className="flex-col-5">
          <div className="trouble-zone-3 quicksand-bold-dove-gray-14px">Other</div>
          <div className="x5-min-6-exercises-3 quicksand-bold-mountain-mist-11px">425g</div>
        </div>
        <Iconadd3 src={iconadd3Props.src} />
      </div>
    </div>
  );
}

export default Group2758;
