import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Button.scss";
import { useSpring, useTrail, animated } from "react-spring";
// import UniqueID from 'react-html-id';

const Buttons = props => {
  const dispatch = useDispatch();
  const buttons = useSelector(state => state.buttons.buttons);

  const whiteBg = useSpring({
    from: { background: "#ffffff00" },
    to: { background: "#ffffff" },
    config: { duration: 900 }
  });

  const trail = useTrail(buttons.length, {
    config: { mass: 1, tension: 10000, friction: 300 },
    from: { opacity: 1, x: 0 },
    opacity: 1,
    x: 1
  });

  const toggleHover = event =>
    dispatch({
      type: "TOGGLE_HOVER_BUTTON",
      index: event.target.getAttribute("data-key")
    });

  useEffect(() => {
    const light = document.getElementById("light");
    const calculatorButtons = document.getElementById("calculatorButtons");
    calculatorButtons.addEventListener("mousemove", e => {
      const rect = calculatorButtons.getBoundingClientRect();
      light.style.top = `${e.clientY - rect.top}px`;
      light.style.left = `${e.clientX - rect.left}px`;
    });
  }, []);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <animated.div
      className="calculator--buttons"
      id="calculatorButtons"
      data-test="calculator--buttons"
      style={whiteBg}
    >
      {trail.map(({ x, ...rest }, index) => (
        <animated.button
          key={buttons[index].name} // 'this.nextUniqueId()'
          data-key={index}
          id={buttons[index].htmlID}
          name={buttons[index].name}
          className={buttons[index].className}
          style={{
            ...rest,
            transform: x.interpolate(() => `scale(${x})`),
            // backgroundColor: buttons[index].hover && '#f988bd63',
            textShadow: buttons[index].hover && "2px 1px 2px #f988bdc2"
          }}
          onClick={() => props.handleClick(buttons[index].name)}
          onMouseOver={toggleHover}
          onFocus={toggleHover}
          onMouseOut={toggleHover}
          onBlur={toggleHover}
        >
          {buttons[index].name}
        </animated.button>
      ))}
      <div id="light" className="calculator--buttons--light" />
    </animated.div>
  );

  // button.propTypes = {
  //   handleClick: PropTypes.any
  // };
};

export default Buttons;
