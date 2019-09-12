import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card" key={props.id}>
      <img alt={props.name} src={props.image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        {/* <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p> */}
        <button
          className="btn btn-custom"
          onClick={() => props.handleClick(props.name)}
        >
          RENT NOW
        </button>
      </div>
    </div>
  );
}

export default Card;
