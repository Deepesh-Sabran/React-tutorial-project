import React from "react";

const BaseHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <h3>This is a Nav Bar</h3>
        <Component {...props} />
        <h3>This is a Footer</h3>
      </div>
    );
  };

export default BaseHoc;
