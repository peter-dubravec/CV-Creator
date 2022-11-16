import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export class PracticalExpInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      practicalExpInfo: {
        companyName: "",
        position: "",
        responsibilities: "",
        from: "",
        to: "",
        id: this.props.id,
      },
    };
  }

  changeState = (e) => {
    const { addToAppState } = this.props;
    const { practicalExpInfo } = this.state;

    this.setState(
      {
        practicalExpInfo: {
          ...practicalExpInfo,
          [e.target.name]: e.target.value,
        },
      },
      () =>
        addToAppState(
          "practicalExpInfo",
          practicalExpInfo,
          e.target.name,
          e.target.value,
          practicalExpInfo.id
        )
    );
  };

  componentDidMount() {
    const { addToAppState } = this.props;
    const { practicalExpInfo } = this.state;
    addToAppState(
      "practicalExpInfo",
      practicalExpInfo,
      "",
      "",
      practicalExpInfo.id
    );
  }

  render() {
    return (
      <Form className="form-style">
        <Form.Group className="mb-3">
          <Form.Label>Company Name:</Form.Label>
          <Form.Control
            name="companyName"
            onChange={this.changeState}
            type="text"
            placeholder="Enter Company Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Position:</Form.Label>
          <Form.Control
            name="position"
            onChange={this.changeState}
            type="text"
            placeholder="Your Role"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Responsibilities:</Form.Label>
          <Form.Control
            name="responsibilities"
            onChange={this.changeState}
            type="text"
            placeholder="Describe your responsibilities"
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
          onClick={this.props.deleteComponent.bind(
            this,
            "practicalExpInfo",
            this.props.id
          )}
          variant="danger"
          type="submit"
        >
          Delete
        </Button>
      </Form>
    );
  }
}

export default PracticalExpInfo;
