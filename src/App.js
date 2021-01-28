import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    displayText: '',
    lookUp: {
      btn1: '1',
      btn2: '2',
      btn3: '3',
      btn4: '4',
      btn5: '5',
      btn6: '6',
      btn7: '7',
      btn8: '8',
      btn9: '9',
      btn0: '0',
      btnmin: '-',
      btnplus: '+',
      btnmulti: '*',
      btndiv: '/',
      btnLeft: '(',
      btnRight: ')'
    }
  };
  render() {
    return (
      <div class="calculator">
        <h1>Calculator</h1>

        <input
          type="text"
          onChange={this.handleInput}
          value={this.state.displayText}
          class="calc-row"
        ></input>
        {/* 7, 8, 9, + */}
        <div class="calc-row">
          <button onClick={this.handleClick} id="btn7">
            7
          </button>
          <button onClick={this.handleClick} id="btn8">
            8
          </button>
          <button onClick={this.handleClick} id="btn9">
            9
          </button>
          <button onClick={this.handleClick} id="btnplus">
            +
          </button>
        </div>
        {/* 4, 5, 6, - */}
        <div class="calc-row">
          <button onClick={this.handleClick} id="btn4">
            4
          </button>
          <button onClick={this.handleClick} id="btn5">
            5
          </button>
          <button onClick={this.handleClick} id="btn6">
            6
          </button>
          <button onClick={this.handleClick} id="btnmin">
            -
          </button>
        </div>
        {/* 1, 2, 3, * */}
        <div class="calc-row">
          <button onClick={this.handleClick} id="btn1">
            1
          </button>
          <button onClick={this.handleClick} id="btn2">
            2
          </button>
          <button onClick={this.handleClick} id="btn3">
            3
          </button>
          <button onClick={this.handleClick} id="btnmulti">
            *
          </button>
        </div>
        {/* 0, /, */}
        <div class="calc-row">
          <button onClick={this.handleClick} id="btn0">
            0
          </button>
          <button onClick={this.handleClick} id="btnLeft">
            (
          </button>
          <button onClick={this.handleClick} id="btnRight">
            )
          </button>
          <button onClick={this.handleClick} id="btndiv">
            /
          </button>
        </div>
        {/* = */}
        <button onClick={this.handleSum} class="calc-row" id="btneqls">
          =
        </button>
      </div>
    );
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
      const numRegex = /(\d+)[\D](\d+)/;
      const symbolRegex = /\D/;

      const x = +currentState.displayText.match(numRegex)[1];
      const y = +currentState.displayText.match(numRegex)[2];
      const symbol = currentState.displayText.match(symbolRegex)[0];

      const calculation = this.binaryCalculate(x, y, symbol);

      return { displayText: calculation };
    });
  };

  binaryCalculate = (x, y, symbol) => {
    if (symbol === '+') return x + y;
    if (symbol === '-') return x - y;
    if (symbol === '*') return x * y;
    if (symbol === '/') return x / y;
  };
}

export default App;
