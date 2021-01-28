import "./App.css";
import React from "react";

class App extends React.Component {
  render() {
    console.log("hello")
    return (
      <div>
        <h1>Title</h1>
        <input type="text"></input>
        {/* 7, 8, 9, + */}
        <button onClick="dummy">7</button>
        <button onClick="dummy">8</button>
        <button onClick="dummy">9</button>
        <button onClick="dummy">+</button>
        {/* 4, 5, 6, - */}
        <button onClick="dummy">4</button>
        <button onClick="dummy">5</button>
        <button onClick="dummy">6</button>
        <button onClick="dummy">-</button>
        {/* 1, 2, 3, * */}
        <button onClick="dummy">1</button>
        <button onClick="dummy">2</button>
        <button onClick="dummy">3</button>
        <button onClick="dummy">*</button>
        {/* 0, =, */}
        <button onClick="dummy">0</button>
        <button onClick="dummy">=</button>

        
      </div>
    )
  }
}



export default App;