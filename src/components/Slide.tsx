import * as React from "react";

const Slide: React.SFC = ({ children }) => {
  return (
    <div className="slide">
      { children }
    </div>
  );
};

export default Slide;
