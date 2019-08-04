import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    runParentHandleClick = () => {
        this.props.handleClick(this.props.name)
    }
    render() {
        return (
            <button 
                className={this.props.className}
                onClick={this.runParentHandleClick}>
                    {this.props.name}
            </button>
        )
    }
}

export default Button;