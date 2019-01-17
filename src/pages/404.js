import React,  { Component }  from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./404.css"

export default class NotFoundPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="404" description="Page not found." />
        <div className='page-not-found'>
          <h1><span role="img">😔</span> 404</h1>
          <h2>Sorry, the page you requested does not exist.</h2>
        </div>
      </Layout>
    )
  }
}
