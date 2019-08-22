import React from 'react';
import { useSelector } from 'react-redux';
import './Button.css';
// import UniqueID from 'react-html-id';

const Buttons = props => {
    const buttons = useSelector(state => state.buttons)

    return (
            <div className="calculator--buttons">
                {buttons.buttons.map((button, index)=>{
                    return(
                        <button 
                            key={index}// 'this.nextUniqueId()'
                            id={button.htmlID}
                            name={button.name}
                            className={button.className}
                            onClick={() => props.handleClick(button.name)}
                            >
                                {button.name}
                        </button>
                    )})
                }
            </div>
    )
}

export default Buttons