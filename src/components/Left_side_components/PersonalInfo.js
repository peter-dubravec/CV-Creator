import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import uniqid from "uniqid";

export default class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        firstName: "",
        number: "",
        email: "",
        id: uniqid(),
      },
    };
  }

  changeState = (e) => {
    const { addToAppState } = this.props;
    const { personalInfo } = this.state;

    this.setState(
      {
        personalInfo: { ...personalInfo, [e.target.name]: e.target.value },
      },
      () =>
        addToAppState(
          "personalInfo",
          personalInfo,
          e.target.name,
          e.target.value,
          personalInfo.id
        )
    );
  };

  componentDidMount() {
    const { personalInfo } = this.state;
    const { addToAppState } = this.props;
    addToAppState("personalInfo", personalInfo, "", "", personalInfo.id);
  }

  render() {
    return (
      <Form className="form-style">
        <Form.Group className="mb-3">
          <Form.Label>Full Name:</Form.Label>
          <Form.Control
            name="firstName"
            onChange={this.changeState}
            type="text"
            placeholder="Enter Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control
            onChange={this.changeState}
            name="number"
            type="tel"
            placeholder="Number"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            onChange={this.changeState}
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
  }
}
