import React, { Component } from "react";

export class RenderComponents extends Component {
  render() {
    if (this.props.values === undefined) return;
    return (
      <div>
        {this.props.values.map((Component, i) => {
          return <Component key={i} addToAppState={this.props.addToAppState} />;
        })}
      </div>
    );
  }
}

export default RenderComponents;
