import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { solarizedDark } from "react-syntax-highlighter/dist/styles";

interface CodeProps extends React.Props<CodeProps> {
  inline?: boolean;
  language?: string;
}

interface CustomStyle {
  display?: string;
}

const Code: React.SFC<CodeProps> = ({ children, inline = false, language = "typescript" }) => {

  const style: CustomStyle = {};

  if (inline) {
    style.display = "inline";
  }

  return (
    <SyntaxHighlighter language={language} style={solarizedDark} customStyle={style}>
      { children }
    </SyntaxHighlighter>
  );
};

export default Code;
