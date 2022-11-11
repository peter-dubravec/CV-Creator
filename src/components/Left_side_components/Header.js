import React, { Component } from "react";

export class Header extends Component {
  render() {
    return <h1 style={this.headerStyle}>Header</h1>;
  }

  headerStyle = {
    color: "black",
    textAlign: "center",
  };
}

export default Header;
