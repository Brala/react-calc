import React, { Component } from "react";
import "./Display.scss";

class AutoScalingText extends Component {
  state = {
    scale: 1
  };

  componentDidUpdate() {
    const { scale } = this.state;
    const node = this.node;
    const parentNode = node.parentNode;
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
  return (
    <div id="display" data-test="display" className={props.className} readOnly>
      <AutoScalingText>{props.currentNumber}</AutoScalingText>
    </div>
  );
};

export default Display;
