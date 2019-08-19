import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Button.css';

class Buttons extends Component {
    runParentHandleClick = (button) => {
        this.props.handleClick(button)
    }
    render() {
        return (
            <div className="calculator--buttons">
                {this.props.buttons.buttons.map((button, index)=>{
                    return(
                        <button 
                            key={button.id}
                            id={button.htmlID}
                            name={button.name}
                            className={button.className}
                            onClick={() => this.runParentHandleClick(button.name)}
                            >
                                {button.name}
                        </button>
                    )})
                }
                {/* {console.log(this.props)  } */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    buttons: state.buttons
})

export default connect(mapStateToProps, {}) (Buttons)