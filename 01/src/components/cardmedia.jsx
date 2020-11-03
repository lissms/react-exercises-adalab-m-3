import React, { Component } from "react";
import "./cardmedia.scss";

class MediaCard extends Component {
  render() {
    return (
      <div className="component01">
        <header>
          <img src={this.props.img} title="title" className="img-class" />
          <div className="text-container">
            <h1 className="h1">{this.props.name}</h1>
            <p className="date">{this.props.date}</p>
          </div>
        </header>
        <div className="description">
          <p className="test">{this.props.text}</p>
          <h3>{this.props.likes}</h3>
          <span>
            <i class="fas fa-heart"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default MediaCard;
