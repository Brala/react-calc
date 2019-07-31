import React, { Component } from 'react';

class Button extends Component {
    runParentHandleClick = () => {
        {this.props.handleClick(this.props.name)}
    }
    render() {
        return (
            <button onClick={this.runParentHandleClick}>{this.props.name}</button>
        )
    }
}

export default Button;