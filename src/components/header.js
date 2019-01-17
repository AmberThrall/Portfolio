import React, { Component } from "react"
import "./header.css"

export default class Header extends Component {
  render() {
    let classes='header';
    if (this.props.classNames) classes+=" "+this.props.classNames;

    return (
      <div className={classes}>
        <h1>{this.props.title}</h1>
        <h2>{this.props.description}</h2>
      </div>
    )
  }
}
