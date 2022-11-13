import React, { Component } from "react";
import uniqid from "uniqid";

export default class CvLayout extends Component {
  render() {
    const { personalInfo, educationInfo, practicalExpInfo } = this.props;

    return (
      <div>
        <div className="cv-layout--personalInfo">
          {personalInfo.map((obj) => {
            return (
              <div className="cv-layout--heading" key={uniqid()}>
                <h2 key={uniqid()}>{obj.firstName}</h2>
                <p key={uniqid()}>Phone: {obj.number}</p>
                <p key={uniqid()}>email: {obj.email}</p>
              </div>
            );
          })}
        </div>
        <div className="cv-layout--personalInfo">
          {educationInfo.map((obj) => {
            return (
              <div key={uniqid()}>
                <h2 key={uniqid()}>{obj.school}</h2>
                <p key={uniqid()}>{obj.from}</p>
                <p key={uniqid()}>{obj.to}</p>
              </div>
            );
          })}
        </div>
        <div className="cv-layout--practicalExpInfo">
          {practicalExpInfo.map((obj) => {
            return (
              <div key={uniqid()}>
                <h2 key={uniqid()}>{obj.companyName}</h2>
                <p key={uniqid()}>{obj.position}</p>
                <p key={uniqid()}>{obj.responsibilities}</p>
                <p key={uniqid()}>{obj.from}</p>
                <p key={uniqid()}>{obj.to}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
