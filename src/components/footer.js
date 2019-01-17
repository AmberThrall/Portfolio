import React, { Component } from 'react'
import { withPrefix } from 'gatsby'
import Social from "./social"
import "./footer.css"

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="inner">
          <div className="footer-left">
          <h3>Office:</h3>
          <p>ENR2 S370FF</p>
          <h3>Mail:</h3>
          <p>Amber Thrall <br/ >
          Department of Mathematics<br/ >
          617 N Santa Rita<br />
          Tucson, AZ 85721</p>
          </div>
          <div className="footer-right">
            <img src={withPrefix('/img/ua_stack_rgb_0.png')} alt="UA Logo" />
            <Social />
          </div>
          <div className="clear"></div>
        </div>
      </div>
    )
  }
}
