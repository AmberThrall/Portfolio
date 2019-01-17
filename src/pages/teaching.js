import React,  { Component }  from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css";
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import moment from 'moment'
import teaching from "../teaching.json"

import "./teaching.css"

export default class Teaching extends Component {
  render() {
    return (
      <Layout title="Teaching">
        <SEO title="Teaching" description="Current teaching load."/>
        {this.renderTitle()}
        <br />
        <Tabs>
          <TabList>
            {teaching.currentCourses.map((l,i) => this.renderTab(l,i))}
          </TabList>
          {teaching.currentCourses.map((l,i) => this.renderPanel(l,i))}
        </Tabs>
        <br /><br />
        <p class='footnote'>* Indicates that I am a TA for this course.</p>
        <h2>Previous Courses:</h2>
        <ul>
          {teaching.pastCourses.map((l,i) => this.renderPastCourse(l,i))}
        </ul>
      </Layout>
    )
  }

  renderPastCourse(l,i) {
    var taTag = "";
    if (l.isTA) taTag += " (TA)";

    return (
      <li>
        <p>{l.course} - {l.title}{taTag}<br />
        <small>{l.semester} | {l.school}</small>
        </p>
      </li>
    )
  }

  renderTitle() {
    const desc = "Office Hours: " + teaching.officeHours + " or by appointment.";
    return (<Header title="Teaching" description={desc}/>)
  }

  renderTab(l,i) {
    var flags="";
    if (l.isTA) flags += "*";

    return (<Tab><p class='tabTitle'>{l.course}-{l.section}{flags}</p></Tab>)
  }

  renderPanel(l,i) {
    var title=l.title;

    var instructorText = "";
    if (l.isTA) { instructorText = "<td><strong>Instructor:</strong></td><td>"+l.instructor+"</td>" }

    var examHTML = ""
    var finalExam = ""
    if (l.exams) {
      examHTML = "<strong>Exams: </strong><ol>"
      for (let exam of l.exams) {
        if (exam.isFinal) {
          if (finalExam !== "") throw Error("More than one final exam for "+l.course+"-"+l.section+".");
          const start = moment(new Date(exam.year, exam.month-1, exam.day, exam.start[0], exam.start[1]))
          const end = moment(new Date(exam.year, exam.month-1, exam.day, exam.end[0], exam.end[1]))
          finalExam = "<strong>Final Exam: </strong>"
          finalExam += start.format("MMMM Do")+" from " + start.format("h:mm a") + " to " + end.format("h:mm a");
          continue;
        }

        const start = moment(new Date(exam.year, exam.month-1, exam.day, exam.start[0], exam.start[1]))
        const end = moment(new Date(exam.year, exam.month-1, exam.day, exam.end[0], exam.end[1]))
        examHTML += "<li><p>"
        examHTML += start.format("MMMM Do")+" from " + start.format("h:mm a") + " to " + end.format("h:mm a");
        examHTML += "<br /><small>Topics: "+exam.topics+"</small>"
        examHTML += "</p></li>"
      }
      examHTML += "</ol>"
    }

    return (
      <TabPanel>
        <h2>{title}</h2>
        <table><tbody>
          <tr dangerouslySetInnerHTML={{__html: instructorText}}></tr>
          <tr><td><strong>Class time:</strong></td><td>{l.time}</td></tr>
          <tr><td><strong>Class room:</strong></td><td>{l.room}</td></tr>
          <tr><td><strong>Class homepage:</strong></td><td><a href={l.homepage} target="_blank" rel="noopener noreferrer">{l.homepage}</a></td></tr>
          <tr><td><strong>Course Description:</strong></td><td>{l.description}</td></tr>
        </tbody></table>
        <div dangerouslySetInnerHTML={{__html: examHTML}}></div>
        <div dangerouslySetInnerHTML={{__html: finalExam}}></div>
      </TabPanel>
    )
  }
}
