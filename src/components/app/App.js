import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Display from '../display/Display.js';
import Button from '../button/Button.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      currentNumber: "0",
      operatorFlag: false
    }
  }

  handleClick = (buttonName) => {
    let currentNumber = this.state.currentNumber
    let operatorFlag = this.state.operatorFlag
    switch(true){
      case  buttonName==="0" ||
            buttonName==="1" ||
            buttonName==="2" ||
            buttonName==="3" ||
            buttonName==="4" ||
            buttonName==="5" ||
            buttonName==="6" ||
            buttonName==="7" ||
            buttonName==="8" ||
            buttonName==="9" :
      if(this.state.currentNumber!=="0") {
      currentNumber += buttonName
      operatorFlag = false
      }else{
        currentNumber = buttonName
      }      
      break
      case  buttonName === "+" ||
            buttonName === "-" ||
            buttonName === "÷" ||
            buttonName === "×":
      if(!this.state.operatorFlag){
        currentNumber += buttonName
        operatorFlag = true
      }

    }
    this.setState({operatorFlag})
    this.setState({currentNumber})
  }

  render(){
    return(
      <div className="App">
        <header className="App-header calculator">
          <Display className="calculator--display__equation" currentNumber={this.state.currentNumber}/>
          <Display className="calculator--display__result" currentNumber={this.state.currentNumber}/>
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
            <Button id="dot" name="," handleClick={this.handleClick}/>
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
