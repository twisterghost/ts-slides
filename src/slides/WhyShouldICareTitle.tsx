import * as React from "react";
import FullScreenCenter from "../components/FullScreenCenter";
import PrimaryHeader from "../components/PrimaryHeader";
import Slide from "../components/Slide";

const WhyShouldICareTitle: React.SFC = () => {
  return (
    <Slide>
      <FullScreenCenter>
        <PrimaryHeader>Why Should I Care?</PrimaryHeader>
      </FullScreenCenter>
    </Slide>
  );
};

export default WhyShouldICareTitle;
