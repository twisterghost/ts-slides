import * as React from "react";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";

interface SlideshowState {
  idx: number;
}

export default class Slideshow extends React.Component<undefined, SlideshowState> {

  private slides: Array<React.ComponentClass | React.StatelessComponent>;

  public constructor() {
    super();
    this.state = {
      idx: 0,
    };

    this.slides = [
      Slide1,
      Slide2,
    ];
    window.addEventListener("keydown", this.handleKeyPress);
  }

  private nextSlide = () => {
    if (this.state.idx < this.slides.length - 1) {
      this.setState({
        idx: this.state.idx + 1,
      });
    }
  }

  private prevSlide = () => {
    if (this.state.idx > 0) {
      this.setState({
        idx: this.state.idx - 1,
      });
    }
  }

  private handleKeyPress = (event: KeyboardEvent) => {
    switch (event.keyCode) {
      case 39:
        this.nextSlide();
        break;
      case 37:
        this.prevSlide();
        break;
      case 38:
        this.setState({
          idx: 0,
        });
        break;
      default:
        break;
    }
  }

  public render() {
    const CurrentSlide = this.slides[this.state.idx];

    return (
      <div>
        <CurrentSlide />
      </div>
    );
  }
}
