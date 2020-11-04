import React, { Component } from "react";
import Description from "./description/description";
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
        {this.props.children}
      </div>
    );
  }
}

export default MediaCard;
