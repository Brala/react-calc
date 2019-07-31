import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Display from '../display/Display.js';
import Button from '../button/Button.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      currentNumber: "empty string"
    }
  }
  render(){
    return(
      <div className="App">
        <header className="App-header calculator">
          <Display currentNumber={this.state.currentNumber}/>
          <Button id="zero" name="0" handleClick={this.handleClick}/>
          <Button id="one" name="1" handleClick={this.handleClick}/>
          <Button id="two" name="2" handleClick={this.handleClick}/>
          <Button id="three" name="3" handleClick={this.handleClick}/>
          <Button id="four" name="4" handleClick={this.handleClick}/>
          <Button id="five" name="5" handleClick={this.handleClick}/>
          <Button id="six" name="6" handleClick={this.handleClick}/>
          <Button id="seven" name="7" handleClick={this.handleClick}/>
          <Button id="eight" name="8" handleClick={this.handleClick}/>
          <Button id="nine" name="9" handleClick={this.handleClick}/>
          <Button id="clear" name="C" handleClick={this.handleClick}/>
          <Button id="equal" name="=" handleClick={this.handleClick}/>
          <Button id="dot" name="." handleClick={this.handleClick}/>
          <Button id="add" name="+" handleClick={this.handleClick}/>
          <Button id="subtract" name="-" handleClick={this.handleClick}/>
          <Button id="multiply" name="*" handleClick={this.handleClick}/>
          <Button id="divide" name="/" handleClick={this.handleClick}/>
        </header>
      </div>
    );
  }
}

Display.propTypes = {
  currentNumber: PropTypes.string.isRequired,
}


export default App;
