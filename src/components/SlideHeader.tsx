import * as React from "react";

const SlideHeader: React.SFC = ({ children }) => {
  return (
    <h2 className="f1 mt0 lh-copy">
      { children }
    </h2>
  );
};

export default SlideHeader;
