import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    equation: '',
    answer: 0
  }

  numberButton = (num) =>{
    this.setState({equation: this.state.equation + num })
    console.log(this.state.equation)
  }

  clearButton = () =>{
    this.setState({equation: '' })
    console.log(this.state.equation)
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
    console.log(expr)
  }

  render(){
  return (
    <div className="App">
      <h1>{this.state.equation}</h1>
      <Button click = {this.numberButton} number="7"></Button>
      <Button click = {this.numberButton} number="8"></Button>
      <Button click = {this.numberButton} number="9"></Button>
      <ClearButton click = {this.clearButton} number="C"></ClearButton>
      <Button click = {this.numberButton} number="4"></Button>
      <Button click = {this.numberButton} number="5"></Button>
      <Button click = {this.numberButton} number="6"></Button>
      <Button click = {this.numberButton} number="x"></Button>
      <Button click = {this.numberButton} number="1"></Button>
      <Button click = {this.numberButton} number="2"></Button>
      <Button click = {this.numberButton} number="3"></Button>
      <Button click = {this.numberButton} number="÷"></Button>
      <Button click = {this.numberButton} number="+"></Button>
      <Button click = {this.numberButton} number="0"></Button>
      <Button click = {this.numberButton} number="-"></Button>
      <EqualButton click = {this.equalButton} number="="></EqualButton>
    </div>
  );
  }
}


const Button = (props) => {
  return(
    <div>
      <button className="button" onClick={() => props.click(props.number)}>{props.number}</button>
    </div>
  )
}

const ClearButton = (props) => {
  return(
    <div>
      <button className="clearButton" onClick={() => props.click()}>{props.number}</button>
    </div>
  )
}

const EqualButton = (props) => {
  return(
    <div>
      <button className="equalButton" onClick={() => props.click()}>{props.number}</button>
    </div>
  )
}

export default App;
