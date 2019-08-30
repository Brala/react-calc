import React, { setState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Button.css';
import { useTrail, animated } from 'react-spring'
// import UniqueID from 'react-html-id';

const Buttons = props => {
    const dispatch = useDispatch()
    const buttons = useSelector(state => state.buttons.buttons)

    const trail = useTrail(buttons.length, {
      config: { mass: 5, tension: 5000, friction: 400 },
      from: { opacity: 1, x: 0 },
      opacity: 1, x: 1,
    })
    const toggleHover = (event) => dispatch({ type: 'TOGGLE_HOVER_BUTTON', index: event.target.getAttribute('data-key') });

    return (
        <div className="calculator--buttons">
        {trail.map(({ x, ...rest }, index) => (
          <animated.button
            key={buttons[index].name}// 'this.nextUniqueId()'
            data-key={index}
            id={buttons[index].htmlID}
            name={buttons[index].name}
            className={buttons[index].className}
            style={{ ...rest, 
                transform: x.interpolate(x => `scale(${x})`), 
                // backgroundColor: buttons[index].hover && '#f988bd63',
                textShadow: buttons[index].hover && '1px 2px 3px #00000093',
            }}
            onClick={() => props.handleClick(buttons[index].name)}
            onMouseOver={toggleHover}
            onMouseOut={toggleHover}
          >
            {buttons[index].name}
          </animated.button>
        ))}
    </div>
    )
}

export default Buttons