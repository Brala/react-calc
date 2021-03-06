import React, { Component } from "react";
import "./Display.scss";

class AutoScalingText extends Component {
  constructor() {
    super();
    this.state = {
      scale: 1
    };
  }

  componentDidUpdate() {
    const { scale } = this.state;
    const { node } = this;
    const { parentNode } = node;
    const availableWidth = parentNode.offsetWidth;
    const actualWidth = node.offsetWidth;
    const actualScale = availableWidth / actualWidth;

    if (scale === actualScale) return;

    (actualScale < 1 && this.setState({ scale: actualScale })) ||
      (scale < 1 && this.setState({ scale: 1 }));
  }

  // copyToClipboard = (e) => {
  //   console.log(this)
  //   this.select();
  //   document.execCommand('copy');
  //   e.target.focus();
  //   // this.setState({ copySuccess: 'Copied!' });
  // };

  render() {
    const { scale } = this.state;

    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div
        className="auto-scaling-text"
        style={{ transform: `scale(${scale},${scale})` }}
        ref={node => (this.node = node)}
        // onClick={this.copyToClipboard}
      >
        {this.props.children}
      </div>
    );
  }
}

const Display = props => {
  const { className, currentNumber } = props;
  return (
    <div id="display" data-test="display" className={className} readOnly>
      <AutoScalingText>{currentNumber}</AutoScalingText>
    </div>
  );
};

export default Display;
