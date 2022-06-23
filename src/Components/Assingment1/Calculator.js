import React, { useState } from "react";
import "./Calculator.css";
import Operation from "./Operation";

const Calculator = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();

  // function to set num1
  const takeInput1 = (e) => {
    setNum1(e.target.value);
  };

  // function to set num2
  const takeInput2 = (e) => {
    setNum2(e.target.value);
  };

  // function to add 2 numbers
  const handleAdd = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  // function to subtract 2 numbers
  const handleSub = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  // function to multiply 2 numbers
  const handleMul = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  // function to divide 2 numbers
  const handleDiv = () => {
    setResult(parseFloat(num1) / parseFloat(num2));
  };

  return (
    <>
      <div className="containt">
        {/* input box for num1 */}

        <label className="label">Number 1:</label>
        <br />
        <input
          type="number"
          value={num1}
          placeholder="Enter first number here..."
          onChange={takeInput1}
        />
        <br />

        {/* input box for num1 */}

        <label className="label">Number 2:</label>
        <br />
        <input
          type="number"
          value={num2}
          placeholder="Enter second number here..."
          onChange={takeInput2}
        />
        <br />

        <Operation
          handleAdd={handleAdd}
          handleSub={handleSub}
          handleMul={handleMul}
          handleDiv={handleDiv}
          result={result}
        />
      </div>
    </>
  );
};

export default Calculator;
