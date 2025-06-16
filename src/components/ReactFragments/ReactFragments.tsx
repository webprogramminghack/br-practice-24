import React from "react";

const items = ["Apple", "Banana", "Orange"];

const ReactFragments = () => {
  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <li>{item}</li>
        </React.Fragment>
      ))}
    </>
  );
};

export default ReactFragments;
