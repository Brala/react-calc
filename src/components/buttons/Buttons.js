import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Button.css';

class Buttons extends Component {
    runParentHandleClick = (button) => {
        console.log(button)
        this.props.handleClick(this.props.name)
    }
    render() {
        return (
            // <button 
            //     className={this.props.className}
            //     onClick={this.runParentHandleClick}>
            //         {this.props.name}
            //     <div>
                    
            //         {/* {this.props.buttons.buttons.map(button => <span>{button.name}</span>)} */}
            //         {/* {window.console.log(this.props.buttons.buttons)} */}
            //     </div>
            // </button>

            <div className="calculator--buttons">
                {this.props.buttons.buttons.map((button, index)=>{
                    return(
                        <button 
                            key={button.id}
                            id={button.htmlID}
                            name={button.name}
                            className={button.className}
                            onClick={this.runParentHandleClick}
                            >
                                {button.name}
                        </button>
                    )})
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    buttons: state.buttons
})

export default connect(mapStateToProps, {}) (Buttons)