import React, { Component } from "react";

export class RenderComponents extends Component {
  render() {
    if (this.props.values === undefined) return;
    return (
      <div>
        {this.props.values.map((Component, i) => {
          let Value = Component.component;
          let id = Component.id;
          return (
            <Value
              key={i}
              addToAppState={this.props.addToAppState}
              id={id}
              deleteComponent={this.props.deleteComponent}
            />
          );
        })}
      </div>
    );
  }
}

export default RenderComponents;
