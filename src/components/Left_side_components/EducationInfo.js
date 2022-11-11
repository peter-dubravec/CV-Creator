import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import uniqid from "uniqid";

export class EducationInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educationInfo: { school: "", from: "", to: "", id: uniqid() },
    };
  }

  changeState = (e) => {
    const { addToAppState } = this.props;
    const { educationInfo } = this.state;

    this.setState(
      {
        educationInfo: {
          ...educationInfo,
          [e.target.name]: e.target.value,
        },
      },
      () =>
        addToAppState(
          "educationInfo",
          educationInfo,
          e.target.name,
          e.target.value,
          educationInfo.id
        )
    );
  };

  render() {
    const { id } = this.state.educationInfo;
    return (
      <Form className="form-style">
        <Form.Group className="mb-3">
          <Form.Label>School</Form.Label>
          <Form.Control
            name="school"
            onChange={this.changeState}
            type="text"
            placeholder="Enter School Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>From</Form.Label>
          <Form.Control
            name="from"
            onChange={this.changeState}
            type="number"
            placeholder="Enter Starting Year"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>To</Form.Label>
          <Form.Control
            name="to"
            onChange={this.changeState}
            type="number"
            placeholder="Enter Year of Finish"
          />
        </Form.Group>

        <Button
          // onClick={this.props.deleteComp.bind(this, id)}
          variant="danger"
          type="submit"
        >
          Delete
        </Button>
      </Form>
    );
  }
}

export default EducationInfo;
