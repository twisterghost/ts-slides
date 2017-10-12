import * as React from "react";
import FullScreenCenter from "../components/FullScreenCenter";
import PrimaryHeader from "../components/PrimaryHeader";
import SecondaryHeader from "../components/SecondaryHeader";
import Slide from "../components/Slide";

const MainTitle: React.SFC = () => {
  return (
    <Slide>
      <FullScreenCenter>
        <PrimaryHeader>TypeScript</PrimaryHeader>
        <SecondaryHeader>What is it, and why should I care?</SecondaryHeader>
      </FullScreenCenter>
    </Slide>
  );
};

export default MainTitle;
