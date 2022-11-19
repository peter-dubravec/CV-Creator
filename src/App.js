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
import React, { useState } from "react";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState([]);
  const [educationInfo, setEducationInfo] = useState([]);
  const [practicalExpInfo, setPracticalExpInfo] = useState([]);

  const [personalInfoComponent] = useState([
    { component: PersonalInfo, id: uniqid() },
  ]);

  const [educationInfoComponent, setEducationInfoComponent] = useState([
    { component: EducationInfo, id: uniqid() },
  ]);

  const [practicalExpInfoComponent, setPracticalExpInfoComponent] = useState([
    { component: PracticalExpInfo, id: uniqid() },
  ]);

  const setPersonalInfoComp = (comp) => {
    let deepCopy = JSON.parse(JSON.stringify(personalInfo));
    let findObj = deepCopy.find((obj) => obj.id === comp.id);
    if (findObj) {
      setPersonalInfo([comp]);
    } else {
      setPersonalInfo([...personalInfo, comp]);
    }
  };

  const setEducationInfoComp = (comp) => {
    let deepCopy = JSON.parse(JSON.stringify(educationInfo));
    let findObj = deepCopy.find((obj) => obj.id === comp.id);
    if (findObj) {
      setEducationInfo(
        educationInfo.map((item) => (item.id === comp.id ? comp : item))
      );
    } else {
      setEducationInfo([...educationInfo, comp]);
    }
  };

  const setPracticalExpInfoComp = (comp) => {
    let deepCopy = JSON.parse(JSON.stringify(practicalExpInfo));
    let findObj = deepCopy.find((obj) => obj.id === comp.id);
    if (findObj) {
      setPracticalExpInfo(
        practicalExpInfo.map((item) => (item.id === comp.id ? comp : item))
      );
    } else {
      setPracticalExpInfo([...practicalExpInfo, comp]);
    }
  };

  const deletePracticalExpComponent = (id) => {
    let filteredPracticalExpComponentArray = practicalExpInfoComponent.filter(
      (component) => component.id !== id
    );

    setPracticalExpInfoComponent(filteredPracticalExpComponentArray);

    let filteredPracticalExpArray = practicalExpInfo.filter(
      (obj) => obj.id !== id
    );

    setPracticalExpInfo(filteredPracticalExpArray);
  };

  const deleteEducationInfoComponent = (id) => {
    let filteredEducationInfoComponentArray = educationInfoComponent.filter(
      (component) => component.id !== id
    );
    setEducationInfoComponent(filteredEducationInfoComponentArray);

    let filteredEducationInfoArray = educationInfo.filter(
      (obj) => obj.id !== id
    );

    setEducationInfo(filteredEducationInfoArray);
  };

  const addEducationInfoComponent = () => {
    setEducationInfoComponent([
      ...educationInfoComponent,
      {
        component: EducationInfo,
        id: uniqid(),
      },
    ]);
  };

  const addPracticalExpComponent = () => {
    setPracticalExpInfoComponent([
      ...practicalExpInfoComponent,
      {
        component: PracticalExpInfo,
        id: uniqid(),
      },
    ]);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="right">
          <div className="component">
            <h3>Personal Information</h3>
            <RenderComponents
              addToAppState={setPersonalInfoComp}
              componenentsArr={personalInfoComponent}
            />
          </div>
          <div className="component">
            <h3>Education</h3>
            <RenderComponents
              addToAppState={setEducationInfoComp}
              componenentsArr={educationInfoComponent}
              deleteComponent={deleteEducationInfoComponent}
            />
            <Button
              onClick={addEducationInfoComponent}
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
              addToAppState={setPracticalExpInfoComp}
              componenentsArr={practicalExpInfoComponent}
              deleteComponent={deletePracticalExpComponent}
            />
            <Button
              onClick={addPracticalExpComponent}
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
};

export default App;
