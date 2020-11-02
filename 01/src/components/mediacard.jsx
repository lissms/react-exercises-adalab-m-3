import React, { Component } from "react";
import "./mediacard.css";

class Card extends Component {
  render() {
    return (
      <div className="component01">
        <img src="" title="title" className="img-class" />
        <h1 className="h1">Alex Guerrero</h1>
        <p className="date">Lunes 26 de junio de 2017</p>
        <p className="test">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eaque obcaecati,Corporis libero ut perferendis
          optio officiis quasi exercitationem!...
        </p>
        <h3>37</h3>
        <span>
          <i class="fas fa-heart"></i>
        </span>
      </div>
    );
  }
}

export default Card;
