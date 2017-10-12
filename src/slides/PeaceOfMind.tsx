import * as React from "react";
import Code from "../components/Code";
import Slide from "../components/Slide";
import SlideBody from "../components/SlideBody";
import SlideHeader from "../components/SlideHeader";

const exampleErrors = `
Error TS2552: Cannot find name 'Simlpicity'. Did you mean 'Simplicity'?

Error TS17002: Expected corresponding JSX closing tag for 'p'.

Error TS2339: Property 'lang' does not exist on type 'IntrinsicAttributes & CodeProps & { children?: ReactNode; }'.
`.trim();

const Simplicity: React.SFC = () => {
  return (
    <Slide>
      <SlideHeader>Reason 4: Peace Of Mind</SlideHeader>
      <SlideBody>
        <p>The TS compiler is smart and provides helpful errors that would otherwise not be caught until runtime.</p>
        <p>Here are some errors I got while building these slides that saved me pain:</p>
        <Code language="json">{exampleErrors}</Code>
      </SlideBody>
    </Slide>
  );
};

export default Simplicity;
