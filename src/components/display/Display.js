import React, { Component } from 'react';
import './Display.css';

class Display extends Component {
  render() {
    return (
      <input type="text" id="display" className={this.props.className} value={this.props.currentNumber} readOnly>
        
      </input>
    )
  }
}

export default Display;