import React, {Component} from "react";

export default class FacultyPreview extends Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    const data = entry.get("data") ? entry.get("data").toJS() : {};

    return <div className="faculty preview">
      { widgetFor("image") }
      <h1>{ data.title }</h1>
      <h2>{ data.position }</h2>
      <h3><strong>Department(s): </strong>{ data.department } { data.secondaryDepartment } { data.tertiaryDepartment } { data.quaternaryDepartment } { data.quinaryDepartment }</h3>
      <a href="#" className="btn-primary">Call me at { data.phone }</a>
      <a href="#" className="btn-secondary">Email me at { data.mail }</a>
    </div>
  }
}
