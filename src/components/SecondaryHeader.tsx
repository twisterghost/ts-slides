import * as React from "react";

const SecondaryHeader: React.SFC = ({ children }) => {
  return (
    <h2 className="tc f2 lh-copy">
      { children }
    </h2>
  );
};

export default SecondaryHeader;
