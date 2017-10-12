import * as React from "react";
import FullScreenCenter from "../components/FullScreenCenter";
import PrimaryHeader from "../components/PrimaryHeader";
import Slide from "../components/Slide";

const WhatIsTypeScriptTitle: React.SFC = () => {
  return (
    <Slide>
      <FullScreenCenter>
        <PrimaryHeader>What Is TypeScript?</PrimaryHeader>
      </FullScreenCenter>
    </Slide>
  );
};

export default WhatIsTypeScriptTitle;
