import * as React from "react";

const PrimaryHeader: React.SFC = ({ children }) => {
  return (
    <h1 className="tc f-subheadline lh-title">
      { children }
    </h1>
  );
};

export default PrimaryHeader;
