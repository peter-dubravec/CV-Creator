import "./App.css";
import Header from "./components/Left_side_components/Header";
import PersonalInfo from "./components/Left_side_components/PersonalInfo";
import EducationInfo from "./components/Left_side_components/EducationInfo";
// import CvLayout from "./components/Right_side_components/CvLayout";
import RenderComponents from "./components/Left_side_components/RenderComponents";
import uniqid from "uniqid";

import Button from "react-bootstrap/Button";
import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: [],
      educationInfo: [],
      components: {
        personalInfo: [{ component: PersonalInfo, id: uniqid() }],
        educationInfo: [{ component: EducationInfo, id: uniqid() }],
      },
    };
  }

  addToState = (whichArray, obj, key, value, id) => {
    let deepCopy = JSON.parse(JSON.stringify(this.state[whichArray]));
    let findObj = deepCopy.find((val) => val.id === id);
    if (findObj) {
      findObj[key] = value;
      this.setState({
        [whichArray]: deepCopy,
      });
    } else {
      this.setState({
        [whichArray]: [...this.state[whichArray], obj],
      });
    }
  };

  deleteComponent = (key, id, e) => {
    e.preventDefault();
    let { components } = this.state;
    let filteredArray = components[key].filter((obj) => obj.id !== id);
    let updatedState = this.state[key].filter((obj) => obj.id !== id);
    this.setState({
      components: { ...components, [key]: filteredArray },
      [key]: updatedState,
    });
  };

  addComponent = (key, component) => {
    let { components } = this.state;
    this.setState({
      components: {
        ...components,
        [key]: [...components[key], { component: component, id: uniqid() }],
      },
    });
  };

  render() {
    const { components } = this.state;
    return (
      <div className="App">
        <div className="right">
          <Header />
          <h3>Personal Information</h3>
          {/* <PersonalInfo addToAppState={this.addToState} /> */}
          <RenderComponents
            values={components.personalInfo}
            addToAppState={this.addToState}
          />
          <Button
            onClick={this.addComponent.bind(this, "personalInfo", PersonalInfo)}
            variant="primary"
            type="submit"
          >
            Add +
          </Button>
          <h3>Education</h3>
          {/* <EducationInfo addToAppState={this.addToState} /> */}
          <RenderComponents
            addToAppState={this.addToState}
            values={components.educationInfo}
            deleteComponent={this.deleteComponent}
          />
          <Button
            onClick={this.addComponent.bind(
              this,
              "educationInfo",
              EducationInfo
            )}
            variant="primary"
            type="submit"
          >
            Add +
          </Button>
        </div>
        {/* <div className="left">
          <CvLayout />
        </div> */}
      </div>
    );
  }
}

export default App;
