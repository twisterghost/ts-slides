import * as React from "react";

const FullScreenCenter: React.SFC = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-100">
      <div>
      { children }
      </div>
    </div>
  );
};

export default FullScreenCenter;
