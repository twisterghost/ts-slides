import * as React from "react";
import FullScreenCenter from "../components/FullScreenCenter";
import PrimaryHeader from "../components/PrimaryHeader";
import Slide from "../components/Slide";

const Questions: React.SFC = () => {
  return (
    <Slide>
      <FullScreenCenter>
        <PrimaryHeader>Questions?</PrimaryHeader>
      </FullScreenCenter>
    </Slide>
  );
};

export default Questions;
