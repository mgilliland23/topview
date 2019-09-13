import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card mx-auto" key={props.id}>
      <img alt={props.name} src={props.image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">${props.price}</p>
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
