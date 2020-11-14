import React from "react";
import "./cardInfo.css";

function CardInfo(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <p>{props.descriptions}</p>
      <h3>{props.language}</h3>
    </div>
  );
}

export default CardInfo;
