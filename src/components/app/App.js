import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Display from '../display/Display.js';
import Button from '../button/Button.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      currentEquation: "0",
      currentResult: "0",
      operatorFlag: false,
      commaFlag: false
    }
  }

  handleClick = (buttonName) => {
    let { currentEquation, currentResult, operatorFlag, commaFlag } = this.state
    let currentCounter = currentEquation.match( /[^÷|×|+|(?!()-]+(\d*)(?!.*\d+)/g)
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
                  : currentCounter[0]==="0"
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
      case  buttonName === "C":
              currentEquation = "0"
              currentResult = "0"
              break
      case  buttonName === "=":
              let currentCalculation = currentEquation.replace(/÷/g, "/").replace(/×/g, "*")
              currentCalculation = operatorFlag
              ? currentCalculation.slice(0, -1) 
              : currentCalculation
              // currentResult = String(eval(currentCalculation))
              currentResult = String(new Function( '"use strict";return (' + currentCalculation + ')')())
              break
      case  buttonName === ",":
              currentEquation +=
              (!this.state.commaFlag)
              ? "."
              : ""         
              break
      case  buttonName === "DEL":
              currentEquation = currentEquation.length === 1 
              ? "0"
              : currentEquation.slice(-1) === ")"
                ? currentEquation.replace( /\(-(?!.*\(-)/g ,'').slice(0, -1)
                : currentEquation.slice(0, -1)
              break
      case  buttonName === "+/-":            
              let lastDigit = currentEquation.match( /\(?-?(\d+\.)?\d+\)?$/g )
              currentEquation = lastDigit !== null && lastDigit[0].charAt(0) === '(' 
              ? currentEquation.replace( /\(?-?(\d*\.)?\d+\)?$/g , lastDigit[0].slice(2, lastDigit[0].length).replace(/\)/g, "") )
              : currentEquation.replace( /[^÷|×|+|-]+$/g , '(-' +  currentCounter  + ')')
              break
      case  buttonName === "%":
              currentEquation = currentEquation.replace( /[^÷|×|+|(?!()-]+(\d*)(?!.*\d+)/g , currentCounter / 100)
              break
      default: // no default
              break
    }
    
    // Check comma flag
    let lastCount = currentEquation.match( /[^÷|×|+|-]+$/g )
    console.log(lastCount)
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
      <div className="App">          
      {/* <pre style={{fontSize: '10px'}}>{JSON.stringify(this.state, null, 2)}</pre> */}
        <header className="App-header calculator">
          <Display className="calculator--display__equation" currentNumber={this.state.currentEquation}/>
          <Display className="calculator--display__result" currentNumber={this.state.currentResult}/>
          <div className="calculator--buttons">
            <Button id="clear" name="C" handleClick={this.handleClick}/>
            <Button id="change sign" name="+/-" handleClick={this.handleClick}/>
            <Button id="element" name="%" handleClick={this.handleClick}/>
            <Button id="divide" className="calculator--buttons--button__bold" name="÷" handleClick={this.handleClick}/>
            <Button id="one" name="1" handleClick={this.handleClick}/>
            <Button id="two" name="2" handleClick={this.handleClick}/>
            <Button id="three" name="3" handleClick={this.handleClick}/>
            <Button id="multiply" className="calculator--buttons--button__bold" name="×" handleClick={this.handleClick}/>
            <Button id="four" name="4" handleClick={this.handleClick}/>
            <Button id="five" name="5" handleClick={this.handleClick}/>
            <Button id="six" name="6" handleClick={this.handleClick}/>
            <Button id="subtract" className="calculator--buttons--button__bold" name="-" handleClick={this.handleClick}/>
            <Button id="seven" name="7" handleClick={this.handleClick}/>
            <Button id="eight" name="8" handleClick={this.handleClick}/>
            <Button id="nine" name="9" handleClick={this.handleClick}/>
            <Button id="add" className="calculator--buttons--button__bold" name="+" handleClick={this.handleClick}/>
            <Button id="zero" name="0" handleClick={this.handleClick}/>
            <Button id="comma" name="," handleClick={this.handleClick}/>
            <Button id="delete" name="DEL" handleClick={this.handleClick}/>
            <Button id="equal" className="calculator--buttons--button__bold" name="=" handleClick={this.handleClick}/>
          </div>
        </header>
      </div>
    );
  }
}

Display.propTypes = {
  currentNumber: PropTypes.string.isRequired,
}


export default App;
