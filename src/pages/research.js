import React,  { Component }  from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import publications from '../publications.json'
import presentations from '../presentations.json'
import './research.css'

export default class Research extends Component {
  render() {
    return (
      <Layout title="Amber Thrall">
        <SEO title="Research" description="Amber Thrall's publications and presentations." />
        <Header title="Research" description="I often find myself drawn to the intersection of mathematics and computer science."/>
        <div className="publications">
          <h3>Publications</h3>
          <ol>
          {publications.map((l) => this.renderPublication(l))}
          </ol>
        </div>
        <div className="publications">
          <h3>Presentations</h3>
          <ol>
          {presentations.map((l) => this.renderPublication(l))}
          </ol>
        </div>
      </Layout>
    )
  }

  renderPublication(bib) {
    let viewLinks = "";
    if (bib.arXiv) {
      viewLinks += "<a href='"+bib.arXiv+"' target=_blank rel='noopener noreferrer'>arXiv</a>"
    }
    if (bib.journal && bib.journal.url) {
      viewLinks += "<a href='"+bib.journal.url+"' target=_blank rel='noopener noreferrer'>Journal</a>"
    }
    if (bib.press) {
      viewLinks += "<a href='"+bib.press+"' target=_blank rel='noopener noreferrer'>Press</a>"
    }
    if (bib.more) {
      viewLinks += "<a href='"+bib.more+"' target=_blank rel='noopener noreferrer'>More</a>"
    }

    if (!bib.abstract) {
      return ([
        <li>
          <div dangerouslySetInnerHTML={{__html: this.bib2html(bib)}} />
          <h5 dangerouslySetInnerHTML={{__html: viewLinks}} />
        </li>
      ])
    }

    return ([
      <li>
        <div dangerouslySetInnerHTML={{__html: this.bib2html(bib)}} />
        <h4>Abstract:</h4>
        <p>{bib.abstract}</p>
        <h5 dangerouslySetInnerHTML={{__html: viewLinks}} />
      </li>
    ])
  }

  bib2html(bib) {
    var authorsHTML = ""
    bib.author.forEach((author, idx) => {
      if (idx > 0 && bib.author.length > 2) authorsHTML += ","
      if (idx > 0 && idx === bib.author.length-1) authorsHTML += " and"
      if (idx > 0) authorsHTML += " "

      const names = author.name.split(" ");
      names.forEach((name, jdx) => {
        if (jdx === names.length-1) {
          authorsHTML += names[jdx]
        }
        else {
          authorsHTML += name.charAt(0) + ". "
        }
      })
    })

    var journHTML = ""
    if (bib.journal) {
      journHTML = ". "
      if (bib.journal.name) { journHTML += "<i>" + bib.journal.name + "</i>" }
      if (bib.journal.volume && bib.journal.pages) { journHTML += ", " + bib.journal.volume + ":"+bib.journal.pages }
      if (bib.year) { journHTML += ", " + bib.year}
      journHTML += "."
    }

    var notesHTML = ""
    if (bib.notes) {
      if (!bib.journal) { notesHTML += "," }
      notesHTML += " " + bib.notes + ".";
    }

    var idsHTML = ""
    if (bib.identifier) {
      bib.identifier.forEach((id, idx) => {
        idsHTML += " " + id.type + ":" + id.id;
      })
    }

    var html = "<span>";
    html += authorsHTML + ". " + bib.title+journHTML+notesHTML+idsHTML;
    html += "</span>"

    return html
  }
}
