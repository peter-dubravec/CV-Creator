import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

const PersonalInfo = (props) => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    number: "",
    email: "",
    id: props.id,
  });

  useEffect(() => {
    props.addToAppState(personalInfo);
  }, [personalInfo]); // eslint-disable-line react-hooks/exhaustive-deps

  const changeState = (e) => {
    let copy = { ...personalInfo };
    copy[e.target.name] = e.target.value;
    setPersonalInfo(copy);
  };

  return (
    <Form className="form-style">
      <Form.Group className="mb-3">
        <Form.Label>Full Name:</Form.Label>
        <Form.Control
          name="firstName"
          onChange={changeState}
          type="text"
          placeholder="Enter Name"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone Number:</Form.Label>
        <Form.Control
          onChange={changeState}
          name="number"
          type="tel"
          placeholder="Number"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address:</Form.Label>
        <Form.Control
          onChange={changeState}
          name="email"
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    </Form>
  );
};

export default PersonalInfo;
