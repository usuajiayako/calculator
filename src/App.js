import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    displayText : "",
    lookUp: {
      btn1: "1",
      btn2: "2",
      btn3: "3",
      btn4: "4",
      btn5: "5",
      btn6: "6",
      btn7: "7",
      btn8: "8",
      btn9: "9",
      btn0: "0",
      btnmin: "-",
      btnplus: "+",
      btnmulti: "*",
      btndiv: "/",
    }
  }
  render() {
    return (
      <div>
        <h1>Calculator</h1>
      
        <input type="text" onChange={this.handleInput} value={this.state.displayText}></input>
        {/* 7, 8, 9, + */}
        <button onClick={this.handleClick} id="btn7">7</button>
        <button onClick={this.handleClick} id="btn8">8</button>
        <button onClick={this.handleClick} id="btn9">9</button>
        <button onClick={this.handleClick} id="btnplus">+</button>
        {/* 4, 5, 6, - */}
        <button onClick={this.handleClick} id="btn4">4</button>
        <button onClick={this.handleClick} id="btn5">5</button>
        <button onClick={this.handleClick} id="btn6">6</button>
        <button onClick={this.handleClick} id="btnmin">-</button>
        {/* 1, 2, 3, * */}
        <button onClick={this.handleClick} id="btn1">1</button>
        <button onClick={this.handleClick} id="btn2">2</button>
        <button onClick={this.handleClick} id="btn3">3</button>
        <button onClick={this.handleClick} id="btnmulti">*</button>
        {/* 0, =, */}
        <button onClick={this.handleClick} id="btn0">0</button>
        <button onClick="dummy">=</button>
      </div>
    )
  }
  handleClick = ({target: {id}}) => {
    this.setState((currentState) => {
      return { displayText : currentState.displayText + currentState.lookUp[id]}
    })
  }

  displayText = () => {
    
  }
}



export default App;