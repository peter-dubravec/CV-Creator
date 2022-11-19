import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EducationInfo = (props) => {
  const [educationInfo, setEducationInfo] = useState({
    school: "",
    from: "",
    to: "",
    id: props.id,
  });

  useEffect(() => {
    props.addToAppState(educationInfo);
  }, [educationInfo]); // eslint-disable-line react-hooks/exhaustive-deps

  const changeState = (e) => {
    let copy = { ...educationInfo };
    copy[e.target.name] = e.target.value;
    setEducationInfo(copy);
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.deleteComponent(props.id);
  };

  return (
    <Form className="form-style">
      <Form.Group className="mb-3">
        <Form.Label>School:</Form.Label>
        <Form.Control
          name="school"
          onChange={changeState}
          type="text"
          placeholder="Enter School Name"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>From:</Form.Label>
        <Form.Control
          name="from"
          onChange={changeState}
          type="number"
          placeholder="Enter Starting Year"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>To:</Form.Label>
        <Form.Control
          name="to"
          onChange={changeState}
          type="number"
          placeholder="Enter Year of Finish"
        />
      </Form.Group>

      <Button onClick={handleClick} variant="danger" type="submit">
        Delete
      </Button>
    </Form>
  );
};

export default EducationInfo;
