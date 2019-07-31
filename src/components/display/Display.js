import React, { Component } from 'react'

class Display extends Component {
  render() {
    return (
      <div id="display" className="calculator--button__display">
        {this.props.currentNumber}
      </div>
    )
  }
}

export default Display;