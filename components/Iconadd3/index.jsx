import React from "react";
import "./Iconadd3.css";

function Iconadd3(props) {
  const { src } = props;

  return <div className="iconadd-3" style={{ backgroundImage: `url(${src})` }}></div>;
}

export default Iconadd3;
