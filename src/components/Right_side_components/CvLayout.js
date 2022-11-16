import React, { Component } from "react";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

export default class CvLayout extends Component {
  render() {
    const { personalInfo, educationInfo, practicalExpInfo } = this.props;

    return (
      <div className="cv-layout__container">
        <div className="cv-layout--personalInfo">
          {personalInfo.map((obj) => {
            return (
              <div className="cv-layout--heading" key={uniqid()}>
                <h2 className="cv-layout--heading__title" key={uniqid()}>
                  Resume
                </h2>
                <p className="cv-layout--heading__phone" key={uniqid()}>
                  <span>Phone:</span> {obj.number}
                </p>
                <p className="cv-layout--heading__email" key={uniqid()}>
                  <span>Email:</span> {obj.email}
                </p>
              </div>
            );
          })}
        </div>
        <div className="div-flex">
          <div className="div-flex--left">
            <div className="cv-layout--educationInfo">
              <h3>Education</h3>
              {educationInfo.map((obj) => {
                return (
                  <div key={uniqid()}>
                    <p className="cv-layout--education__school" key={uniqid()}>
                      School: {obj.school}
                    </p>
                    <p className="cv-layout--education__from" key={uniqid()}>
                      From: {obj.from}
                    </p>
                    <p className="cv-layout--education__to" key={uniqid()}>
                      To: {obj.to}
                    </p>
                    <hr></hr>
                  </div>
                );
              })}
            </div>
            <div className="cv-layout--practicalExpInfo">
              <h3>Practical Experience</h3>
              {practicalExpInfo.map((obj) => {
                return (
                  <div key={uniqid()}>
                    <p key={uniqid()}>Company name: {obj.companyName}</p>
                    <p key={uniqid()}>Position: {obj.position}</p>
                    <p key={uniqid()}>
                      Responsibilities: {obj.responsibilities}
                    </p>
                    <p key={uniqid()}>From: {obj.from}</p>
                    <p key={uniqid()}>To: {obj.to}</p>
                    <hr></hr>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="cv-layout-photo">
            <div className="cv-layout-photo--image">
              <FontAwesomeIcon icon={faUserSecret} />
            </div>
            <div className="cv-layout-photo--name">
              {personalInfo.map((obj) => {
                return <p key={uniqid()}>{obj.firstName}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
