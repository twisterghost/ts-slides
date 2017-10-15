import * as React from "react";
import Code from "../components/Code";
import Slide from "../components/Slide";
import SlideBody from "../components/SlideBody";
import SlideHeader from "../components/SlideHeader";

const exampleConfig = `
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es6", "dom"],
    "jsx": "react",
    "noImplicitAny": true
  }
}`.trim();

const Simplicity: React.SFC = () => {
  return (
    <Slide>
      <SlideHeader>Reason 3: Simplicity</SlideHeader>
      <SlideBody>
        <p>
          Unlike other options, TypeScript is
          one <Code language="shell" inline={true}>npm install typescript</Code> away from being useful.
        </p>
        <p>You can get started immediately in most cases without configuration.</p>
        <p>Configuration is a simple JSON file, or command line options:</p>
        <Code language="json">{exampleConfig}</Code>
      </SlideBody>
    </Slide>
  );
};

export default Simplicity;
