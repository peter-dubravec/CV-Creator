import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <h1 className="header--top" style={this.headerStyle}>
        Create your CV!
      </h1>
    );
  }
}

export default Header;
