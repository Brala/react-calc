/* eslint-disable no-nested-ternary */
/* eslint no-eval: 0 */
/* eslint react/jsx-filename-extension: [1, { "extensions": [".js", ".jsx"] }] */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { animated, useSpring } from "react-spring";
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { displayActions } from '../display/reducers/duck'

import Display from "../display/Display";
import Buttons from "../buttons/Buttons";

const App = () => {
  const dispatch = useDispatch();
  let { currentEquation, currentResult, operatorFlag, commaFlag } = useSelector(
    state => state.display
  );

  const slideDown = useSpring({
    from: { transform: `translate3d(0,-50px,0)`, opacity: 0 },
    transform: `translate3d(0,0,0)`,
    opacity: 1
  });
  const slideLeft = useSpring({
    from: { transform: `translate3d(-250px,0,0)`, opacity: 0 },
    transform: `translate3d(0,0,0)`,
    opacity: 1
  });
  const slideRight = useSpring({
    from: { transform: `translate3d(250px,0,0)`, opacity: 0 },
    transform: `translate3d(0,0,0)`,
    opacity: 1
  });

  const handleKeyPress = event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }
    let keyChar = event.key;
    // translate keyboard operators into visually corresponding format for display
    keyChar =
      keyChar === "*"
        ? (keyChar = "×")
        : keyChar === "/"
        ? (keyChar = "÷")
        : keyChar;
    HandleClick(keyChar);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  const HandleClick = buttonName => {
    const currentNumber = currentEquation.match(
      /\d*\.?\d+(e-?)?\d*\.?(?!.*\d)/g
    );

    //  ("×" + buttonName))
    switch (true) {
      case buttonName === "0" ||
        buttonName === "1" ||
        buttonName === "2" ||
        buttonName === "3" ||
        buttonName === "4" ||
        buttonName === "5" ||
        buttonName === "6" ||
        buttonName === "7" ||
        buttonName === "8" ||
        buttonName === "9":
        currentEquation =
          currentEquation.slice(-1) === ")"
            ? (currentEquation += `×${buttonName}`)
            : currentEquation.slice(-1) === "-" ||
              currentEquation.slice(-1) === "+" ||
              currentEquation.slice(-1) === "÷" ||
              currentEquation.slice(-1) === "×"
            ? (currentEquation += buttonName)
            : currentEquation === "0"
            ? buttonName
            : currentNumber[0] === "0"
            ? currentEquation.buttonName
            : (currentEquation += buttonName);
        break;
      case buttonName === "+" ||
        buttonName === "-" ||
        buttonName === "÷" ||
        buttonName === "×":
        !operatorFlag
          ? (currentEquation += buttonName)
          : (currentEquation =
              currentEquation.slice(0, currentEquation.length - 1) +
              buttonName);
        break;
      case buttonName === "C" || buttonName === "c":
        currentEquation = "0";
        currentResult = "0";
        break;
      case buttonName === "=" || buttonName === "Enter": {
        // translate display operators into countable characters
        let currentCalculation = currentEquation
          .replace(/÷/g, "/")
          .replace(/×/g, "*");
        currentCalculation =
          currentCalculation.slice(-1) === "."
            ? currentCalculation.slice(0, -1)
            : operatorFlag
            ? currentCalculation.slice(0, -1)
            : currentCalculation;
        currentResult = String(eval(currentCalculation));
        break;
      }
      case buttonName === "," || buttonName === ".":
        currentEquation += commaFlag
          ? ""
          : currentEquation.slice(-1) === "-" ||
            currentEquation.slice(-1) === "+" ||
            currentEquation.slice(-1) === "÷" ||
            currentEquation.slice(-1) === "×"
          ? "0."
          : ".";
        break;
      case buttonName === "DEL" ||
        buttonName === "Delete" ||
        buttonName === "Backspace":
        currentEquation =
          currentEquation.length === 1
            ? "0"
            : currentEquation.slice(-1) === ")"
            ? currentEquation.replace(/\(-(?!.*\(-)/g, "").slice(0, -1)
            : currentEquation.slice(0, -1);
        break;
      case buttonName === "+/-": {
        const lastDigit = currentEquation.match(
          /(\(-?)?(\d+\.)?\d+(e-?)?\d*\.?\)?(?!.*\d)/g
        );
        currentEquation =
          lastDigit !== null && lastDigit[0].charAt(0) === "("
            ? currentEquation.replace(
                /\(?-?(\d+\.)?\d+(e-?)?\d*\.?\)?(?!.*\d)/g,
                lastDigit[0].slice(2, lastDigit[0].length).replace(/\)/g, "")
              )
            : currentEquation.replace(
                /[^÷|×|+|(?!()-]+(\d*)(e-?)?\d*(?!.*\d+)/g,
                `(-${currentNumber})`
              );
        break;
      }
      case buttonName === "%":
        currentEquation = currentEquation.replace(
          /\d*\.?\d+(e-?)?\d*\.?(?!.*\d)/g,
          currentNumber / 100
        );
        break;
      default:
        // no default
        break;
    }

    // Check comma flag
    const lastCount = currentEquation.match(/[^÷|×|+|-]+$/g);
    lastCount !== null &&
    (String(lastCount[0]).includes(".") || currentEquation.slice(-1) === ")")
      ? (commaFlag = true)
      : (commaFlag = false);
    // Check operator flag
    currentEquation.slice(-1) === "+" ||
    currentEquation.slice(-1) === "-" ||
    currentEquation.slice(-1) === "÷" ||
    currentEquation.slice(-1) === "×"
      ? (operatorFlag = true)
      : (operatorFlag = false);

    dispatch({
      type: "UPDATE_DISPLAY",
      currentEquation,
      currentResult,
      operatorFlag,
      commaFlag
    });
  };

  const checkProps = [
    {
      slideDown,
      dispatch,
      currentEquation,
      currentResult,
      operatorFlag,
      commaFlag
    }
  ];

  return (
    <animated.div className="App" style={slideDown}>
      {/* <pre style={{fontSize: '10px'}}>{JSON.stringify(useSelector(state => state.display), null, 2)}</pre> */}
      <header className="calculator" style={slideRight}>
        <Display
          className="calculator--display__equation"
          currentNumber={currentEquation}
          style={slideRight}
        />
        <Display
          className="calculator--display__result"
          currentNumber={currentResult}
          style={slideLeft}
        />
        <Buttons handleClick={HandleClick} checkProps={checkProps} />
      </header>
    </animated.div>
  );
};

Display.propTypes = {
  className: PropTypes.string.isRequired,
  currentNumber: PropTypes.string.isRequired
};
Buttons.propTypes = {
  handleClick: PropTypes.func.isRequired,
  checkProps: PropTypes.arrayOf(
    PropTypes.shape({
      slideDown: PropTypes.object.isRequired,
      dispatch: PropTypes.func.isRequired,
      currentEquation: PropTypes.string.isRequired,
      currentResult: PropTypes.string.isRequired,
      operatorFlag: PropTypes.bool.isRequired,
      commaFlag: PropTypes.bool.isRequired
    })
  )
};

export default App;
