import React, { Component } from 'react';
import './Display.css';

class Display extends Component {
  render() {
    return (
      <div id="display" className={this.props.className}>
        {this.props.currentNumber}
      </div>
    )
  }
}

export default Display;