import * as React from "react";
import Code from "../components/Code";
import Slide from "../components/Slide";
import SlideBody from "../components/SlideBody";
import SlideHeader from "../components/SlideHeader";

const codeSample = `
function myConfusingFunction(input, value) {

  // Oh, okay input is an array? Or is it a string? They both have indexOf...
  if (input.indexOf("http") !== -1) {
    return input + value;
  }

  return value;
}
`.trim();

const codeSampleFixed = `
function myConfusingFunction(input: string, value: string): string {
  if (input.indexOf("http") !== -1) {
    return input + value;
  }

  return value;
}
`.trim();

const ProjectClarity: React.SFC = () => {
  return (
    <Slide>
      <SlideHeader>Reason 1: Clarity</SlideHeader>
      <SlideBody>
        <p>If someone comes into your project, they can figure out what is going on just a little bit better.</p>
        <Code>{codeSample}</Code>
      </SlideBody>
    </Slide>
  );
};

const ProjectClarity2: React.SFC = () => {
  return (
    <Slide>
      <SlideHeader>Reason 1: Clarity</SlideHeader>
      <SlideBody>
        <Code>{codeSampleFixed}</Code>
        <p>
          Now, we know exactly what is coming and going. Everyone in the room who uses typed languages is probably
          laughing right now, because its a silly problem to have in the first place.
        </p>
      </SlideBody>
    </Slide>
  );
};

export {
  ProjectClarity,
  ProjectClarity2,
};
