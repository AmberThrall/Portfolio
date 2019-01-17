import React, { Component } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaResearchgate } from 'react-icons/fa'
import './social.css'

const icons = [
  {
    id: 'Github',
    link: 'https://github.com/AmberThrall',
    code: (<FaGithub />)
  },
  {
    id: 'Linkedin',
    link: 'https://www.linkedin.com/in/amber-thrall-30602416a',
    code: (<FaLinkedin />)
  },
  {
    id: 'ResearchGate',
    link: 'https://www.researchgate.net/profile/Amber_Thrall',
    code: (<FaResearchgate />)
  }
]

export default class Social extends Component {
  render() {
    return (
      <div className="social-icons">
        {icons.map((i,idx) => this.renderIcon(i,idx))}
      </div>
    )
  }


  renderIcon(icon,idx) {
    if (!icon.link) return;
    return (
      <a title={icon.id} key={icon.id} href={icon.link} target="_blank" rel="noopener noreferrer">{icon.code}</a>
    )
  }
}
