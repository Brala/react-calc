import React, { Component } from 'react';
import './Display.css';

class AutoScalingText extends React.Component {
  state = {
    scale: 1
  };
  
  componentDidUpdate() {
    const { scale } = this.state
    console.log(scale)
    const node = this.node
    const parentNode = node.parentNode
    
    const availableWidth = parentNode.offsetWidth
    const actualWidth = node.offsetWidth
    const actualScale = availableWidth / actualWidth
    console.log(availableWidth)
    console.log(actualWidth)
    if (scale === actualScale)
      return
    
    if (actualScale < 1) {
      this.setState({ scale: actualScale })
    } else if (scale < 1) {
      this.setState({ scale: 1 })
    }
  }
  
  render() {
    const { scale } = this.state
    
    return (
      <div
        className="auto-scaling-text"
        style={{ transform: `scale(${scale},${scale})` }}
        ref={node => this.node = node}
      >{this.props.children}</div>
    )
  }
}

class Display extends Component {
  render() {
    return (
      <div type="text" id="display" className={this.props.className}  readOnly>
        
        <AutoScalingText>{this.props.currentNumber}</AutoScalingText>
      </div>
    )
  }
}

export default Display;