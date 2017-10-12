import * as React from "react";
import Code from "../components/Code";
import Slide from "../components/Slide";
import SlideBody from "../components/SlideBody";
import SlideHeader from "../components/SlideHeader";

const codeSample = `
const hello: string = "world";
const example: number = hello;

// Produces an error:
// Type 'string' is not assignable to type 'number'. (2322)
`.trim();

const codeSample2 = `
const hello: string = "world";
const example = hello;
const another: number = example;

// Produces an error:
// Type 'string' is not assignable to type 'number'. (2322)
`.trim();

const DiggingIn: React.SFC = () => {
  return (
    <Slide>
      <SlideHeader>Let's dig right in</SlideHeader>
      <SlideBody>
        <p>The compiler catches type errors along with other normal syntax errors.</p>
        <Code>{codeSample}</Code>
        <p>Types can be inferred from constants and assignments.</p>
        <Code>{codeSample2}</Code>
      </SlideBody>
    </Slide>
  );
};

export default DiggingIn;
