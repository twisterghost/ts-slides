import * as React from "react";

export default class Slide extends React.Component {
  public render() {
    return (
      <div className="slide">
        {this.props.children}
      </div>
    );
  }
}
