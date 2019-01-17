import React, { Component } from "react"
import Navigation from "./nav"
import Footer from "./footer"
import './layout.css'

export default class Layout extends Component {
  render() {
    return (
      <div className='container'>
        <Navigation />
        <div className="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
