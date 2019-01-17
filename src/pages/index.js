import React,  { Component }  from "react"
import Layout from "../components/layout"
import Center from '../components/center'
import Header from "../components/header"
import SEO from '../components/seo'
import { withPrefix } from 'gatsby'
import './index.css'

const textBlocks = [
  `I grew up in West Richland, WA where I taught myself to program at the age of 13.
   In 2014, I moved to Everett, WA to pursue a degree in pure mathematics.
   I received a B.S. in mathematics with cum laude at the University of Washington Bothell in June 2018.
   I am currently pursuing a Ph.D. in pure mathematics at the University of Arizona.`,
  `My goal is to become a research professor where I can not only continue to study and research mathematics, but also share my love for the subject as well.
   I hope to combine the beauty of mathematics and my love of computers into amazing things.`
]

export default class Homepage extends Component {
  render() {
    return (
      <Layout title="Amber Thrall">
        <SEO title="About Me" description="About Amber Thrall." />
        <Center>
          <div className="columns">
            <div className="left column">
              {this.renderBio()}
            </div>
            <div className="right column">
              <img src={withPrefix("/img/me.jpg")} className="mypic" alt="Me" />
            </div>
          </div>
        </Center>
      </Layout>
    )
  }

  renderPlain() {
    return (
      <Layout title="Amber Thrall">
        <Center>
          {this.renderBio()}
        </Center>
      </Layout>
    )
  }

  renderBio() {
    return (
      <div>
        <div className="indexContainer">
          <Header title="Amber Thrall" description="Mathematician, Computer Scientist, Arizonian."/>
        </div>
        <div className="intro">
          <div className="blocks">
            {textBlocks.map((b,i) => this.renderBlock(b,i))}
          </div>
          <a href={withPrefix('/cv.pdf')} target='_blank' rel='noopener noreferrer'>Click here to view my current CV.</a> (Last updated: Jun. 26, 2018)
        </div>
      </div>
    )
  }

  renderBlock(html,idx) {
    return (
      <div key={idx.toString()} className="block" dangerouslySetInnerHTML={{__html: html}}></div>
    )
  }
}
