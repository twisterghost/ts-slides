import * as React from "react";
import Slide from "../components/Slide";
import SlideBody from "../components/SlideBody";
import SlideHeader from "../components/SlideHeader";

const Tooling: React.SFC = () => {
  return (
    <Slide>
      <SlideHeader>Reason 2: Tooling</SlideHeader>
      <SlideBody>
        <p>TypeScript prides itself on a great toolchain and tooling support.</p>
        <div className="fl w-50">
          <ul>
            <li>Fantastic integration with VSCode, IntelliJ, Vim, etc</li>
            <li>Native runtime with ts-node</li>
            <li>TS Server for live compilation / tooling</li>
            <li>Linting with tslint (or eslint with a plugin)</li>
            <li>Great support from both Browserify and Webpack</li>
            <li>Plus, most existing JS toolchains work with TypeScript</li>
            <li><strong>Bonus: </strong>Babel will soon support compiling TypeScript (if that's more your jive)</li>
          </ul>
        </div>
        <div className="fl w-50 tc">
          <img src="/image/vscode.png" />
        </div>
      </SlideBody>
    </Slide>
  );
};

export default Tooling;
