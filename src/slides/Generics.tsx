import * as React from "react";
import Code from "../components/Code";
import Slide from "../components/Slide";
import SlideBody from "../components/SlideBody";
import SlideHeader from "../components/SlideHeader";

const codeSample = `
interface MyProps {
  visible: boolean;
  bonusText?: string;
}

class MyComponent extends React.Component<MyProps> {
  // ...
}
`.trim();

const Generics: React.SFC = () => {
  return (
    <Slide>
      <SlideHeader>Generics and Interfaces are things, too</SlideHeader>
      <SlideBody>
        <p>For example, when making React components, you use an interface to define prop types.</p>
        <Code>{codeSample}</Code>
      </SlideBody>
    </Slide>
  );
};

export default Generics;
