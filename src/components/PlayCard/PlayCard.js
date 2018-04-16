import React from "react";
import "./PlayCard.css";

const PlayCard = props => (
  <div className="card">
    <div className="img-container">
      <a onClick={() => props.clickSnoo(props.name)}
        className={props.score === 0}>
        <img alt={props.name} src={props.image} />
      </a>
    </div>
  </div>
);

export default PlayCard;
