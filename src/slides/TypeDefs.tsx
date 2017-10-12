import * as React from "react";
import Code from "../components/Code";
import Slide from "../components/Slide";
import SlideBody from "../components/SlideBody";
import SlideHeader from "../components/SlideHeader";

const codeSample = `
$ tsc MyComponent.tsx
MyComponent.tsx(1,24): error TS7016: Could not find a declaration file for module 'react'.

$ npm install --save-dev @types/react
+ @types/react@16.0.10
added 1 package in 0.773s

$ tsc MyComponent.tsx
# Success!
`.trim();

const TypeDefs: React.SFC = () => {
  return (
    <Slide>
      <SlideHeader>Cool, but all the stuff I use is in JS...</SlideHeader>
      <SlideBody>
        <p>TypeScript &lt;3's JavaScript. The community has built type definitions for thousands of popular modules.</p>
        <Code language="shell">{codeSample}</Code>
        <p>
          Learn more at the
          <a target="_blank" href="https://github.com/DefinitelyTyped/DefinitelyTyped">DefinitelyTyped</a>
          repository.
        </p>
      </SlideBody>
    </Slide>
  );
};

export default TypeDefs;
