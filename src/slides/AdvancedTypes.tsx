import * as React from "react";
import Code from "../components/Code";
import Slide from "../components/Slide";
import SlideBody from "../components/SlideBody";
import SlideHeader from "../components/SlideHeader";

const exampleCode = `
render() {
  let arrayOfComponents: Array<React.ComponentClass | React.StatelessComponent>;
  arrayOfComponents.push(MyComponent);
  arrayOfComponents.push(MyStatelessComponent);

  return arrayOfComponents;
}
`.trim();
const testing = 1;
const AdvancedTypes: React.SFC = () => {
  return (
    <Slide>
      <SlideHeader>Advanced Types</SlideHeader>
      <SlideBody>
        <p>
          You can read about a whole lot more at the fantastic
          <a target="_blank" href="http://www.typescriptlang.org/docs/handbook/">TypeScript Handbook</a>,
          but here's a quick overview:
        </p>
        <ul>
          <li>Intersection Types - combine and conquer</li>
          <li>Union Types - allow one or the other</li>
          <li>Type Guards - allow runtime type checks</li>
          <li>Nullable Types</li>
          <ul>
            <li>By default, all types are nullable</li>
            <li>
              Use the flag
              <Code language="shell" inline={true}>--strictNullChecks</Code>
              to make types non-nullable
            </li>
          </ul>
        </ul>
        <Code>{exampleCode}</Code>
      </SlideBody>
    </Slide>
  );
};

export default AdvancedTypes;
