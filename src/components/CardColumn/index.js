import React from "react";

function CardWrapper(props) {
  return <div className="col-md-3">{props.children}</div>;
}

export default CardWrapper;
