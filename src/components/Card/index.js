import React from "react";
import "./style.css";

const Card = props => (
  <div className="card" onClick={ () => props.clickHandler(props.id) }>
    <div className="picture-frame">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card;