import React from "react";
import "./Component10627.css";

function Component10627(props) {
  const { overlapGroup16, group2756, ico, setting, profile } = props;

  return (
    <div className="component-106-27 animate-enter">
      <div className="overlap-group16" style={{ backgroundImage: `url(${overlapGroup16})` }}>
        <div className="overlap-group3-9">
          <div className="group-2756" style={{ backgroundImage: `url(${group2756})` }}></div>
        </div>
        <img className="ico" src={ico} />
        <img className="setting" src={setting} />
        <a onClick={window.event.stopPropagation()}>
          <div className="profile" style={{ backgroundImage: `url(${profile})` }}></div>
        </a>
      </div>
    </div>
  );
}

export default Component10627;
