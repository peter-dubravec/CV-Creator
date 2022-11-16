import "./App.css";
import Header from "./components/Center_components/Header";
import PersonalInfo from "./components/Left_side_components/PersonalInfo";
import EducationInfo from "./components/Left_side_components/EducationInfo";
import PracticalExpInfo from "./components/Left_side_components/PracticalExpInfo";
// import CvLayout from "./components/Right_side_components/CvLayout";
import RenderComponents from "./components/Left_side_components/RenderComponents";
import Footer from "./components/Center_components/Footer";
import uniqid from "uniqid";
import CvLayout from "./components/Right_side_components/CvLayout";
import Button from "react-bootstrap/Button";
import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: [],
      educationInfo: [],
      practicalExpInfo: [],
      components: {
        personalInfo: [{ component: PersonalInfo, id: uniqid() }],
        educationInfo: [{ component: EducationInfo, id: uniqid() }],
        practicalExpInfo: [{ component: PracticalExpInfo, id: uniqid() }],
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
    const { components, personalInfo, educationInfo, practicalExpInfo } =
      this.state;
    return (
      <div className="App">
        <Header />
        <main>
          <div className="right">
            <div className="component">
              <h3>Personal Information</h3>
              <RenderComponents
                componenentsArr={components.personalInfo}
                addToAppState={this.addToState}
              />
            </div>
            <div className="component">
              <h3>Education</h3>
              <RenderComponents
                addToAppState={this.addToState}
                componenentsArr={components.educationInfo}
                deleteComponent={this.deleteComponent}
              />
              <Button
                onClick={this.addComponent.bind(
                  this,
                  "educationInfo",
                  EducationInfo
                )}
                className="education-info--btn"
                variant="primary"
                type="submit"
              >
                Add +
              </Button>
            </div>
            <div className="component">
              <h3>Practical Experience</h3>
              <RenderComponents
                addToAppState={this.addToState}
                componenentsArr={components.practicalExpInfo}
                deleteComponent={this.deleteComponent}
              />
              <Button
                onClick={this.addComponent.bind(
                  this,
                  "practicalExpInfo",
                  PracticalExpInfo
                )}
                variant="primary"
                type="submit"
              >
                Add +
              </Button>
            </div>
          </div>
          <div className="left">
            <CvLayout
              personalInfo={personalInfo}
              educationInfo={educationInfo}
              practicalExpInfo={practicalExpInfo}
            />
          </div>
        </main>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
