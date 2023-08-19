import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" className="input" value={input} readOnly />
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button className="operator-button" onClick={() => handleClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button className="operator-button" onClick={() => handleClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button className="operator-button" onClick={() => handleClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('0')}>0</button>
          <button className="operator-button" onClick={handleClear}>C</button>
          <button className="equal-button"  onClick={handleCalculate}>=</button>
          <button className="operator-button" onClick={() => handleClick('/')}>/</button>
        </div>
      </div>
      <div className="result">{result}</div>
    </div>
  );
}

export default App;

