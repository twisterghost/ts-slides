import * as React from "react";
import Code from "../components/Code";
import Slide from "../components/Slide";
import SlideBody from "../components/SlideBody";
import SlideHeader from "../components/SlideHeader";

const exampleCode = `const hello: string = "world";
const foo: number = 1337;`;

const WhatTypeScriptIs: React.SFC = () => {
  return (
    <Slide>
      <SlideHeader>TypeScript is JavaScript, but typed.</SlideHeader>
      <SlideBody>
        <ul>
          <li>THIS (slideshow) is TypeScript!</li>
          <li>It is a strict <em>superset</em> of JavaScript</li>
          <li>Types are postfixed:</li>
        </ul>
        <Code>{exampleCode}</Code>
      </SlideBody>
    </Slide>
  );
};

export default WhatTypeScriptIs;
