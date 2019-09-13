import React from "react";

function CardWrapper(props) {
  return <div className="col-xl-3 col-lg-4 col-md-6">{props.children}</div>;
}

export default CardWrapper;
