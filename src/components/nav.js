import React, { Component } from 'react'
import { withPrefix } from 'gatsby'
import Link from 'gatsby-link'
import nav from '../nav.json'
import "./nav.css"

export default class Navigation extends Component {
  render() {
    return (
      <div className="nav">
          {nav.map((l) => this.renderLink(l))}
      </div>
    )
  }

  renderLink(l) {
    if (l.to === "/") {
      return ([ this.homepageIcon(l.to, l.title, l.className) ])
    }

    const linkMethod = /^\w+:/.test(l.to) ? this.globalLink : this.gatsbyLink

    return ([
      linkMethod(l.to, l.title, l.className)
    ])
  }

  gatsbyLink(to, title, className) {
    return (
      <Link key={title} className={className} to={to}>{title}</Link>
    )
  }

  globalLink(to, title, className) {
    return (
      <a key={title} className={className} href={to}>{title}</a>
    )
  }

  homepageIcon(to, title, className) {
    return (
      <Link key={title} className={className} to={to}><img src={withPrefix('/img/logo_heart.png')} alt="Homepage" /></Link>
    )
  }
}
