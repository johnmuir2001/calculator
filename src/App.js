import React, {Component} from 'react';
import './App.css';
import Button from './components/button'

class App extends Component {
  state = {
    equation: '',
    buttons: ["7","8","9","C","4","5","6","x","1","2","3","÷","+","0","-","="],
  }

  clickHandler = (button) => {
    
    this.setState({equation: this.state.equation + button })
    
    if(button === "C"){
      this.clearButton()
    } else if (button === "="){
      this.equalButton()
    } 
};

  clearButton = () =>{
    this.setState({equation: '' })
  }
  
  equalButton = () =>{
    let expr = this.state.equation
    let chars = expr.split("")
    let n = [] 
    let op = []
    let index = 0
    let oplast = true
    n[index] = "";

    for (let i = 0; i < chars.length; i++) {
      if (isNaN(parseInt(chars[i])) && !oplast) {
        op[index] = chars[i];
        index++;
        n[index] = "";
        oplast = true;
      } else {
          n[index] += chars[i];
          oplast = false;
      }
  }

  expr = parseFloat(n[0]);
    for (let j = 0; j < op.length; j++) {
      let num = parseFloat(n[j + 1]);
      switch (op[j]) {
        case "+":
          expr = expr + num;
          break;
        case "-":
          expr = expr - num;
          break;
        case "x":
          expr = expr * num;
          break;
        case "÷":
          expr = expr / num;
          break;
        default:
          expr = "Error";
        }
    }
    this.setState({equation: expr })
  }

  myFunction() {
    let body = document.button;
    body.classList.toggle("dark-mode");
 }

  render(){
  return (
      <div className="App">
        <h1>{this.state.equation}</h1>
        {this.state.buttons.map((button,index) => {
          return <Button key = {index} label={button} click = {this.clickHandler}/>;
        })}
        <div className="darkWrap">
          <label class="switch">
            <input type="checkbox" onClick={this.myFunction}></input>
            <span class="slider round"></span>
          </label>
          <h2>Dark Mode</h2>
        </div>
      </div>
  );
  }
}



export default App;