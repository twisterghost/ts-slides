import * as React from "react";
import Code from "../components/Code";
import Slide from "../components/Slide";
import SlideBody from "../components/SlideBody";
import SlideHeader from "../components/SlideHeader";

const VsFlow: React.SFC = () => {
  return (
    <Slide>
      <SlideHeader>TypeScript compiles to JavaScript</SlideHeader>
      <SlideBody>
        <ul>
          <li>TypeScript is a language that <em>compiles</em> to JavaScript</li>
          <li>It's compiler, <Code inline={true}>tsc</Code>, can effectively replace Babel</li>
          <li>The compiler has <strong>zero dependencies</strong>, is written in TypeScript, and installs via npm</li>
          <li>Supported by the TypeScript compiler:</li>
          <ul>
            <li>JSX</li>
            <li>ECMAScript version targeting back to ES3</li>
            <li>Interop with JavaScript files</li>
            <li>Sourcemapping</li>
            <li>Type file generation (more on this later)</li>
            <li>Watch mode</li>
            <li>In some cases, even bundling!</li>
          </ul>
          <li>Flow looks similar, but is not a compiler</li>
          <ul>
            <li>There are pros/cons to both, today we're only looking at TS</li>
          </ul>
        </ul>
      </SlideBody>
    </Slide>
  );
};

export default VsFlow;
