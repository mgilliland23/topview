import React from "react";
import "./style.css";

function CardWrapper(props) {
  return (
    <div className="container">
      <div className="row">{props.children}</div>
    </div>
  );
}

export default CardWrapper;
