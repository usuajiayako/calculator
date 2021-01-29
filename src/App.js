import './App.css';
import React from 'react';
import KeyPad from "./KeyPad"
import Display from "./Display"

class App extends React.Component {

  state = {
    displayText: ''
  };

  render() {
    return (
      <div class="calculator">
        <h1>Calculator</h1>
        <Display value={this.state.displayText}/>
        <div class="keypad">
        <KeyPad update={this.updateDisplayText}/>
        </div>
      </div>
    );
  }

  updateDisplayText = (newChar) => {
    console.log("in updateDisplayText")
    this.setState((currentState) => {
      return { displayText: currentState.displayText + newChar}
      
    })
  }



  handleClick = ({ target: { id } }) => {
    this.setState(currentState => {
      return {
        displayText: currentState.displayText + currentState.lookUp[id]
      };
    });
  };

  handleSum = () => {
    this.setState(currentState => {
      const symbolRegex = /\D+/;
      const numRegex = /(\d+)[\D]+(\d+)/;

      const symbol = currentState.displayText.match(symbolRegex)[0];

      let [x, y] = [0, 0];

      x = +currentState.displayText.match(numRegex)[1];

      if (symbol !== '**') {
        y = +currentState.displayText.match(numRegex)[2];
      }

      const calculation = this.binaryCalculate(x, y, symbol);

      return { displayText: calculation };
    });
  };

  binaryCalculate = (x, y, symbol) => {
    if (symbol === '+') return x + y;
    if (symbol === '-') return x - y;
    if (symbol === '*') return x * y;
    if (symbol === '/') return x / y;
    if (symbol === '**') return x ** 2;
  };

  clear = () => {
    this.setState(() => {
      return { displayText: '' };
    });
  };
}

export default App;
