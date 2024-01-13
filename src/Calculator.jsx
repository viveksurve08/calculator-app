/* eslint-disable no-eval */
import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

const Calculator = () => {
  const [input, setInput] = useState(0);
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => {
    setInput((prevInput) => (prevInput === "0" ? value : prevInput + value));
  };

  const handleClear = () => {
    setInput("0");
  };

  const handleCalculate = () => {
    try {
      const result = eval(input).toString();
      setHistory((prevHistory) => [...prevHistory, `${input} = ${result}`]);
      setInput(result);
    } catch (error) {
      setInput("Error");
    }
  };

  //   const handlePercentage = () => {
  //     setInput((prevInput) => (parseFloat(prevInput) / 100).toString());
  //   };

  const handleCE = () => {
    if (input.length === 1) {
      setInput("0");
    } else {
      setInput((prevInput) => String(prevInput).slice(0, -1));
    }
  };

  //   const handleCancel = () => {
  //     setInput("");
  //   };

  const handleToggleSign = () => {
    setInput((prevInput) => (parseFloat(prevInput) * -1).toString());
  };

  const handleDecimalPoint = () => {
    if (!input.includes(".")) {
      setInput((prevInput) => prevInput + ".");
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
    setInput("0");
  };

  return (
    <>
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="display">{input}</div>
        {history.length > 0 && (
          <div className="history">
            <div className="history-header">
              <h2>History:</h2>
              <button onClick={handleClearHistory} className="clear-history">
                Clear History
              </button>
            </div>
            <ul>
              {history.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="buttons">
          <button onClick={handleClear} className="clear">
            C
          </button>
          <button onClick={() => handleButtonClick("%")}>%</button>
          <button onClick={handleToggleSign}>±</button>
          <button onClick={handleCE} className="clear">
            <MdOutlineCancel />
          </button>

          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("*")}>*</button>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={handleDecimalPoint}>.</button>
          <button onClick={handleCalculate} className="equal">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
