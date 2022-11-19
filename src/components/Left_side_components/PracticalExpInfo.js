import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const PracticalExpInfo = (props) => {
  const [practicalExpInfo, setPracticalExpInfo] = useState({
    companyName: "",
    position: "",
    responsibilities: "",
    from: "",
    to: "",
    id: props.id,
  });

  useEffect(() => {
    props.addToAppState(practicalExpInfo);
  }, [practicalExpInfo]); // eslint-disable-line react-hooks/exhaustive-deps

  const changeState = (e) => {
    let copy = { ...practicalExpInfo };
    copy[e.target.name] = e.target.value;
    setPracticalExpInfo(copy);
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.deleteComponent(props.id);
  };

  return (
    <Form className="form-style">
      <Form.Group className="mb-3">
        <Form.Label>Company Name:</Form.Label>
        <Form.Control
          name="companyName"
          onChange={changeState}
          type="text"
          placeholder="Enter Company Name"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Position:</Form.Label>
        <Form.Control
          name="position"
          onChange={changeState}
          type="text"
          placeholder="Your Role"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Responsibilities:</Form.Label>
        <Form.Control
          name="responsibilities"
          onChange={changeState}
          type="text"
          placeholder="Describe your responsibilities"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>From</Form.Label>
        <Form.Control
          name="from"
          onChange={changeState}
          type="number"
          placeholder="Enter Starting Year"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>To</Form.Label>
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

export default PracticalExpInfo;

