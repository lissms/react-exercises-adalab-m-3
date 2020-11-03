import React, { Component } from "react";
import "./cardmedia.scss";

class Card extends Component {
  render() {
    return (
      <div className="component01">
        <header>
          <img src="https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg" title="title" className="img-class" />
          <div className="text-container">
            <h1 className="h1">Alex Guerrero</h1>
            <p className="date">Lunes 26 de junio de 2017</p>
          </div>
        </header>
        <div className="description">
          <p className="test">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eaque obcaecati,Corporis libero ut
            perferendis optio officiis quasi exercitationem!...
          </p>
          <h3>37</h3>
          <span>
            <i class="fas fa-heart"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default Card;
