import React from 'react';
import { useSelector } from 'react-redux';
import './Button.css';
import { useTrail, animated } from 'react-spring'
// import UniqueID from 'react-html-id';

const Buttons = props => {
    const buttons = useSelector(state => state.buttons.buttons)

    const trail = useTrail(buttons.length, {
      config: { mass: 5, tension: 5000, friction: 400 },
      from: { opacity: 0, x: 1 },
      opacity: 1, x: 1,
    })

    return (
        <div className="calculator--buttons">
        {trail.map(({ x, ...rest }, index) => (
          <animated.button
            key={buttons[index].name}// 'this.nextUniqueId()'
            id={buttons[index].htmlID}
            name={buttons[index].name}
            className={buttons[index].className}
            style={{ ...rest, transform: x.interpolate(x => `scale(${x})`) }}
            onClick={() => props.handleClick(buttons[index].name)}
            >
            {buttons[index].name}
          </animated.button>
        ))}
    </div>
    )
}

export default Buttons