import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'

import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { buttonsActions } from '../buttons/reducers/duck'
import UniqueID from 'react-html-id';

import Display from '../display/Display.js';
import Buttons from '../buttons/Buttons.js';

/* eslint no-eval: 0 */

window.store = store


// store.dispatch(buttonsActions.add({name:'testing'}))

// const buttonsActions = bindActionCreators({add: addButton, reset}, store.dispatch)
// buttonsActions.add({htmlID: 'f',  name: 'action.name',   className: 'action.className'})
// buttonsActions.reset()

class App extends Component {
  constructor(props){
    super(props)
    UniqueID.enableUniqueIds(this)
    this.state={
      currentEquation: "0",
      currentResult: "0",
      operatorFlag: false,
      commaFlag: false,
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }
    let keyChar = event.key
    // translate keyboard operators into visually corresponding format for display
    keyChar = keyChar === "*" 
    ? keyChar = "×"
    : keyChar === "/"
      ? keyChar = "÷"
      : keyChar
    this.handleClick(keyChar)
  }

  handleClick = (buttonName) => {
    console.log(buttonName)
    let { currentEquation, currentResult, operatorFlag, commaFlag } = this.state
    let currentNumber = currentEquation.match( /\d*\.?\d+\.?(?!.*\d)/g)

    switch(true){
      case  buttonName === "0" ||
            buttonName === "1" ||
            buttonName === "2" ||
            buttonName === "3" ||
            buttonName === "4" ||
            buttonName === "5" ||
            buttonName === "6" ||
            buttonName === "7" ||
            buttonName === "8" ||
            buttonName === "9" :
              currentEquation = currentEquation.slice(-1) === ")" 
              ? currentEquation += ( "×" + buttonName )
              : currentEquation.slice(-1) === "-" ||
                currentEquation.slice(-1) === "+" ||
                currentEquation.slice(-1) === "÷" ||
                currentEquation.slice(-1) === "×"
                ? currentEquation += buttonName 
                : currentEquation === "0"
                  ? buttonName 
                  : currentNumber[0]==="0"
                    ? currentEquation + "." + buttonName
                    : currentEquation += buttonName
              break
      case  buttonName === "+" ||
            buttonName === "-" ||
            buttonName === "÷" ||
            buttonName === "×" :
              !this.state.operatorFlag
              ? currentEquation += buttonName
              : currentEquation = currentEquation.slice(0, currentEquation.length - 1) + buttonName
              break
      case  buttonName === "C" || 
            buttonName === "c" : 
              currentEquation = "0"
              currentResult = "0"
              break
      case  buttonName === "="     ||
            buttonName === "Enter" :
              // translate display operators into countable characters
              let currentCalculation = currentEquation.replace(/÷/g, "/").replace(/×/g, "*")
              currentCalculation = currentCalculation.slice(-1) === "."
              ? currentCalculation.slice(0, -1) 
              : operatorFlag
                ? currentCalculation.slice(0, -1) 
                : currentCalculation
              currentResult = String(eval(currentCalculation))
              break
      case  buttonName === "," ||
            buttonName === "." :
              currentEquation +=
              this.state.commaFlag
              ? ""
              : currentEquation.slice(-1) === "-" ||
                currentEquation.slice(-1) === "+" ||
                currentEquation.slice(-1) === "÷" ||
                currentEquation.slice(-1) === "×"
                ? "0."
                : "."        
              break
      case  buttonName === "DEL"       ||
            buttonName === "Delete"    ||
            buttonName === "Backspace" :
              currentEquation = currentEquation.length === 1 
              ? "0"
              : currentEquation.slice(-1) === ")"
                ? currentEquation.replace( /\(-(?!.*\(-)/g ,'').slice(0, -1)
                : currentEquation.slice(0, -1)
              break
      case  buttonName === "+/-":
              let lastDigit = currentEquation.match( /\(?-?(\d+\.)?\d+\.?\)?(?!.*\d)/g )
              currentEquation = lastDigit !== null && lastDigit[0].charAt(0) === '(' 
              ? currentEquation.replace( /\(?-?(\d+\.)?\d+\.?\)?(?!.*\d)/g , lastDigit[0].slice(2, lastDigit[0].length).replace(/\)/g, "") )
              : currentEquation.replace( /[^÷|×|+|(?!()-]+(\d*)(?!.*\d+)/g , '(-' +  currentNumber  + ')')
              break
      case  buttonName === "%":
              currentEquation = currentEquation.replace( /\d*\.?\d+\.?(?!.*\d)/g , (currentNumber / 100) )
              break
      default: // no default
              break
    }
    
    // Check comma flag
    const lastCount = currentEquation.match( /[^÷|×|+|-]+$/g )
    lastCount !== null && ( String(lastCount[0]).includes(".") || currentEquation.slice(-1) === ")" )
    ? commaFlag = true
    : commaFlag = false
    // Check operator flag
    currentEquation.slice(-1) === "+" ||
    currentEquation.slice(-1) === "-" ||
    currentEquation.slice(-1) === "÷" ||
    currentEquation.slice(-1) === "×"
    ? operatorFlag = true
    : operatorFlag = false
    
    this.setState({currentEquation, currentResult, operatorFlag, commaFlag})
  }

  render(){
    return(
      <Provider store={store}>
        <div className="App" >          
        {/* <pre style={{fontSize: '10px'}}>{JSON.stringify(this.state, null, 2)}</pre> */}
          <header className="App-header calculator">
            <Display className="calculator--display__equation" currentNumber={this.state.currentEquation}/>
            <Display className="calculator--display__result" currentNumber={this.state.currentResult}/>
            <Buttons handleClick={this.handleClick}/>
          </header>
        </div>
      </Provider>
    );
  }
}

Display.propTypes = {
  className: PropTypes.string.isRequired,
  currentNumber: PropTypes.string.isRequired
}
Buttons.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default App;
