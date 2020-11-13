import React from "react";
import "./cardInfo.css";

function CardInfo(props) {
  return (
    <div className="card">
      <p>
        {props.name}
        <br />
        {props.descriptions}
      </p>
    </div>
  );
}

export default CardInfo;
