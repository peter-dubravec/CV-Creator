import React, { Component } from "react";

export class RenderComponents extends Component {
  render() {
    return (
      <div>
        {this.props.componenentsArr.map((component, i) => {
          let Value = component.component;
          return (
            <Value
              key={i}
              addToAppState={this.props.addToAppState}
              id={component.id}
              deleteComponent={this.props.deleteComponent}
            />
          );
        })}
      </div>
    );
  }
}

export default RenderComponents;
