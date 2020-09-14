import React from "react";
import "./Container.css";

function Container(props) {
  const { verticalAlign, alignStretch } = props;
  const classNames = `container ${
    verticalAlign ? "container--vertical-align" : ""
  }
    ${alignStretch ? "container--align-stretch" : ""}
 `;
  return <div className={classNames}>{props.children} </div>;
}

export default Container;
