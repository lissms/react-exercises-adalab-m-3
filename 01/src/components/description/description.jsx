import React, { Component } from "react";

export default class Description extends Component {
  render() {
    return (
      <div className="description">
        <p className="test">{this.props.descriptionText}</p>
        <h3>{this.props.descriptionLikes}</h3>
        {this.props.children}
      </div>
    );
  }
}
