import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [output, setOutput] = React.useState('0');

  function appendToOutput(value) {
    if (output === "0") {
      // output = value;
      setOutput(value);
    }
    else {
      setOutput(output + value);
    }
  }

  function clearOutput() {
    setOutput("0");
  }

  function BackSpace() {
    if (output.length > 1) {
      setOutput(output.substr(0, output.length - 1));
    }
    else {
      setOutput('0');
    }
  }

  function calculate() {
    if (output.includes("√")) {
      var num = output.substring(1, output.length);
      setOutput(eval(Math.sqrt(num)));
    }
    else if (output.includes("%")) {
      setOutput(parseInt(output) / 100);
    }
    else {
      console.log(output);
      setOutput(eval(output));
    }
  }

  return (
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
