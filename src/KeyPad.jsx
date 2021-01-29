import Key from "./Key" 
import React from "react"

class KeyPad  extends React.Component {
  state = {  
    keys: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/",]

  }
  render() { 
    return ( 
       this.state.keys.map((key) => {
       return <Key symbol={key} onClick={this.handleClick}/>})

  
     );
  }
  handleClick = () => {
console.log("clicked")
  }
}
 
export default KeyPad;