import React from "react";

const RenderComponents = (props) => {
  return (
    <div>
      {props.componenentsArr.map((component, i) => {
        let Value = component.component;
        return (
          <Value
            key={i}
            addToAppState={props.addToAppState}
            id={component.id}
            deleteComponent={props.deleteComponent}
          />
        );
      })}
    </div>
  );
};

export default RenderComponents;
