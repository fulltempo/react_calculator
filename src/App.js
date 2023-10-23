import React from 'react';
import logo from './logo.svg';
import './App.css';

// let output = document.getElementById("output");

function App() {
  const [output, setOutput] = React.useState('0');

  function appendToOutput(value) {
    if (output === "0") {
      // output = value;
      setOutput(value);
    }
    /*else if(output.innerHTML === "√"){
      output.innerHTML = ;  
    }*/
    else {
      // output.innerHTML += value;
      setOutput(output + value);
    }
  }

  function clearOutput() {
    // output.innerHTML = "0";
    setOutput("0");
  }

  function BackSpace() {
    // if (output.innerHTML.length > 1) {
    //   output.innerHTML = output.innerHTML.substr(0, output.innerHTML.length - 1);
    // }
    // else {
    //   output.innerHTML = 0;
    // }
    if (output.length > 1) {
      setOutput(output.substr(0, output.length - 1));
    }
    else {
      // setOutput(0);
      setOutput('0');
    }
  }

  function calculate() {
    // if (output.innerHTML.includes("√")) {
    //   var num = output.innerHTML.substring(1, output.innerHTML.length);
    //   output.innerHTML = eval(Math.sqrt(num));
    // }
    // else {
    //   output.innerHTML = eval(output.innerHTML);
    // }
    if (output.includes("√")) {
      var num = output.substring(1, output.length);
      setOutput(eval(Math.sqrt(num)));
    }
    else if (output.includes("%")) {
      setOutput(parseInt(output)/100);
    }
    else {
      console.log(output);
      setOutput(eval(output));
    }
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="container">
      <div className="output" id="output">{output}</div>
      <button className="buttonOfAD" onClick={() => clearOutput()} id="clear">AC</button>
      <button className="buttonOfAD" onClick={() => BackSpace()}>DEL</button>
      <button className="buttonOfOperation" onClick={() => appendToOutput('%')}>%</button>
      <button className="buttonOfOperation" onClick={() => appendToOutput('√')}>√</button>
      <button className="button" onClick={() => appendToOutput('7')}>7</button>
      <button className="button" onClick={() => appendToOutput('8')}>8</button>
      <button className="button" onClick={() => appendToOutput('9')}>9</button>
      <button className="buttonOfOperation" onClick={() => appendToOutput('/')}>/</button>
      <button className="button" onClick={() => appendToOutput('4')}>4</button>
      <button className="button" onClick={() => appendToOutput('5')}>5</button>
      <button className="button" onClick={() => appendToOutput('6')}>6</button>
      <button className="buttonOfOperation" onClick={() => appendToOutput('*')}>*</button>
      <button className="button" onClick={() => appendToOutput('1')}>1</button>
      <button className="button" onClick={() => appendToOutput('2')}>2</button>
      <button className="button" onClick={() => appendToOutput('3')}>3</button>
      <button className="buttonOfOperation" onClick={() => appendToOutput('-')}>-</button>
      <button className="button" onClick={() => appendToOutput('.')}>.</button>
      <button className="button" onClick={() => appendToOutput('0')}>0</button>
      <button className="button equals" onClick={() => calculate()}>=</button>
      <button className="buttonOfOperation" onClick={() => appendToOutput('+')}>+</button>
    </div>
  );
}

export default App;
